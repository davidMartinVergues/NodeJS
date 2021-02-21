//----Importamos la clase a modo de bbdd
const Product = require("../model/product");
const User = require("../model/user");

module.exports.getAddProducts = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add-Product - ejs",
    path: "/admin/add-product",
  });
};

module.exports.postAddProduct = (req, res, next) => {
  const title = req.body.title,
    imgUrl = req.body.imgUrl,
    price = req.body.price,
    description = req.body.description;

  req.user
    .createProduct({
      title: title,
      imgUrl: imgUrl,
      price: price,
      description: description,
    })
    .then((result) => {
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getEditProduct = (req, res, next) => {
  const prodId = req.params.prodId;

  req.user
    .getProducts({ where: { id: prodId } })
    .then((products) => {
      if (!products[0]) {
        return res.redirect("/");
      }

      res.render("admin/edit-product", {
        pageTitle: "Edi product - ejs",
        path: "/admin/edit-product",
        prodInfo: products[0],
      });
    })
    .catch((err) => console.log(err));
};

module.exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.prodId;
  Product.findByPk(prodId)
    .then((product) => {
      return product.destroy();
    })
    .then((result) => {
      console.log(result);
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

module.exports.postEditProduct = (req, res, next) => {
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;
  const updatedImgUrl = req.body.imgUrl;

  Product.findByPk(req.body.id)
    .then((product) => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDescription;
      product.imgUrl = updatedImgUrl;
      return product.save();
    })
    .then((result) => {
      console.log("updted product");
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
  // Product.update(
  //   {
  //     title: req.body.title,
  //     price: req.body.price,
  //     description: req.body.description,
  //     imgUrl: req.body.imgUrl,
  //   },
  //   { where: { id: req.body.id } }
  // );
  // res.redirect("/admin/products");
};
module.exports.getAdminProducts = (req, res, next) => {
  req.user
    .getProducts()
    .then((products) => {
      res.render("admin/products", {
        items: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    })
    .catch((err) => console.log(err));
};
