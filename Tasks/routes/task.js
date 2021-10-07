const express = require("express")
const router = express.Router()

const { getOneTask , createTask, deleteTask, updateTask} = require("../contol/taskControllers")


router.post('/create',(req, res)=>{
    createTask(
         req.body.projectname,
         req.body.task,
         req.body.start_date,
         req.body.end_date

         )
})  
router.get('/task', (req, res)=>{
    getOneTask(
         req.body.task

         )
})  
router.delete('/task', (req, res)=>{
    deleteTask(
         req.body.task
         )
})  
router.put('/', (req, res)=>{
    updateTask(
         req.body.taskid,
         req.body.task

         )
})  


module.exports = router