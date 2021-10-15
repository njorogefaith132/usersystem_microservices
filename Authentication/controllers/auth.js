const bcrypt = require("bcrypt");
const gentoken = require('../helpers/generateToken');
const db = require("../db/dbConnection");
const User = require("../classes/user");
const Joi = require("joi");

module.exports = {
  login: async (req, res) => {
    const schema = Joi.object().keys({
      username: Joi.string().min(6).required(),
      password: Joi.string().min(8).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    try {
      
      const {username, password} = req.body
      let result = await db.exec("getUserByUsername", { username});
      
      const userusername = result.recordset[0];
      if (!userusername) return res.send({message:"Account does not exist"});
      
      let results = await db.exec("getUser", { username ,password});
      const user = results.recordset[0]
      const validPass = await bcrypt.compare(password, user.password);
      if (!validPass) return res.send({message:"Invalid credentials"});
  
      const token = gentoken(user.id)
  
      res.send({ message: "Login Successfull",user, token});
    } catch (error) {
      res.send(error.message)
    }

  },

  register: async (req, res) => {
    const schema = Joi.object().keys({
      username: Joi.string().min(6).required(),
      pass: Joi.string().min(8).required(),
      usertype: Joi.string().required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }


    try {
      const {pass} = req.body
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(pass, salt);
      const {username, usertype} = req.body;
      let result = await db.exec("getUserByUsername", { username});
      
      const userusername = result.recordset[0];
      if (userusername) return res.send({message:"Account already exists"});
      
      console.log({password});
      let results = await db.exec("postUsers", {
        username,
        password,
        usertype
      });
    
      let regUser = await db.exec("getusername" , {username});
      const user = regUser.recordset[0]
      console.log(user);
      const token = gentoken(user.id)
      res.send({message: "User created successfully",user,token});
    } catch (error) {
      res.send(error.message);
    }
  },

  
  
  updatePassword: async (username, password) => {
    try {
      let results = await db.exec("updateUser", { username, password });

      console.log(results.recordset);
    } catch (error) {
      console.log(error.message);
    }
  },
};
