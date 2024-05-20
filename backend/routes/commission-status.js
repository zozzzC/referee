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

router.get("/", async (req, res) => {
  await res.json(commissionStates);
});

router.get("/:id", (req, res) => {
  const { id } = req.params.id;
  const csItem = commissionStates.find((i) => i.id === id);
  res.send(csItem);

  if (!csItem) {
    res.sendStatus(404);
  }
});

module.exports = router;
