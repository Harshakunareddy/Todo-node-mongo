const todoController = require("../controller/todoController")
const express = require("express")
const app = express()
const router = express.Router()

router.get("/",todoController.index)
router.post("/create-task",todoController.addTask)
router.get("/delete-task",todoController.remove)

module.exports = router