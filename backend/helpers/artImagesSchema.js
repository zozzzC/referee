const express = require("express");
const Joi = require("joi");

//TODO: finish art images schema
const artImagesSchema = Joi.object({
    id: number.required(),
    route: string.required(),
    desc: string.required(),

    info: Joi.array.items(Joi.object({
      
    }))
  
  
  
  })
  
//since info is contained as an array of objects inside artImagesSchema, this will 
//be used to validate the array of objects.
// const infoSchema = Joi.array().items(Joi.object({

// }))