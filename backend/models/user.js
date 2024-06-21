const mongoose = require("mongoose");
const { Schema } = mongoose;

const url = process.env.MONGODB_URI;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const user = mongoosemodel("User", userSchema);

module.exports = user;
