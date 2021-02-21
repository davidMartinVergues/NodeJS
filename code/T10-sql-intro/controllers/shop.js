const path = require("path");
//----Importamos la clase a modo de bbdd
const Product = require("../model/product").classProduct;
const Cart = require("../model/cart").classCart;

module.exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([rows]) => {
      res.render("shop/product-list", {
        items: rows,
        pageTitle: "All products",
        path: "/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render("shop/index", {
        items: rows,
        pageTitle: "Shop_ejs",
        path: "/",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getCart = (req, res, next) => {
  Cart.getCart((cart) => {
    if (cart && cart.products.length > 0) {
      const dataProductsOfCart = [];
      const totalPrice = cart.totalPrice;
      const productsOfCart = [...cart.products];
      Product.fetchAll((products) => {
        productsOfCart.forEach((product) => {
          const prod = products.find((prod) => prod.id === product.id);
          if (prod) {
            const obj = { ...prod, qty: product.qty };
            dataProductsOfCart.push(obj);
          }
        });
        res.render("shop/cart.ejs", {
          pageTitle: "tu carrito",
          totalPrice: totalPrice,
          productData: dataProductsOfCart,
          path: "/cart",
        });
      });
    } else {
      res.render("shop/cart.ejs", {
        pageTitle: "tu carrito",
        totalPrice: 0,
        productData: [],
        path: "/cart",
      });
    }
  });
  // Cart.getCart((cart) => {
  //   Product.fetchAll((products) => {
  //     const cartProducts = [];
  //     products.forEach((product) => {
  //       const cartProductData = cart.products.find(
  //         (prod) => prod.id === product.id
  //       );
  //       if (cartProductData) {
  //         cartProducts.push({ productData: product, qty: cartProductData.qty });
  //       }
  //     });
  //     console.log(cartProducts);
  //     res.render("shop/cart", {
  //       pageTitle: "Your cart",
  //       path: "/cart",
  //       totalPrice: cart.totalPrice,
  //       product: cartProducts,
  //     });
  //   });
  // });
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
  Product.getProductById(req.params.productId)
    .then(([row]) => {
      res.render("shop/product-detail", {
        product: row[0],
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

  Product.getProductById(prodId, (prod) => {
    Cart.addProduct(prodId, prod.price);
  });
  res.redirect("/cart");
};

module.exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.prodId;
  Product.getProductById(prodId, (prod) => {
    Cart.deleteProduct(prodId, prod.price);
    res.redirect("/cart");
  });
};
