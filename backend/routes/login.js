const express = require("express");
const passport = require("passport");
const { Strategy } = require("passport-local");
const router = express.Router();
const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");

const mockUsers = [
  {
    id: 0,
    username: "zozchuu",
    pass: "pass",
  },
];

passport.use(
  new LocalStrategy((username, password, cb) => {
    try {
      const findUser = mockUsers.find((user = user.username === username));
      if (!findUser) throw new Error("Username not found.");
      if (findUser.password !== password)
        throw new Error("Wrong password, please try again.");
    } catch (err) {
      throw new Error("Server error in finding user.");
    }
  })
);

router.post(
  "/login/password",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

module.exports = router;
