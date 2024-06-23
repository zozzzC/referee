import mongoose from "mongoose";
const { Schema } = mongoose;

const commissionSchema = new Schema({
  referenceNumber: Number,
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  style: [
    {
      type: String,
      enum: ["Anime", "Semi-Realism", "Painterly"],
      default: "Anime",
    },
  ],
  commissionType: [
    {
      type: String,
      enum: ["Vtuber Model", "Illustration", "Skeb-Style"],
      default: "Illustration",
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
  },
  addOns: [
    { 
        type: mongoose.Schema.Types.ObjectId,
        ref: AddOns
    }
  ],
  totalPrice: Number
});

const AddOns = new Schema({
    
})