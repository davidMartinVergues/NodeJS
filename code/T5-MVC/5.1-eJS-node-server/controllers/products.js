//----Importamos la clase a modo de bbdd
const Product = require("../model/product").classProduct;
const path = require("path");

module.exports.getAddProducts = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add-Product - ejs",
    path: "/admin/add-product",
  });
};

module.exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

module.exports.getProducts = (req, res, next) => {
  Product.fetchAll((data) => {
    res.render("shop", {
      items: data,
      pageTitle: "Shop_ejs",
      path: "/",
    });
  });
};
