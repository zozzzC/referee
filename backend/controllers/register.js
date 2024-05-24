const express = require("express");
const bcrypt = require("bcrypt");

const salt = 12;
const tempUsers = [
  {
    id: 0,
    username: "me",
    email: "mail@mail.com",
    password: "hashhere",
  },
];

//TODO: request validation has not been implemented yet.
async function createNewUser(user) {
  const { username, email, password } = user;

  bcrypt.genSalt(salt, (err, s) => {
    if (err) throw new Error("Salt unsuccessful.");
  });

  const hash = await bcrypt.hash(password, s, (err, hash) => {
    if (err) throw new Error("Hash unsuccessful.");
  });

  //check if email exists
  const foundEmail = tempUsers.find((u) => u.email === email);

  if (foundEmail) throw new Error("That email has already been registered.");

  tempUsers.push({
    id: Date.now.toString(), //temporary id
    username: username,
    email: email,
    password: hash,
  });
  return user;
}

module.exports = { createNewUser };
