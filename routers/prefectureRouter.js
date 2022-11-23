const { Router } = require("express");
const router = new Router();

const Prefectures = require("../models").prefectures;

const Recipe = require("../models").recipe;

router.get("/", async (req, res) => {
    const prefectures = await Prefectures.findAll({
        include: Recipe
    });
    // console.log(prefectures.toJSON());

    res.status(200).send({ message: "ok", prefectures });
});


module.exports = router;