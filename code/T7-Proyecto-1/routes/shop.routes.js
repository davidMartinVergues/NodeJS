//------Imports

//-----Modules
/*-------*/ const express = require("express");
/*-------*/ const router = express.Router();

//-----Controller
/*-------*/ const shopController = require("../controllers/shop.controller.js");

//------FIN IMPORTS

router.get("/", shopController.getIndex);

module.exports = router;
