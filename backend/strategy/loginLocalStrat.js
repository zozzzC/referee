//TODO: may need to move this somewhere else...
const passport = require("passport");
const LocalStrategy = require("passport-local");

const mockUsers = [
  {
    id: 0,
    username: "zozchuu",
    pass: "pass",
  },
];

//change from mjs to js -- have to find out how to turn this back to js
module.exports = passport.use(
  new LocalStrategy((username, password, done) => {
    try {
      const findUser = mockUsers.find((user) => user.username === username);
      if (!findUser) throw new Error("Username not found.");
      if (findUser.password !== password)
        throw new Error("Wrong password, please try again.");
      done(null, findUser);
    } catch (err) {
      done(err, null);
    }
  })
);
