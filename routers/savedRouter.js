const { Router } = require("express");
const router = new Router();
const authMiddleware = require("../auth/middleware");
const SavedUser = require("../models").SavedUser;
const User = require("../models").user;

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const saved = await SavedUser.findByPk(id, {
        include: User
    });

    if (saved === null) {
        return res.status(404).send({ message: "user not found" });
    }

    res.status(200).send({ message: "ok", saved });
});

module.exports = router;