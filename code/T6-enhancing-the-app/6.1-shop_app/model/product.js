const fs = require("fs"),
  path = require("path"),
  Cart = require("./cart").classCart;

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

    // MANERA LARGA -
    // NO SE PUEDE HACER ASÍ PQ EN CADA CICLO DEL FOREACH LANZARÍAMOS UNA CALLBACK EN UNA OCASIÓN NS DARÍA EL PRODUCTO PERO EN TANTAS OTRAS UN ARRAY VACÍO ---- HAY QUE HACERLO CON EL FIND()

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
    console.log(prod);
    getProductsFromFile((data) => {
      const indexProd = data.findIndex((element) => element.id === prod.id);
      data[indexProd] = prod;
      fs.writeFile(path_to_bbdd_file, JSON.stringify(data), (err) => {
        console.log(err);
      });
    });
  }
  static deleteProduct(id) {
    getProductsFromFile((products) => {
      const product = products.find((element) => element.id === id);
      const updatedroducts = products.filter((element) => element.id !== id);
      fs.writeFile(path_to_bbdd_file, JSON.stringify(updatedroducts), (err) => {
        if (!err) {
          Cart.deleteProduct(id, product.price);
        }
      });
    });
  }
};
