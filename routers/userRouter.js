const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const { SALT_ROUNDS } = require("../config/constants");
const SavedUsers = require("../models").SavedUser;
const Recipe = require("../models/").recipe;
const router = new Router();

router.get("/:id/recipes", async (req, res) => {
    const userId = req.params.id;
    const usersRecipes = await User.findByPk(userId);
    console.log(usersRecipes);
    if (!User) {
        return res.status(404).send("user not found");
    }
    const saveduser = await SavedUsers.findAll({ where: { userId: userId } }
        ,
        {
            include: [
                {
                    model: Recipe,
                }
            ]
        }

    );
    console.log("saved user", JSON.stringify(saveduser, null, 2));
}
);

// router.get("/profile", authMiddleware, async (req, res) => {
//     // const { id } = req.params;
//     // console.log("hello its me email", id);

//     // console.log("data", req.user.dataValues);
//     const SavedUserId = req.user.dataValues.id;
//     // console.log("idddddd", id);
//     // delete req.user.dataValues["password"];

//     const profile = await User.findAll({
//         where: {
//             id: SavedUserId
//         },
//         include: {
//             model: Recipe,

//         }
//     });

//     if (!profile) {
//         res.status(404).send("user profile not found");
//     } else {
//         res.send(profile);
//     }
// });

router.get("/profile", authMiddleware, async (req, res) => {
    // const { id } = req.params;
    // console.log("hello its me email", id);

    // console.log("data", req.user.dataValues);
    const SavedUserId = req.user.dataValues.id;
    // console.log("idddddd", SavedUserId);
    // delete req.user.dataValues["password"];

    const savedRecipes = await SavedUsers.findAll({
        where: {
            userId: SavedUserId
        },
        include: [
            {
                model: Recipe,
            },
        ]
    });
    const user = await User.findByPk(SavedUserId);

    if (!savedRecipes || !user) {
        res.status(404).send("user profile not found");
    } else {
        res.status(200).send({ savedRecipes, user });
        // res.status(200).send(user);
    }
});
module.exports = router;