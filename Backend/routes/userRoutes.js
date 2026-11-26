const express = require("express");
const router = express.Router();

const {signUp, login }= require("../controller/userController");

router.post("/register", signUp);
router.post("/login", login);

module.exports = router;

