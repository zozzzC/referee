//some basic mongo test data.
const { commission, commissionType, addOns } = require("../models/commission");
const { user } = require("../models/user");
const mongoose = require(mongoose);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function testUser(){
  const testUser = new user({ 
    username: "zozchuu",
    password: "testpass",
    email: "here@mail.com",
    admin: "Admin"
  })

  await testUser.save();
}

async function testArtInfo() { 

}

