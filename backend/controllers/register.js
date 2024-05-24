const express = require("express");
const bcrypt = require("bcrypt");

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
  console.log(username + email + password);

  const hash = await bcrypt.hash(password, 16);

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
