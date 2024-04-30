const express = require("express");
const router = express.Router();

let artImages = [
  {
    key: 0,
    route: "",
    desc: "meteor shower art",
    dateMade: "2024-04-23T23:21:02.072Z",
    info: [
      {
        title: "meteor shower",
      },
      {
        style: "semi-realism",
      },
      {
        technique: "digital pencil-like drawing",
      },
      {
        tools: "CSP Pro + XP Pen Tablet DecoV2",
      },
      {
        other: "Minimal references used--this was a personal piece!",
      },
    ],
  },

  {
    key: 1,
    route: "",
    desc: "romw art",
    dateMade: "2024-04-23T23:21:02.072Z",
    info: [
      {
        title: "romw",
      },
      {
        style: "semi-realism",
      },
      {
        technique: "digital paitning",
      },
      {
        tools: "CSP Pro + XP Pen Tablet DecoV2",
      },
      {
        other: null,
      },
    ],
  },
  {
    key: 2,
    route: "",
    desc: "meteor shower art",
    dateMade: "2024-04-23T23:21:02.072Z",
    info: [
      {
        title: "kaveh art",
      },
      {
        style: "semi-realism",
      },
      {
        technique: "digital painting",
      },
      {
        tools: "CSP Pro + XP Pen Tablet DecoV2",
      },
      {
        other: null,
      },
    ],
  },
];

//:val is a param in req, which corresponds to true or false.
router.get("/", (req, res) => {
  res.json(artImages);
});

router.get("/:id", (req, res) => {
  const { id } = req.params.id;
  const image = artImages.find((i) => i.id === id);
  res.send(image);
});

router.post("/create-cs-item", (req, res) => {
  try {
  } catch (err) {}
});

//query paramaters

module.exports = router;
