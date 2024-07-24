const express = require("express");
const { ArtInfo, ArtImage} = require("../models/artInfo")

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

async function putArtImage(id, index, body) {
  //a put request updates all the properties, it overrides everything that currently exists in the given ID
  //eg: if i had a property called 'link: here', and the put request body does not have this property, it will be permanently deleted
  artImages[index] = { id: id, ...body };
  console.log(artImages[index]);
  return artImages[index];
}

async function updateArtImage(id, index, body) {
  //unlike put, this only partially updates the given ID eg: only a few params in the object
  //any current field values must not be changed
  //this works bcs we get what is currently in the given index of artImages, spread it (make a copy)
  //and then spread the body.
  //since there can only be one key, when we spread body afterwards, it will override the current values in
  //artImage[toPatchCsItem], but only override what keys are the same in the body and in the existing object
  artImages[index] = { ...artImages[index], ...body };
  console.log(artImages[index]);
  return artImages[index];
}

async function deleteArtImage(id) {
  if (isNaN(id)) return res.sendStatus(400);
  const artImage = artImages.findIndex((a) => a.id === id);
  if (artImage === -1) throw new Error("ID was not found.");
  artImages.splice(artImage);
  return true;
}

module.exports = {
  retrieveArtImages,
  createArtImage,
  updateArtImage,
  putArtImage,
  deleteArtImage,
};
