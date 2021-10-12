
// const gentoken = require('../helpers/generateToken');
const db = require('../db/dbConnection');




module.exports ={
    create: async(req, res) =>{
        
        try {
            const {projectname,username,project_description} =  req.body
    
            let results = await db
            .exec("createProject" ,{projectname,username,project_description})
    
             console.log(results.recordset);
             const project = results.recordset[0]
             
      res.send({ message: "Project Created successfully",project});

         } catch (error) {
            res.send(error.message);
         }

    },

    getOneProject : async (req,res) =>{
    
        try {
            const {projectname} = req.body
    
            let results = await db
            .exec("getProject", { projectname})
    
             console.log(results.recordset);
             const project = results.recordset[0]
             res.send({project})
         } catch (error) {
            res.send(error.message);
         }


    },
    deleteProject : async (projectname, done) =>{

        try {
    
            let results = await db
            .exec("deleteProject", {projectname})
    
             console.log(results.recordset);
             done(null, {messsage : "Project deleted Successfully"})
         } catch (error) {
            done(error.message);
         }


    },
    updateProject : async (projectname, projectid, project_description, done) =>{
        try {
    
            let results = await db
            .exec("updateProject", {projectname, projectid,project_description})
    
             console.log(results.recordset);
             const project = results.recordset[0]
             done(null, {message: "Project Details Updated Successfully", project})
         } catch (error) {
            done(error.message);
         }

    }
    

}

