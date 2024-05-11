const express = require("express");
const router = express.Router();

const statusOptions = [
  {
    id: 0,
    title: "open for waitlist",
    sideDesc: "(Est. Intake: )",
  },
  {
    id: 1,
    title: "open",
    sideDesc: "()",
  },
  {
    id: 2,
    title: "closed",
    sideDesc: "(Next Intake: )",
  },
];

const styleOptions = [
  {
    id: 0,
    title: "Anime Standard",
  },
  {
    id: 1,
    title: "Anime Painterly",
  },
  {
    id: 2,
    title: "Semi Realistic Painterly",
  },
  {
    id: 3,
    title: "Realistic Painterly/Interprative",
  },
];

const pricelist = [
  {
    id: 0,
    title: "vtuber model",
    statusOptionsID: 0,
    date: "date object goes here",
    styleOptionsID: [0],
    priceOptionsID: [0, 1],
  },
];

const priceOption = [
  {
    id: 0,
    name: "fullbody",
    price: "$800",
    desc: "A R2R fullbody Vtuber model that has 5 free sticker expressions.",
  },
  {
    id: 1,
    name: "halfbody",
    price: "$500",
    desc: "A R2R halfbody Vtuber model that has 3 free sticker expressions. The hands are cut off for a halfbody model!",
  },
];
