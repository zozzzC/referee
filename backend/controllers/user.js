const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");

//display name + profile only
async function getUserData(user) {
  if (user.session.visited == true) {
    //in the case that this is true, the front-end must be provided with the data that the given logged in user can see (eg: manage existing commissions, status, etc)
    const { username } = user.session;
    console.log(username);
    return true;
  }
  return false;
}

//lists a paginated version of the users currently existing commissions.
async function getUserCommission(user) {}

module.exports = {
  getUserData,
};
