
const db = require('../db/dbConnection');


module.exports = {
    createTask: async (req,res) =>{
        
        try {
            console.log(ed, sd);
            const {projectname, task, sd,ed} = req.body

            const start_date = new Date(sd)
            const end_date = new Date(ed)
            console.log(start_date);
            let results = await db
            .exec("postTask" ,{projectname,task,start_date, end_date})
    
             res.send(results.recordset);
         } catch (error) {
            res.send(error);
         }

    },

    getOneTask : async (req, res) =>{
    
        try {
            const {task} = req.params
    
            let results = await db
            .exec("getTask", { task})
    
             res.send(results.recordset);
         } catch (error) {
            res.send(error.message);
         }


    },

    getAllTasks :async(req, res)=>{
        try {
            const results = await db.exec("getAllTasks");
            res.json(results.recordsets);
        } catch (error) {
            res.json(error.message);
        }
    },
    deleteTask : async (req, res) =>{

        try {

            const {task} = req.body
    
            let results = await db
            .exec("deleteTask", {task})
    
            res.send(results.recordset);
         } catch (error) {
            res.send(error.message);
         }


    },
    updateTask : async (req, res) =>{
        try {
            const {taskid, task} = req.body
            let results = await db
            .exec("updateTask", {taskid,task})
    
             res.send(results.recordset);
         } catch (error) {
           res.send(error.message);
         }

    }
    

}

