const express = require("express");
const Joi = require("joi");

const artImagesSchema = Joi.object({
    id: number.required(),
    route: string.required(),
    desc: string.required(),
    dateMade: 
  
  
  
  })
  
const infoSchema = Joi.object().keys({
   title: string.required(),
   style: string.required(),
   technique: string.required(); 
})