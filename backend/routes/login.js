const express = require("express");
const passport = require("passport");
const router = express.Router();
const { default: mongoose } = require("mongoose");

//for login, please refer to strategy/loginLocalStrat.js

router.post("/", passport.authenticate("local"), (req, res) => {
  req.session.user = req.body;
  req.session.visited = true;
  res.sendStatus(201);
});

// router.get(`/status`, (req, res) => {
//   //exclude password hash from this
//   if (req.session.user) return res.status(200).send(req.session.user);
//   return res.sendStatus(401);
// });

module.exports = router;
