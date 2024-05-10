const express = require("express");
const passport = require("passport");
const { Strategy } = require("passport-local");
const router = express.Router();
const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");
const local = require()

router.post(
  "/login/password",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

module.exports = router;
