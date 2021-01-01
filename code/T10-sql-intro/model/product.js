//---import cart  class
const Cart = require("./cart").classCart;

//----import pool object
const db = require("../util/database");

//---------helper function

//-----------------------class Product
module.exports.classProduct = class Product {
  //---------------constructor----
  constructor(title, description, price, imgUrl) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.imgUrl = imgUrl;
  }
  //---------------------------Methods
  save() {
    return db.execute(
      "INSERT INTO products (title,price,imgUrl, description) VALUES (?,?,?,?)",
      [this.title, this.price, this.imgUrl, this.description]
    );
  }

  static deleteProduct(id) {}

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  static getProductById(id) {}

  static editProduct(prod) {}
};
