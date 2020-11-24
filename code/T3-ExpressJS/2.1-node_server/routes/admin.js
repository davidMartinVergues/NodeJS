const express = require("express"),
  path = require("path");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  //console.log("in the middleware");
  // res.send(
  //   "<body><h1>Add-product</h1> <form action='/admin/add-product' method='POST'> <input name='title' type='text'></input> <button type='submit'>add produc t!</button></form></body>"
  // );

  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});
// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
