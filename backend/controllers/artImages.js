const express = require("express");

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

async function retrieveArtImages(id) {
  if (id === undefined) {
    return artImages;
  }
  if (isNaN(id)) throw new Error("ID must be an integer.");

  //fix cannot find when index = 0 ?
  const artImage = artImages.find((a) => id === a.id);
  console.log(artImage);

  if (!artImage) throw new Error("Could not find art image with id.");

  return artImage;
}

async function createArtImage(artImage) {
  console.log(artImage);
  //The optional chaining (?.) operator accesses an object's property or calls a function.
  //If the object accessed or function called using this operator is undefined or null,
  //the expression short circuits and evaluates to undefined instead of throwing an error.
  if (!artImage?.id) throw new Error("Art images require a unique ID.");

  const existingArtImage = artImages.find((a) => a.id === artImage.id);
  if (existingArtImage) throw new Error(`ID '${artImage.id}' already exists.`);

  artImages.push(artImage);
  return artImage;
}

async function putArtImage(id, body) {
  const parseId = toInt(id);
  if (parseId === undefined)
    throw new Error("ID was not found. (Return undefined)");
  if (isNaN(parseId)) throw new Error("ID must be an integer.");

  const toPatchCsItem = artImages.findIndex((a) => a.id === parseId);

  if (toPatchCsItem === -1) throw new Error("ID was not found. (Return -1)");

  //a put request updates all the properties, it overrides everything that currently exists in the given ID
  //eg: if i had a property called 'link: here', and the put request body does not have this property, it will be permanently deleted
  artImages[toPatchCsItem] = { id: parseId, ...body };
  return artImages[toPatchCsItem];
}

async function updateArtImage(id, body) {
  if (id === undefined) throw new Error("ID was not found.");
  if (isNaN(id)) throw new Error("ID must be an integer.");

  const toPatchCsItem = artImages.findIndex((a) => a.id === id);

  return true;
}

module.exports = {
  retrieveArtImages,
  createArtImage,
  updateArtImage,
  putArtImage,
};
