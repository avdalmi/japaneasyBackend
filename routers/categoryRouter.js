const { Router } = require("express");

const Recipe = require("../models").recipe;
const router = new Router();
const User = require("../models").user;
const Ingredients = require("../models").ingredient;
const Instructions = require("../models").instructions;
const Categories = require("../models").category;

router.get("/", async (req, res, next) => {
    const categories = await Categories.findAll();
    if (!categories || categories.length === 0) {
        res.status(404).send("INVALID REQUEST");
        return;
    }
    res.status(200).send(categories);
});

module.exports = router;