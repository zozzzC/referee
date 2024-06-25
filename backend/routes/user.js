const express = require("express");
const router = express.Router();
const { getUserData } = require("../controllers/user.js");

router.get(`/`, async (req, res) => {
  console.log(req);
  const user = getUserData(req);
  return res.status(200).send("yes");
});

module.exports = router;
