const express = require("express");
const passport = require("passport");
const { Strategy } = require("passport-local");
const router = express.Router();
const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");

console.log(passport);

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

module.exports = router;
