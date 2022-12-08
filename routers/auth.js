const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const { SALT_ROUNDS } = require("../config/constants");
const recipe = require("../models/recipe");
const SavedUsers = require("../models").SavedUser;
const Recipe = require("../models/").recipe;
const router = new Router();
const Category = require("../models").category;


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
    // console.log("idddddd", id);
    const SavedUserId = req.user.dataValues.id;
    // console.log("data", user);
    delete req.user.dataValues["password"];
    const user = await User.findByPk(SavedUserId, {
        include: {
            model: Recipe,
            through: {
                attributes: ["isFavorite", "isSaved"]
            },
        }
    });
    res.status(200).send({ ...req.user.dataValues, user });
});


router.patch("/update", async (req, res) => {
    console.log("here", req.body);
    const { saved, recipeId, userId } = req.body;
    // console.log("req bosy saved, id", saved, "recipe id:", recipeId, "userId", userId);

    // if (!saved || !recipeId || !userId) return;

    const recipeToUpdate = await SavedUsers.findOne({
        where: {
            userId: userId,
            recipeId: recipeId,
            isSaved: saved
        }
    });
    if (!recipeToUpdate) {
        return res.status(404).send("recipe to update not found");
    }

    await recipeToUpdate.update({
        isSaved: !saved
    }
    );
    // console.log("user", recipeToUpdate);

    res.status(200).send(recipeToUpdate);
});

router.post("/addsaved", async (req, res) => {
    // console.log("here", req.body);
    const { saved, recipeId, userId } = req.body;

    console.log("saved", saved, "recipeid", recipeId, "userId", userId);

    const recipe = await Recipe.findByPk(recipeId);
    const newSaved = await SavedUsers.create({
        recipeId,
        userId,
        isSaved: true
    });

    res.status(200).send(newSaved);
});

module.exports = router;