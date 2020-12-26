//-- IMPORTS MODULES
const express = require("express"),
  path = require("path");
const router = express.Router();
//-- IMPORTS DE CONTROLLERS
const adminController = require("../controllers/admin");

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProducts);
router.get("/products", adminController.getAdminProducts);
router.get("/edit-product/:prodId", adminController.getEditProduct);
router.post("/delete-product", adminController.postDeleteProduct);
router.post("/edit-product", adminController.postEditProduct);
// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

module.exports.routes = router;
