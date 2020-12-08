//-----imports modules-------------
const express = require("express");
const path = require("path");
//-------FIN IMPORTS---------------
//--- IMPORTS DE CONTROLLERS
const productsController = require("../controllers/products");
//---------------------------------------------

const router = express.Router();

router.get("/", productsController.getProducts);

module.exports = router;
