const { Router } = require("express");
const SavedUser = require("../models").SavedUser;

const Recipe = require("../models").recipe;
const router = new Router();
const Ingredients = require("../models").ingredient;
const Instructions = require("../models").instructions;
const User = require("../models").user;

//get all recipes
router.get("/", async (req, res) => {
    const recipes = await Recipe.findAll();
    res.status(200).send({ message: "ok", recipes });
});

// get recipes by id and include their ingredients and instructions
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
            },

        ]
    });

    if (recipe === null) {
        return res.status(404).send({ message: "recipe not found" });
    }

    return res.status(200).send({ message: "ok", recipe });
});

router.post("/addrecipe/:id", async (req, res) => {
    const { id } = req.params;

    const user = await User.findByPk(id, {
        include: [Recipe]
    });

    const { } = req.body;

    const addNewRecipe = await Recipe.create({

    });
});

module.exports = router;