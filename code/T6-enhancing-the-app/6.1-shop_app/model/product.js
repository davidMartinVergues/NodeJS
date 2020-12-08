const fs = require("fs"),
  path = require("path");

const path_to_bbdd_file = path.join(
  process.cwd(),
  "data",
  "products_bbdd.json"
);
//---------helper function
const getProductsFromFile = (cb) => {
  fs.readFile(path_to_bbdd_file, (err, data) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(data));
    }
  });
};
//-----------------------
module.exports.classProduct = class Product {
  constructor(title, description, price, imgUrl) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.imgUrl = imgUrl;
  }
  save() {
    this.id = Math.random().toString();
    getProductsFromFile((products_data) => {
      products_data.push(this);
      fs.writeFile(path_to_bbdd_file, JSON.stringify(products_data), (err) => {
        if (err) console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static getProductById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });

    // MANERA LARGA

    // fs.readFile(path_to_bbdd_file, (err, data) => {
    //   if (!err) {
    //     const allProducts = JSON.parse(data);
    //     allProducts.forEach((element) => {
    //       if (element.id == id) {
    //         cb([element]);
    //       } else {
    //         cb([]);
    //       }
    //     });
    //   } else {
    //     console.log(err);
    //   }
    // });
  }
  static editProduct(prod) {
    getProductsFromFile((data) => {
      const indexProd = data.findIndex((element) => element.id === prod.id);
      data[indexProd] = prod;
      fs.writeFile(path_to_bbdd_file, JSON.stringify(data), (err) => {
        console.log(err);
      });
    });
  }
};
