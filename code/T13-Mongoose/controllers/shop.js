const path = require("path");
//----Importamos la clase a modo de bbdd
const Product = require("../model/product");
const User = require("../model/user");

module.exports.getProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      console.log(products);
      res.render("shop/product-list", {
        items: products,
        pageTitle: "All products",
        path: "/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getIndex = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.render("shop/index", {
        items: products,
        pageTitle: "Shop_ejs",
        path: "/",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getCart = (req, res, next) => {
  req.user
    .populate("cart.items.productId")
    .execPopulate()
    .then((datos) => {
      console.log(datos.cart.items);
      // res.render("shop/cart.ejs", {
      //   pageTitle: "tu carrito",
      //   productData: datos,
      //   path: "/cart",
      // });
    })
    .catch((err) => console.log(err));
};

module.exports.getOrders = (req, res, next) => {
  req.user
    .getOrders()
    .then((orders) => {
      res.render("shop/orders", {
        pageTitle: "Orders",
        path: "/orders",
        orders: orders,
      });
    })
    .catch((err) => console.log(err));
};

module.exports.getProduct = (req, res, next) => {
  Product.findById(req.params.productId)
    .then((product) => {
      res.render("shop/product-detail", {
        product: product,
        pageTitle: "product detail",
        path: "/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.addToCart = (req, res, next) => {
  const prodId = req.body.productId;

  Product.findById(prodId)
    .then((prod) => {
      return req.user.addToCart(prod);
    })
    .then((result) => {
      res.redirect("/products");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.prodId;

  req.user
    .deleteProductById(prodId)
    .then((result) => {
      console.log("removed");
      res.redirect("/cart");
    })
    .catch((err) => console.log(err));
};

module.exports.postOrder = (req, res, next) => {
  req.user
    .addOrder()
    .then((result) => {
      res.redirect("/orders");
    })
    .catch((err) => console.log(err));
};
