//-----imports modules-------------
const express = require("express");
const path = require("path");
const router = express.Router();
//-------FIN IMPORTS---------------
//--- IMPORTS DE CONTROLLERS
const shopController = require("../controllers/shop");
//---------------------------------------------

router.get("/", shopController.getIndex);
router.get("/products", shopController.getProducts);
router.get("/products/:productId", shopController.getProduct);
router.get("/cart", shopController.getCart);
router.post("/add-to-cart", shopController.addToCart);
router.post("/cart-delete-product", shopController.postDeleteProduct);
router.get("/checkout", shopController.getCheckout);
router.get("/orders", shopController.getOrders);

module.exports = router;
