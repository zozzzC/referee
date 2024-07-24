const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");

//display name + profile only
async function getUserData(req) {
  if (req.session.user) {
    //in the case that this is true, the front-end must be provided with the data that the given logged in user can see (eg: manage existing commissions, status, etc)
    const { username } = req.session.user;
    return username;
  } else {
    throw new Error("User is not authenticated.");
  }
}

//lists a paginated version of the users currently existing commissions if user is not admin. if user is admin, then display all commissions available
async function getUserCommission(user) {
  
}

module.exports = {
  getUserData,
};
