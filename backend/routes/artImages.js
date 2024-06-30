const express = require("express");
const {
  createArtImage,
  retrieveArtImages,
  updateArtImage,
  putArtImage,
  deleteArtImage,
} = require("../controllers/artImages");
const router = express.Router();
const artImageSchema = require("../models/artInfo.js")

const artImages = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
    route: "",
    desc: "kaveh art",
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

//example of middleware
const resolveIndexByUserId = (req, res, next) => {
  const parseId = parseInt(req.params.id);

  if (parseId === null) return res.status(400).send("ID returned undefined.");
  if (isNaN(parseId)) return res.status(400).send("ID must be an integer.");

  const indexArt = artImages.findIndex((a) => a.id === parseId);

  if (indexArt === -1)
    return res.status(404).send("ID was not found. (Return -1)");

  req.parseId = parseId;
  req.indexArt = indexArt;
  next();
};

router.get("/", async (req, res) => {
  console.log(req.query);

  const {
    query: { filter, value },
  } = req;

  if (!filter && !value) {
    const artImage = await retrieveArtImages();
    return res.json(artImage);
  }

  //square brackets means to get the property with that name--IE: if filter = desc, then for each image get the desc and check if it inclues the value we are looking for
  if (filter && value)
    return res.json(artImages.filter((image) => image[filter].includes(value)));
});

router.get("/:id", resolveIndexByUserId, async (req, res) => {
  try {
    const image = await retrieveArtImages(req.parseId);
    return res.status(201).json(image);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newCsItem = await createArtImage(req.body);
    return res.status(201).json(newCsItem);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.put("/:id", resolveIndexByUserId, async (req, res) => {
  try {
    const patchedCsItem = await putArtImage(
      req.parseId,
      req.indexArt,
      req.body
    );
    if (!patchedCsItem) return res.status(400).send(`ID not found.`);
    //status() sets a HTTP status on the response (as a Javascript object on the server side).
    //sendStatus() sets the status and sends it to the client.
    return res.status(200).json(patchedCsItem);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.patch("/:id", resolveIndexByUserId, async (req, res) => {
  try {
    const patchedCsItem = await updateArtImage(
      req.parseId,
      req.indexArt,
      req.body
    );
    console.log(patchedCsItem);
    if (!patchedCsItem) return res.status(400).send(`ID not found.`);
    return res.status(200).json(patchedCsItem);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.delete("/:id", resolveIndexByUserId, async (req, res) => {
  try {
    const deletedCsItem = await deleteArtImage(req.parseId);
    if (deletedCsItem === false) return res.status(400).send(`ID not found.`);
    return res.sendStatus(200);
  } catch (err) {
    return res.status(404).send(err.message);
  }
});

module.exports = router;
