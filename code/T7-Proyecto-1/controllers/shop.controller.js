//-----IMPORTS

const Product = require("../model/product").ProductClass;

module.exports.getIndex = (req, res, next) => {
  Product.getAllProducts((datos) => {
    res.render("shop/index", { pageTitle: "Index Page", productos: datos });
  });
};
