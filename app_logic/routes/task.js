const express = require("express")
const router = express.Router()

const { getOneTask , createTask, deleteTask, updateTask, getAllTasks} = require("../control/taskControllers")


router.post('/create',createTask)
router.get('/all', getAllTasks)  
router.get('/:task', getOneTask)


module.exports = router