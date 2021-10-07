
const db = require('../db/dbConnection');


module.exports = {
    createTask: async (projectname,task, sd, ed) =>{
        
        try {
            console.log(ed, sd);
            const start_date = new Date(sd)
            const end_date = new Date(ed)
            console.log(start_date);
            let results = await db
            .exec("postTask" ,{projectname,task,start_date, end_date})
    
             console.log(results.recordset);
         } catch (error) {
            console.log(error);
         }

    },

    getOneTask : async (task) =>{
    
        try {
    
            let results = await db
            .exec("getTask", { task})
    
             console.log(results.recordset);
         } catch (error) {
            console.log(error.message);
         }


    },
    deleteTask : async (task) =>{

        try {
    
            let results = await db
            .exec("deleteTask", {task})
    
             console.log(results.recordset);
         } catch (error) {
            console.log(error.message);
         }


    },
    updateTask : async (taskid, task) =>{
        try {
    
            let results = await db
            .exec("updateTask", {taskid,task})
    
             console.log(results.recordset);
         } catch (error) {
            console.log(error.message);
         }

    }
    

}

