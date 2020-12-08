//-- IMPORTS MODULES
const express = require("express"),
  path = require("path");
const router = express.Router();
//-- IMPORTS DE CONTROLLERS
const productsController = require("../controllers/products");
// const productsController = require(path.join(
//   __dirname,
//   "..",
//   "controllers",
//   "products"
// ));

// /admin/add-product => GET
router.get("/add-product", productsController.getAddProducts);
// /admin/add-product => POST
router.post("/add-product", productsController.postAddProduct);

module.exports.routes = router;
