

const Product = require("../model/product");
const User = require("../model/user");
const Order = require("../model/order");
const { Logger } = require("mongodb");


module.exports.getProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      console.log(products);
      res.render("shop/product-list", {
        items: products,
        pageTitle: "All products",
        path: "/products",
        logged: req.isLogged
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
        logged: req.isLogged
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getCart = (req, res, next) => {

req.user
   .execPopulate("cart.items.productId")
   .then((userEnhanced) => {
      res.render("shop/cart.ejs", {
        pageTitle: "tu carrito",
        productData: userEnhanced.cart.items,
        path: "/cart",
        logged: req.isLogged
      });
   })
    .catch((err) => console.log(err));
};

module.exports.getOrders = (req, res, next) => {
  Order.find({'user.userId' : req.user._id})
    .then((orders) => {
      console.log(orders);
      res.render("shop/orders", {
        pageTitle: "Orders",
        path: "/orders",
        orders: orders,
        logged: req.isLogged
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
        logged: req.isLogged
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
  .execPopulate('cart.items.productId')
  .then(user=>{

    console.log(user.cart.items);

    const products = user.cart.items.map(item=>{
      return { quantity: item.quantity, product: {...item.productId._doc}}
    })

    const order = new Order({
      user:{
        name : req.user.name,
        userId: req.user
      },
      products:products
    })
    return order.save();
  })
  .then((result) => {
    req.user.cart = {
      items:[]
    }
    return req.user.save();
      
    })
    .then(result=>{
      res.redirect("/orders");
    })
  .catch((err) => console.log(err));
};
