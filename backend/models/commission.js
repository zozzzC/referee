import { boolean } from "joi";
import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose;

const commissionSchema = new Schema({
  referenceNumber: {
    type: Number,
    required: true,
  },
  lastUpdated: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  style: [
    {
      type: String,
      enum: ["Anime", "Semi-Realism", "Painterly"], //might need to move this to ensure that the selected style is available for the given commission type?
      default: "Anime",
      required: true,
    },
  ],
  commissionType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Commission Type",
    required: true,
  },
  status: {
    type: String,
    enum: [
      "Waiting for Confirmation",
      "Waitlist",
      "Denied",
      "Started",
      "In Progress",
      "On Hold",
      "Completed",
    ],
    default: "Waiting for Confirmation",
    required: true,
  },
  addOns: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Add Ons",
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
});

const addOnsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  //each add on will have an associated commissionType, OR none at all
  commissionType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Commission Type",
  },
});

const commissionTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  style: [
    {
      type: String,
      enum: ["Anime", "Semi-Realism", "Painterly"], //might need to move this to ensure that the selected style is available for the given commission type?
      default: "Anime",
      required: true,
    },
  ],
});

// const styleSchema = new Schema({
//   name: {
//     type: string,
//     required: true,
//   },
// });

const commission = mongoose.model("Commission", commissionSchema);
const commissionType = mongoose.model("CommType", commissionTypeSchema);
const addOns = mongoose.model("AddOns", addOnsSchema);
// const style = mongoose.model("Style", styleSchema);

module.exports = {
  commission,
  commissionType,
  addOns,
  style,
};
