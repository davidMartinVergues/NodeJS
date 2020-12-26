const fs = require("fs"),
  path = require("path");

const path_to_cart = path.join(process.cwd(), "data", "cart_bbdd.json");

module.exports.classCart = class Cart {
  //----------methods
  static getCart(cb) {
    fs.readFile(path_to_cart, (err, fileContent) => {
      if (!err) {
        const cart = JSON.parse(fileContent);
        cb(cart);
      } else {
        cb(null);
      }
    });
  }
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

  static deleteProduct(id, price) {
    fs.readFile(path_to_cart, (err, fileContent) => {
      if (err) {
        return; // si hay un error es q NO existe el carro así q no hay q borrar nada
      }
      const cart = JSON.parse(fileContent);

      const product = cart.products.find((element) => element.id === id);
      if (!product) {
        return;
      }
      cart.products = cart.products.filter((element) => element.id !== id);
      cart.totalPrice = cart.totalPrice - +price * product.qty;
      fs.writeFile(path_to_cart, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
};
