const express=require("express");

const app=express();
const PORT=8000;

app.get("/",(req,res)=>res.send("Hello the Server has started"));

app.listen(PORT,()=>console.log("The Server has started on port : 8000"));