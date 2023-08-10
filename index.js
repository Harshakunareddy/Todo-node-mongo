const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const mongoose = require("mongoose");
const path = require("path")

mongoose.connect("mongodb://127.0.0.1/todo",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
let db = mongoose.connection
db.on("error",(err)=>{console.log("please check the mongoose.js file")})
db.on("open",()=>{console.log("db connected")})

// app.use(morgan("dev"))



app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded());
app.use(express.static("assets"));



app.listen(3000,()=>{
    console.log("running express");
})

const todoRouter = require("../todo/routes/todoRoutes") 
app.use("/",todoRouter)
