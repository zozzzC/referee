const mongoose = require("mongoose");
const { Schema } = mongoose;

const artImageSchema = new Schema({
  route: String,
  desc: String,
  dateMade: Date,
});

const artImage = mongoose.model("Art", artImageSchema);

const artInfoSchema = new Schema({
  title: String,
  style: String,
  technique: String,
  tools: String,
  other: String,
});

const artInfo = mongoose.model("ArtInfo", artInfoSchema);

module.exports = {
  artInfo,
  artImage,
};
