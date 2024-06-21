const express = require("express");
const bcrypt = require("bcrypt");
const Joi = require("joi");

//for login, please refer to strategy/loginLocalStrat.js

const userSignInSchema = Joi.object({
  username: Joi.string()
    .pattern(new RegExp("[a-zA-Z0-9]{3,15}"))
    .min(3)
    .max(15)
    .required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(new RegExp("[a-zA-Z0-9]{3,20}"))
    .min(3)
    .max(20)
    .required(),
});

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
  const { error, val } = userSignInSchema.validateAsync(user);

  if (error) {
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

  if (foundEmail) throw new Error("That email has already been registered.");

  tempUsers.push({
    id: Date.now.toString(), //temporary id
    username: username,
    email: email,
    password: hash,
  });

  return user;
}

module.exports = { createNewUser };
