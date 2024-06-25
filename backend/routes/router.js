const express = require("express");
const router = express.Router();

//routes
const commissionStates = require("./commission-status.js");
const artImages = require("./artImages.js");
const register = require("./register.js");
const login = require("./login.js");
const user = require("./user.js")

router.use("/commission-status", commissionStates);
router.use("/artImages", artImages);
router.use("/register", register);
router.use("/login", login);
router.use("/user", user);

module.exports = router;
