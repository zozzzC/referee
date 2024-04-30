const express = require("express");
const router = express.Router();

let commissionStates = [
  {
    id: 1,
    type: "general-state",
    content: "open",
  },
  {
    id: 2,
    type: "open-date",
    content: "jan 2024",
  },
  {
    id: 3,
    type: "close-date",
    content: "nov 2024",
  },
];

//:val is a param in req, which corresponds to true or false.
router.get("/", (req, res) => {
  res.json(commissionStates);
});

router.get("/:id", (req, res) => {
  const { id } = req.params.id;
  const csItem = commissionStates.find((i) => i.id === id);
  res.send(csItem);
});

module.exports = router;
