//-------IMPORTs
const fs = require("fs"),
  path = require("path");

const path_to_bbdd = path.join(process.cwd(), "data", "product_bbdd.json");

//--- CLASS
module.exports.ProductClass = class Product {
  constructor(title, price, imgUrl, description) {
    this.title = title;
    this.price = price;
    this.imgUrl = imgUrl;
    this.description = description;
  }

  save() {
    Product.getAllProducts((products_from_file) => {
      this.id = Math.random().toString();
      products_from_file.push(this);
      fs.writeFile(
        path_to_bbdd,
        JSON.stringify(products_from_file),
        (error) => {
          if (error) {
            console.log(error);
          }
        }
      );
    });
  }

  static getAllProducts(cb) {
    fs.readFile(path_to_bbdd, (err, data) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(data));
      }
    });
  }

  static getProductById(id, cb) {
    Product.getAllProducts((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }

  static editProduct(prod) {
    Product.getAllProducts((products) => {
      const product_index = products.findIndex((p) => p.id === prod.id);
      products[product_index] = prod;
      fs.writeFile(path_to_bbdd, JSON.stringify(products), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }
  static deleteProduct(prod_id) {
    Product.getAllProducts((products) => {
      const products_updated = products.filter((p) => p.id !== prod_id);
      products = products_updated;

      fs.writeFile(path_to_bbdd, JSON.stringify(products), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }
};
