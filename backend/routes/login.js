const express = require("express");
const passport = require("passport");
const router = express.Router();
const { default: mongoose } = require("mongoose");

//for login, please refer to strategy/loginLocalStrat.js



router.post("/", passport.authenticate("local"), (req, res) => {
  res.sendStatus(201);
});

router.get(`/status`, (req, res) => {
  console.log("status of user: ");
  console.log(req.user);
  console.log(req.session);
  if (req.user) return res.status(200).send(req.user);
  return res.sendStatus(401);
});

module.exports = router;
