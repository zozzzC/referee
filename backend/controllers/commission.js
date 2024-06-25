const express = require(express);

async function createCommission(req) {
    const { } = req;

    if (!req?.id) throw new Error("Commissions require a reference ID.");
    

}

async function retriveCommission(req) {

}

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
