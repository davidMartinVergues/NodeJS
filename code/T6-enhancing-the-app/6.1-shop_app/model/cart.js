const fs = require("fs"),
  path = require("path"),
  product = require("./product").classProduct;

const path_to_cart = path.join(process.cwd(), "data", "cart_bbdd.json");

module.exports.classCart = class Cart {
  static addProduct(id, productPrice) {
    let cart = { products: [], totalPrice: 0 };
    let updatedProduct;

    fs.readFile(path_to_cart, (err, data) => {
      if (!err) {
        cart = JSON.parse(data);
      }

      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      if (existingProduct) {
        cart.products[existingProductIndex].qty =
          cart.products[existingProductIndex].qty + 1;
        //updatedProduct = { ...existingProduct }; //hago una copia dl objeto no de la referencia
        //updatedProduct.qty = updatedProduct.qty + 1;
        //cart.products = [...cart.products];
        //cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(path_to_cart, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
};
