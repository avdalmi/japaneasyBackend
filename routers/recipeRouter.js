const { Router } = require("express");

const Recipe = require("../models").recipe;
const router = new Router();
const User = require("../models").user;
const Ingredients = require("../models").ingredient;
const Instructions = require("../models").instructions;
const Categories = require("../models").category;


router.get("/", async (req, res) => {

    const recipes = await Recipe.findAll();
    res.status(200).send({ message: "ok", recipes });
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    if (isNaN(parseInt(id))) {
        return res.status(404).send({ message: "Recipe id is not a number" });
    }
    const recipe = await Recipe.findByPk(id, {
        include: [
            {
                model: Ingredients
            },
            {
                model: Instructions
            }
        ]
    });
    // console.log("artwork by id router", artwork);

    if (recipe === null) {
        return res.status(404).send({ message: "recipe not found" });
    }

    return res.status(200).send({ message: "ok", recipe });
});

router.get("");

module.exports = router;