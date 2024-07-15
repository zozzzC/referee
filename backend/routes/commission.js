//route to create + manage commissions
const express = require("express");
const router = express.Router();
const {
  createCommission,
  retriveCommission,
  updateCommission,
  putCommission,
  deleteCommission,
} = require("../controllers/commission");

router.post("/", async (req, res) => {
  try {
    const valid = await createCommission(req.body);
    return res.sendStatus(201);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const {
      query: { filter, value },
    } = req;

    if ( !filter && !value) { 
        const comm = await retriveCommission();
        return res.json(comm);
    }

    if (filter && value) { 
      return res.json()
    }

  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = router;
