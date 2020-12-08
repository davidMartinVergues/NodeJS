const path = require("path");
//----Importamos la clase a modo de bbdd
const Product = require("../model/product").classProduct;
const Cart = require("../model/cart").classCart;

module.exports.getProducts = (req, res, next) => {
  Product.fetchAll((data) => {
    res.render("shop/product-list", {
      items: data,
      pageTitle: "All products",
      path: "/products",
    });
  });
};

module.exports.getIndex = (req, res, next) => {
  Product.fetchAll((data) => {
    res.render("shop/index", {
      items: data,
      pageTitle: "Shop_ejs",
      path: "/",
    });
  });
};

module.exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Your cart",
    path: "/cart",
  });
};

module.exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  });
};

module.exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    pageTitle: "Orders",
    path: "/orders",
  });
};

module.exports.getProduct = (req, res, next) => {
  Product.getProductById(req.params.productId, (data) => {
    res.render("shop/product-detail", {
      product: data,
      pageTitle: "product detail",
      path: "/products",
    });
  });
};

module.exports.addToCart = (req, res, next) => {
  const prodId = req.body.productId;

  Product.getProductById(prodId, (prod) => {
    Cart.addProduct(prodId, prod.price);
  });
  res.redirect("/cart");
};
