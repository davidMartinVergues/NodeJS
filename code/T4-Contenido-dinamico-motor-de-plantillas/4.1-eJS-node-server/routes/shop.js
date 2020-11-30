//-----imports modules-------------
const express = require("express");
const path = require("path");
//-------FIN IMPORTS---------------
//--- importamos los productos almacenados en el array de admin
const products = require("./admin").products;
//---------------------------------------------

const router = express.Router();

router.get("/", (req, res, next) => {
  // console.log(products);
  // res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
  res.render("shop", { items: products, pageTitle: "Shop_ejs", path: "/" });
});

module.exports = router;
