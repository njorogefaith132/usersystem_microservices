const express = require("express");
const router = express.Router();
const User = require("../classes/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");

const { login, register } = require("../controllers/auth");
const { getOneUser, getAllUsers ,deleteUser} = require("../controllers/users");

router.post("/login", login);
router.post("/register",register);
router.get("/all",getAllUsers);
router.get("/:username",getOneUser);

router.delete("/:username", deleteUser);


module.exports = router;
