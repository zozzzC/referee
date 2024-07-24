//allows admin to make new commission form (probably cant make a UI for it yet, that might be a different challenge altogether)
//structure is just:
//{ sectionName: [type (required) : (radio, checklist, inputfield), title:  (required) : (string), options: [array of strings], desc: (string optional)]}
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  //get all viewable commission forms
});

router.get("/:id", async (req, res) => {});
