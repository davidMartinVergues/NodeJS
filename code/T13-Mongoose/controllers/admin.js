//----Importamos la clase a modo de bbdd
const Product = require("../model/product");
//const User = require("../model/user");

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
    description = req.body.description,
    userId = req.user._id;

  const product = new Product(title, price, description, imgUrl, userId);

  product
    .save()
    .then((result) => {
      console.log(result);
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

module.exports.getEditProduct = (req, res, next) => {
  const prodId = req.params.prodId;

  Product.getProductById(prodId)
    .then((product) => {
      if (!product) {
        return res.redirect("/");
      }

      res.render("admin/edit-product", {
        pageTitle: "Edi product - ejs",
        path: "/admin/edit-product",
        prodInfo: product,
      });
    })
    .catch((err) => console.log(err));
};

module.exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.prodId;
  Product.deletProduct(prodId)
    .then(() => {
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

module.exports.postEditProduct = (req, res, next) => {
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;
  const updatedImgUrl = req.body.imgUrl;

  Product.editProduct(
    req.body.id,
    updatedTitle,
    updatedPrice,
    updatedDescription,
    updatedImgUrl
  )
    .then(() => {
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

module.exports.getAdminProducts = (req, res, next) => {
  Product.fetchAll()
    .then((products) => {
      res.render("admin/products", {
        items: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    })
    .catch((err) => console.log(err));
};
