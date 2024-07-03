const express=require("express");
const {generateNewShortURL, redirectAndUpdate} = require("../controller/url.js");

const urlRouter=express.Router();

urlRouter.post("/",generateNewShortURL);
urlRouter.get("/:Shortid",redirectAndUpdate);


module.exports={urlRouter};