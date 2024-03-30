const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
    res.send("got users");
});

module.exports = router;
