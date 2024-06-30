const express = require("express");
const router = express.Router();
const { getUserData } = require("../controllers/user.js");

router.get(`/`, async (req, res) => {
  try {
    const user = await getUserData(req);
    return res.status(200).json(user);
  } catch (err) {
    return res.sendStatus(401);
  }
});

module.exports = router;
