const express = require("express");
const router = express.Router();
const passport = require("passport");
const passportLocal = require("passport-local");
const { createNewUser } = require("../controllers/register");

router.get("/", (req, res) => {
  return "you cant do that!!!";
});

router.post("/", async (req, res) => {
  try {
    const newUser = await createNewUser(req.body);
    //if this is successful, the user must now have a new session
    req.session.visited = true;
    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = router;
