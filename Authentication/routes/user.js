const express = require("express");
const router = express.Router();
const User = require("../classes/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");

const { login, register, deleteUser } = require("../controllers/auth");
const { getOneUser, getAllUsers } = require("../controllers/users");

router.post("/login", login);
router.post("/register",register);
router.get("/all",getAllUsers);
router.get("/:username",getOneUser);

router.delete("/", (req, res) => {
  deleteUser(req.body.username);
});


module.exports = router;
