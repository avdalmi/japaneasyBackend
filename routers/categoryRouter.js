const { Router } = require("express");

const router = new Router();
const Categories = require("../models").category;

//get all categories
router.get("/", async (req, res, next) => {
    const categories = await Categories.findAll();
    if (!categories || categories.length === 0) {
        res.status(404).send("INVALID REQUEST");
        return;
    }
    res.status(200).send(categories);
});

module.exports = router;