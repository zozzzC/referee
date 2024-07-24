const express = require("express");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const { userRegisterSchema } = require("../helpers/registerSchema");
const { User } = require("../models/user");

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

async function createNewUser(user) {
  const { error, val } = userRegisterSchema.validate(user);

  console.log(user);

  if (error) {
    throw new Error(error.details[0].message);
  }

  const { username, email, password } = user;

  const hash = await bcrypt.hash(password, salt);

  //check if email exists
  const query = User.where({ email: email });
  const foundEmail = await query.findOne();

  if (foundEmail) throw new Error("*That email has already been registered.");

  const newUser = new User({
    username: username,
    email: email,
    password: hash,
  });

  await newUser.save();

  return user;
}

module.exports = { createNewUser };
