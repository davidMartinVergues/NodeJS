//----Importamos la clase a modo de bbdd
const Product = require("../model/product");
//const User = require("../model/user");

module.exports.getAddProducts = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add-Product - ejs",
    path: "/admin/add-product",
    logged: req.isLogged
  });
};

module.exports.postAddProduct = (req, res, next) => {
  const title = req.body.title,
    imgUrl = req.body.imgUrl,
    price = req.body.price,
    description = req.body.description;

  const product = new Product({
    title: title,
    price: price,
    description: description,
    imgUrl: imgUrl,
    userId: req.user,
  });

  product
    .save()
    .then((result) => {
      console.log("added" + result);
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

module.exports.getEditProduct = (req, res, next) => {
  const prodId = req.params.prodId;

  Product.findById(prodId)
    .then((product) => {
      if (!product) {
        return res.redirect("/");
      }

      res.render("admin/edit-product", {
        pageTitle: "Edi product - ejs",
        path: "/admin/edit-product",
        prodInfo: product,
        logged: req.isLogged
      });
    })
    .catch((err) => console.log(err));
};

module.exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.prodId;
  Product.findByIdAndDelete(prodId)
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

  Product.findById(req.body.id)
    .then((product) => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.imgUrl = updatedImgUrl;
      product.description = updatedDescription;

      return product.save();
    })
    .then(() => {
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

module.exports.getAdminProducts = (req, res, next) => {
  Product.find()
    // .select("title price -_id")
    // .populate("userId", "name")
    .then((products) => {
      console.log(products);
      res.render("admin/products", {
        items: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
        logged: req.isLogged
      });
    })
    .catch((err) => console.log(err));
};
