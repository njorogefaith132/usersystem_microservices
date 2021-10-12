const express = require("express")
const router = express.Router()
const verifyToken = require('../middleware/auth');

const {create, getOneProject, deleteProject, updateProject, getAllProjects}  = require('../control/projectControllers')


router.post('/create', create);
router.get('/all', getAllProjects)
router.get('/:projectname',getOneProject);


router.delete('/project',verifyToken, (req, res)=>{
    deleteProject(
         req.body.project_name,(error, message) => {
            if (error) return res.status(200).send({ message: error });
            res.send({ message});
          });
})  


router.put('/project',verifyToken, (req, res)=>{
    updateProject(
         req.body.projectname,
         req.body.projectid,
         req.body.project_description

         )
})  



module.exports = router;
