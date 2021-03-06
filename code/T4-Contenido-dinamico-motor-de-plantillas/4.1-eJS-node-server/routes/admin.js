const express = require("express"),
  path = require("path");

const router = express.Router();

//----variable donde guardaremos info a modo de bbdd

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add-Product - ejs",
    path: "/admin/add-product",
  });
});
// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

module.exports.routes = router;
module.exports.products = products;
