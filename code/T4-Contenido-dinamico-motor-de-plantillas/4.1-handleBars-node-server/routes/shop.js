//-----imports modules-------------
const express = require("express");
const path = require("path");
//-------FIN IMPORTS---------------
//--- importamos los productos almacenados en el array de admin
const products = require("./admin").products;
//---------------------------------------------

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop", {
    productCss: true,
    activeShop: true,
    pageTitle: "Shop - handlebars",
    items: products,
    hasProducts: products.length > 0,
  });
});

module.exports = router;
