const { Router } = require("express");
const router = new Router();
const IngredientDescription = require("../models").ingredientDescription;
const Ingredients = require("../models").ingredient;

//get all tips and tricks
router.get("/", async (req, res) => {
    const tips = await IngredientDescription.findAll();
    res.status(200).send({ message: "ok", tips });
});

//get tips and tricks by id and their descriptions
router.get("/:id", async (req, res) => {
    const { id } = req.params;

    if (isNaN(parseInt(id))) {
        return res.status(404).send({ message: "Tip id is not a number" });
    }
    const tipById = await IngredientDescription.findByPk(id);

    if (tipById === null) {
        return res.status(404).send({ message: "Tip not found" });
    }
    res.status(200).send({ message: "ok", tipById });
});

module.exports = router;