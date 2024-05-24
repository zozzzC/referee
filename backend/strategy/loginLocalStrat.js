//TODO: may need to move this somewhere else...
const passport = require("passport");
const LocalStrategy = require("passport-local");

const mockUsers = [
  {
    id: 0,
    username: "me",
    email: "mail@mail.com",
    password: "hashhere",
  },
];
passport.serializeUser((user, done) => {
  //runs once during login
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  //on subsequent requests while logged in, this will be called
  try {
    const user = mockUsers.find((user) => user.id === id); //search for user
    if (!user) throw new Error("Could not find user.");
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

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
