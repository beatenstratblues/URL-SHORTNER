const express=require("express");
const {generateNewShortURL} = require("../controller/url.js");

const urlRouter=express.Router();

urlRouter.post("/",generateNewShortURL);


module.exports={urlRouter};