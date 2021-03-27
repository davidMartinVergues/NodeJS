const express = require("express"),
  path = require("path");
const logController = require("../controllers/auth");

const Router = express.Router();

Router.get("/login", logController.getLogin);
Router.post("/login", logController.postLogin);
Router.post("/logout", logController.postLogout);

module.exports = Router;
