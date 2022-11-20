const { Router } = require("express");

const Recipe = require("../models").recipe;
const router = new Router();
const User = require("../models").user;

router.get("/", async (req, res) => {

    const recipes = await Recipe.findAll();
    res.status(200).send({ message: "ok", recipes });
});

module.exports = router;