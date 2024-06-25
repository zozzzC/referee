const express = require("express");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const { userRegisterSchema } = require("../helpers/registerSchema");

//for login, please refer to strategy/loginLocalStrat.js

const salt = 12;

const tempUsers = [
  {
    id: 0,
    username: "me",
    email: "mail@mail.com",
    password: "hashhere",
  },
];

//TODO: request validation has not been implemented yet.
async function createNewUser(user) {
  const { error, val } = userRegisterSchema.validate(user);

  if (error) {
    //TODO: get the type of error so that we know where to put the subtext

    throw new Error(error.details[0].message);
  }

  const { username, email, password } = user;

  var hash = "";

  bcrypt.genSalt(salt, (err, s) => {
    if (err) throw new Error("Salt unsuccessful.");
    bcrypt.hash(password, s, (err, h) => {
      if (err) throw new Error("Hash unsuccessful.");
      hash = h;
    });
  });

  //check if email exists
  const foundEmail = tempUsers.find((u) => u.email === email);

  if (foundEmail) throw new Error("*That email has already been registered.");

  tempUsers.push({
    id: Date.now.toString(), //temporary id
    username: username,
    email: email,
    password: hash,
  });

  return user;
}

module.exports = { createNewUser };
