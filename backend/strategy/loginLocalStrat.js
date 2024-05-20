//TODO: may need to move this somewhere else...
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const { Strategy } = require("passport-local");

const mockUsers = [
  {
    id: 0,
    username: "zozchuu",
    pass: "pass",
  },
];

passport.use(session);

//change from mjs to js -- have to find out how to turn this back to js
const pass = passport.use(
  new Strategy((username, password, cb) => {
    try {
      const findUser = mockUsers.find((user) => user.username === username);
      if (!findUser) throw new Error("Username not found.");
      if (findUser.password !== password)
        throw new Error("Wrong password, please try again.");
      cb(null, findUser);
    } catch (err) {
      cb(err, null);
    }
  })
);

module.exports = pass;
