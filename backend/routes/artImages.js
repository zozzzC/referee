const express = require("express");
const {
  createArtImage,
  retrieveArtImages,
  updateArtImage,
  putArtImage,
  deleteArtImage,
} = require("../controllers/artImages");
const router = express.Router();

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

router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const image = await retrieveArtImages(id);
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

router.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  console.log(req.body);
  try {
    const patchedCsItem = await putArtImage(id, req.body);
    if (!patchedCsItem) return res.status(400).send(`ID not found.`);
    //status() sets a HTTP status on the response (as a Javascript object on the server side).
    //sendStatus() sets the status and sends it to the client.
    return res.sendStatus(200);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  const parseId = parseInt(req.params.id);

  try {
    const patchedCsItem = await updateArtImage(parseId, req.body);
    console.log(patchedCsItem);
    if (patchedCsItem === false) return res.status(400).send(`ID not found.`);
    return res.sendStatus(200);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  const parseId = parseInt(req.params.id);

  try {
    const deletedCsItem = await deleteArtImage(parseId);
    if (deletedCsItem === false) return res.status(400).send(`ID not found.`);
    return res.sendStatus(200);
  } catch (err) {
    return res.status(404).send(err.message);
  }
});

module.exports = router;
