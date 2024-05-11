const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookie = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

//TODO: fix issue where passport does not seem to work (probably something to do with sessions)
// const passport = require("passport");

//router
const router = require("./routes/router");

const app = express();

mongoose.connect(process.env.MONGODB_URI);

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSucessStatus: 200,
};

app.use(express.static("public"));
app.use(cors(corsOptions));
app.use("/", router);
// app.use(passport.initialize());
// app.listen(passport.session());

const port = 8080;

//8080 is backend port as per above--the frontend is 3000, but 3000 will presumably send http requests to the backend (port 4000)
const server = app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("get request to default page successful");
});
