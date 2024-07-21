const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const url = process.env.MONGODB_URI;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
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
  admin: {
    type: String,
    enum: ["User", "Admin"],
    default: "User",
    required: false,
  },
});

const User = model("User", userSchema);

module.exports = { User };
