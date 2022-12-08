const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const { SALT_ROUNDS } = require("../config/constants");
const SavedUsers = require("../models").SavedUser;
const Recipe = require("../models/").recipe;
const router = new Router();

router.get("/profile", authMiddleware, async (req, res) => {

    const SavedUserId = req.user.dataValues.id;

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
    }
});
module.exports = router;