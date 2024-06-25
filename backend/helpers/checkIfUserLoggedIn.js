const express = require("express");
const session = require("express-session");

async function checkIfUserLoggedIn(req) {
  if (req.session.visited == true) {
    //in the case that this is true, the front-end must be provided with the data that the given logged in user can see (eg: manage existing commissions, status, etc)
    const { username } = req.session;
    console.log(username);
  } else {
    return false;
  }
}

module.exports = {};
