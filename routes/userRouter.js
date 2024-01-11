const express = require("express");
const route = express.Router();
const userController = require("../controller/userController");
route.post("/createUser", userController.createUser);
route.get("/", userController.findUserByName);
module.exports = route;
