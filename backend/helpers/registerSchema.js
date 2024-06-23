const express = require("express");
const Joi = require("joi");

const userRegisterSchema = Joi.object({
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
}).xor("email", "username");

module.exports = {
  userRegisterSchema,
  userSignInSchema,
};
