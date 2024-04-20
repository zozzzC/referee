const express = require("express");
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require("passport");

//router
const router = require("./routes/router");

const app = express();

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

app.use(passport.initialize());
app.listen(passport.session());

const port = 8080;

//8080 is backend port as per above--the frontend is 3000, but 3000 will presumably send http requests to the backend (port 4000)
const server = app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("get request to default page successful");
});
