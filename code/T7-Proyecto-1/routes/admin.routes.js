const express = require("express"),
  router = express.Router(),
  adminController = require("../controllers/admin.controller");

router.get("/add-product", adminController.getAddProduct);
router.post("/add-product", adminController.postAddProduct);

router.get("/admin-products", adminController.getAdminProducts);

router.get("/edit-product/:id", adminController.getEditProduct);
router.post("/edit-product", adminController.postEditProduct);

router.get("/delete-product/:id", adminController.getDeleteProduct);

module.exports = router;
