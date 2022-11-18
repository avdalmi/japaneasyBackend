import Recipe from ("../models").recipe;

router.get("/", async (req, res) => {
    const recipes = await Recipe.findAll();
    res.status(200).send({ message: "ok", recipes });
});

module.exports = router;