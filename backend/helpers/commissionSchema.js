const express = require("express");
const Joi = require("joi");
const { default: mongoose } = require("mongoose");
const mongoose = require(mongoose);
const checkID = require("../helpers/checkIdExists.js");
const user = require("../models/user.js");

const commissionValidationSchema = Joi.object({
  referenceNumber: Joi.number.required(),
  lastUpdated: Joi.date().max("now").required(),
  user: Joi.string().custom(), //unfinished
  style: Joi.string().custom(), //unfinished
  commissionType: Joi.string().custom(), //unfinished
  addOns: Joi.string().custom(), //unfinished
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
  totalPrice: Joi.number().min(),
});

module.exports = commissionValidationSchema;
