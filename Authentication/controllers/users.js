const db = require('../db/dbConnection')

module.exports= {
    getOneUser : async (req, res) =>{
        try {

            const {username} = req.params
            const result = await db.exec("getusername", {username})
            res.json(result.recordset)
            
        } catch (error) {
            res.json(error.message)
        }
    },

    getAllUsers : async (req, res) =>{
        try {

            const result = await db.exec("getAllUsers")
            res.json(result.recordsets)
            
        } catch (error) {
            res.json(error.message)
        }
    }
}