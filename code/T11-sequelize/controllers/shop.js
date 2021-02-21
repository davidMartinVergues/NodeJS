const path = require("path");
//----Importamos la clase a modo de bbdd
const Product = require("../model/product");
const Cart = require("../model/cart");

module.exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
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
  Product.findAll()
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
    .getCart()
    .then((cart) => {
      return cart.getProducts();
    })
    .then((products) => {
      res.render("shop/cart.ejs", {
        pageTitle: "tu carrito",
        productData: products,
        path: "/cart",
      });
    })
    .catch((err) => console.log(err));

  // Cart.getCart((cart) => {
  //   if (cart && cart.products.length > 0) {
  //     const dataProductsOfCart = [];
  //     const totalPrice = cart.totalPrice;
  //     const productsOfCart = [...cart.products];
  //     Product.fetchAll((products) => {
  //       productsOfCart.forEach((product) => {
  //         const prod = products.find((prod) => prod.id === product.id);
  //         if (prod) {
  //           const obj = { ...prod, qty: product.qty };
  //           dataProductsOfCart.push(obj);
  //         }
  //       });
  //       res.render("shop/cart.ejs", {
  //         pageTitle: "tu carrito",
  //         totalPrice: totalPrice,
  //         productData: dataProductsOfCart,
  //         path: "/cart",
  //       });
  //     });
  //   } else {
  //     res.render("shop/cart.ejs", {
  //       pageTitle: "tu carrito",
  //       totalPrice: 0,
  //       productData: [],
  //       path: "/cart",
  //     });
  //   }
  // });
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
  Product.findByPk(req.params.productId)
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

  // Product.findAll({
  //   where: {
  //     id: req.params.productId,
  //   },
  // })
  //   .then((products) => {
  //     res.render("shop/product-detail", {
  //       product: products[0],
  //       pageTitle: products[0].title + "product detail",
  //       path: "/products",
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};

module.exports.addToCart = (req, res, next) => {
  const prodId = req.body.productId;
  let fetchedCar;

  req.user
    .getCart()
    .then((cart) => {
      fetchedCar = cart;
      return cart.getProducts({ where: { id: prodId } });
    })
    .then((products) => {
      let product;
      if (products.length > 0) {
        product = products[0];
      }

      let newQuantity = 1;
      if (product) {
        const oldQuantity = product.cartItem.quantity;
        newQuantity = oldQuantity + 1;
        product.cartItem.update({ quantity: newQuantity });
      }

      Product.findByPk(prodId)
        .then((prod) => {
          return fetchedCar.addProduct(prod, {
            through: { quantity: newQuantity },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .then(() => {
      // res.redirect("/cart");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.prodId;

  req.user
    .getCart()
    .then((cart) => {
      return cart.getProducts({ where: { id: prodId } });
    })
    .then((products) => {
      let oldQt = products[0].cartItem.quantity;
      let newQt = oldQt - 1;
      if (newQt < 1) {
        return products[0].cartItem.destroy();
      }
      return products[0].cartItem.update({ quantity: newQt });
    })
    .then(() => {
      res.redirect("/cart");
    })
    .catch((err) => console.log(err));
};
