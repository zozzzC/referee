const express = require("express");
const Joi = require("joi");

const userRegisterSchema = Joi.object({
  username: Joi.string()
    .pattern(new RegExp("[a-zA-Z0-9]{0,16}"))
    .min(3)
    .max(15)
    .required()
    .messages({
      "string.min": "*Username must be a minimum length of 3.",
      "string.max": "*Username must be less than 16 characters long.",
      "any.required": "*Please enter a username.",
    }),
  email: Joi.string().email().required().messages({
    "string.email": "*Please enter a valid email.",
    "any.required": "*Please enter an email.",
  }),
  password: Joi.string()
    .pattern(new RegExp("[a-zA-Z0-9!@#$%^&*)(+=._-]{0,21}"))
    .min(3)
    .max(20)
    .required()
    .messages({
      "string.min": "*Password must be at least 3 characters long.",
      "string.max": "*Password must be less than 21 characters long.",
      "any.required": "*Please enter an email.",
    }),
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
