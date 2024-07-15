const express = require("express");
const commissionValidationSchema = require("../helpers/commissionSchema");

async function createCommission(comm) {
  const { error, val } = await commissionValidationSchema.validateAsync(comm);

  if (error) {
    throw new Error(error.details[0].message);
  }

  return comm;
}

async function retriveCommission(req) {}

async function putCommission(req) {}

async function updateCommission(req) {}

async function deleteCommission(req) {}

module.exports = {
  retriveCommission,
  putCommission,
  createCommission,
  updateCommission,
  deleteCommission,
};
