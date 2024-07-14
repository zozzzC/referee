//route to create + manage commissions
const express = require("express");
const router = express.Router();
const { createCommission } = require("../controllers/commission");

router.post("/", async (req, res) => {
  try {
    const valid = await createCommission(req.body);
    return res.sendStatus(201);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = router;
