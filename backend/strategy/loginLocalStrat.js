//TODO: may need to move this somewhere else...
const bcrypt = require("bcrypt");
const express = require("express");
const passport = require("passport");
const { Strategy } = require("passport-local");
const router = express.Router();

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




module.exports = router;
