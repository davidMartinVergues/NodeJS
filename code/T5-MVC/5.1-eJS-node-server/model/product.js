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
  constructor(title) {
    this.title = title;
  }
  save() {
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
};
