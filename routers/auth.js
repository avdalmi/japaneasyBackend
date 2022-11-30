const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const { SALT_ROUNDS } = require("../config/constants");
const SavedUser = require("../models").SavedUser;
const Recipe = require("../models/").recipe;
const router = new Router();


//login 
router.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res
                .status(400)
                .send({ message: "Please provide both email and password" });
        }

        const user = await User.findOne({ where: { email } });

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(400).send({
                message: "User with that email not found or password incorrect",
            });
        }

        delete user.dataValues["password"]; // don't send back the password hash
        const token = toJWT({ userId: user.id });
        return res.status(200).send({ token, user: user.dataValues });
    } catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Something went wrong, sorry" });
    }
});


//signup
router.post("/signup", async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    console.log(email, password, firstName, lastName, "req.bodyy");

    if (!email || !password || !firstName || !lastName) {
        return res.status(400).send("Please provide an email, password and a firstName");
    }

    try {
        const newUser = await User.create({
            email,
            password: bcrypt.hashSync(password, SALT_ROUNDS),
            firstName,
            lastName
        });

        console.log("new User", newUser);
        delete newUser.dataValues["password"]; // don't send back the password hash

        const token = toJWT({ userId: newUser.id });

        res.status(201).json({ token, user: newUser.dataValues });
    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            return res
                .status(400)
                .send({ message: "There is an existing account with this email" });
        }

        return res.status(400).send({ message: "Something went wrong, sorry" });
    }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
    // don't send back the password hash
    delete req.user.dataValues["password"];
    res.status(200).send({ ...req.user.dataValues });
});


router.get("/profile/:id", async (req, res) => {
    const { id } = req.params;
    console.log("hello its me email", id);

    // const id = req.user.dataValues["id"];
    const profile = await User.findByPk(id, {
        include: {
            model: Recipe,
            through: {
                attributes: ["recipeId"]
            }
        }
    });
    // console.log("profiel", profile.toJSON());
    if (!profile) {
        res.status(404).send("user profile not found");
    } else {
        res.send(profile);
    }
});
module.exports = router;