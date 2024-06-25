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

const artInfo = mongoosemodel("ArtInfo", artInfoSchema);

module.exports = {
  artInfo,
  artImage,
};
