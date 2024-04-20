const express = require("express");
const router = express.Router();

//routes
const commissionStates = require("./commission-status.js");

router.use("/commission-status", commissionStates);

module.exports = router;
