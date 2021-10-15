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
            res.send(result.recordsets[0][0])
            
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteUser: async (req, res) => {
        try {
          const {username} = req.params
          let result = await db.exec("getUserByUsername", { username});
          
          const userusername = result.recordset[0];
          if (!userusername) return res.send({message:"Account does not exist"});
    
          let results = await db.exec("deleteUser", { username });
    
          res.send('User deleted succefully')
        } catch (error) {
          console.log(error.message);
        }
      },
}