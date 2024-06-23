const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookie = require("cookie-parser");
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const joi = require("joi");
const strat = require("./strategy/loginLocalStrat.js");
require("dotenv").config();

const app = express();
// app.use(cookie);
mongoose.connect(process.env.MONGODB_URI);

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 6 * 100000000, //some arbitrary number i dont know how long to set this to yet
    },
  })
);
app.use(express.json());
app.use(express.urlencoded());
//cont this
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

//router
const router = require("./routes/router");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSucessStatus: 200,
};

app.use(express.static("public"));
app.use(cors(corsOptions));
app.use("/", router);

const port = 8080;

const server = app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("get request to default page successful");
});
