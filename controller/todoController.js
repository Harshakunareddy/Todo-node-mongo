const express = require("express")
const app = express()
const path = require("path")

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded());
app.use(express.static("assets"));


const Todo = require("../schemas/schema")

const index = (req,res,next) => {
    Todo.find().then((a)=>{
        return res.render("home",{
            tasks_list: a
        })
    })
}

const addTask = (req,res,next)=>{
    Todo.create({
        task: req.body.task
    })
    return res.redirect("back")
}

const remove = (req,res,next)=>{
    let id = req.query.id
    Todo.findByIdAndRemove(id)
    .then(()=>{
        
            return res.redirect("back")
        
    })
    .catch(error => {
        res.json(()=>{
            message: "error in remove method"
        })
    })
}


module.exports = {
    index,remove,addTask
}