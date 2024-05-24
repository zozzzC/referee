const mongoose = require("mongoose");
const { Schema } = mongoose;

const url = prcoess.env.MONGODB_URI;

//TODO: do i need this???
try {
  const res = await mongoose.connect(url);
  if (res) {
    console.log("mongo connection complete");
  }
} catch (err) {
  console.log("could not connect to mongo");
}

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  commission: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Commission",
    },
  ],
});

const user = mongoosemodel("User", userSchema);
