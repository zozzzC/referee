import mongoose from "mongoose";
const { Schema } = mongoose;

const artImageSchema = new Schema({
  route: String,
  desc: String,
  dateMade: Date,
});

const artImage = mongoosemodel("Art", artImageSchema);

const artInfoSchema = new Schema({
  title: String,
  style: String,
  technique: String,
  tools: String,
  other: String,
});

//This will likely need more relations later, but for now this is sufficient
const commissionSchema = new Schema({
  commType: String,
  lastUpdated: Date,
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

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
const commission = mongoosemodel("Commission", commissionSchema);
