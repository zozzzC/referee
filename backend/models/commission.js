import { boolean } from "joi";
import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose;

const commissionSchema = new Schema({
  referenceNumber: {
    type: Number,
    required: true,
  },
  lastUpdated: Date,
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  style: [
    {
      type: String,
      enum: ["Anime", "Semi-Realism", "Painterly"],
      default: "Anime",
      required: true,
    },
  ],
  commissionType: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CommissionType",
      required: true,
    },
  ],
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
      ref: "AddOns",
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
    ref: "CommissionType",
  },
});

const commissionTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const commission = mongoosemodel("Commission", commissionSchema);
const commissionType = mongoosemodel("Commission Type", commissionTypeSchema);
const addOns = mongoosemodel("Add Ons", addOnsSchema);

module.exports = {
  commission,
  commissionType,
  addOns,
};
