const express = require("express");
const Joi = require("joi");
const { default: mongoose } = require("mongoose");
const { idExists } = require("../helpers/checkIdExists.js");
const user = require("../models/user.js");

const commissionValidationSchema = Joi.object({
  referenceNumber: Joi.number().required(),
  lastUpdated: Joi.date().max("now").required(),
  user: Joi.string()
    .external((value, helpers) => idExists(user, "user", value, helpers))
    .required()
    .messages({
      "any.required": "UserID is required.",
      "any.invalid": "Specified UserID was not found in collection.",
    }),
  // style: Joi.string().custom(), //unfinished
  // commissionType: Joi.string().custom(), //unfinished
  // addOns: Joi.string().custom(), //unfinished
  status: Joi.string()
    .valid(
      "Waiting for Confirmation",
      "Waitlist",
      "Denied",
      "Started",
      "In Progress",
      "On Hold",
      "Completed"
    )
    .required(),
  totalPrice: Joi.number().required(),
});

module.exports = commissionValidationSchema;
