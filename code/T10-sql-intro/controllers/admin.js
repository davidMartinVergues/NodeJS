//----Importamos la clase a modo de bbdd
const Product = require("../model/product").classProduct;

module.exports.getAddProducts = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add-Product - ejs",
    path: "/admin/add-product",
  });
};

module.exports.postAddProduct = (req, res, next) => {
  const productInfo = req.body;
  const product = new Product(
    productInfo.title,
    productInfo.description,
    productInfo.price,
    productInfo.imgUrl
  );
  product
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getEditProduct = (req, res, next) => {
  const prodId = req.params.prodId;
  Product.getProductById(prodId, (data) => {
    res.render("admin/edit-product", {
      pageTitle: "Edi product - ejs",
      path: "/admin/edit-product",
      prodInfo: data,
    });
  });
};
module.exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.prodId;
  Product.deleteProduct(prodId);
  res.redirect("/admin/products");
};
module.exports.postEditProduct = (req, res, next) => {
  Product.editProduct(req.body);
  res.redirect("/admin/products");
};
module.exports.getAdminProducts = (req, res, next) => {
  Product.fetchAll((data) => {
    res.render("admin/products", {
      items: data,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};
