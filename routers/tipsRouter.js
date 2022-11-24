const { Router } = require("express");
const router = new Router();
const IngredientDescription = require("../models").ingredientDescription;
const Ingredients = require("../models").ingredient;

router.get("/", async (req, res) => {
    const tips = await IngredientDescription.findAll();
    res.status(200).send({ message: "ok", tips });
});


module.exports = router;