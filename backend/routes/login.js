const express = require("express");
const passport = require("passport");
const router = express.Router();
const { default: mongoose } = require("mongoose");

console.log(passport);


//move to login
router.post("/", passport.authenticate("local"), (req, res) => {
  return res.status(201).json(newCsItem);
});

module.exports = router;
