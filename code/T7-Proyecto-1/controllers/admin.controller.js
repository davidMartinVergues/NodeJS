//------IMPORTS

const Product = require("../model/product").ProductClass;

module.exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", { pageTitle: "Add product" });
};
module.exports.postAddProduct = (req, res, next) => {
  const producto = req.body;
  const p = new Product(
    producto.title,
    producto.price,
    producto.imgUrl,
    producto.description.trim()
  );
  p.save();
  res.redirect("/");
};

module.exports.getAdminProducts = (req, res, next) => {
  Product.getAllProducts((datos) => {
    res.render("admin/admin-products", {
      pageTitle: "Admin Product",
      productos: datos,
    });
  });
};

module.exports.getEditProduct = (req, res, next) => {
  Product.getProductById(req.params.id, (prod) => {
    res.render("admin/edit-product", {
      pageTitle: "edit product",
      product: prod,
    });
  });
};

module.exports.postEditProduct = (req, res, next) => {
  const new_prod = {
    title: req.body.title,
    price: req.body.price,
    imgUrl: req.body.imgUrl,
    description: req.body.description,
    id: req.body.prod_id,
  };

  Product.editProduct(new_prod);
  res.redirect("/");
};

module.exports.getDeleteProduct = (req, res, next) => {
  Product.deleteProduct(req.params.id);
  res.redirect("/");
};
