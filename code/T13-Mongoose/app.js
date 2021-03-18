//-------------- IMPORTS ------------
//core modules
const path = require("path");

// third party modules
const express = require("express");
const bodyParser = require("body-parser");
//Router
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");
//----IMPORT CONTROLLER
const errorController = require("./controllers/error");
//-----IMPORT DB

const mongoose = require("mongoose");

const User = require("./model/user");

//------------ FIN IMPORTS ----------------

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// para cada request guardamos el user en el objeto req
app.use((req, res, next) => {
  User.findById("6049388ff1f3dae6be7e56a8")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});
//--------------
// fijamos las rutas
app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);
//--------------
app.use(errorController.get404);

mongoose
  .connect(
    "mongodb+srv://david:dmv1104@node-app.j1vce.mongodb.net/shop-mongoose?retryWrites=true&w=majority"
  )
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "David Martin",
          email: "dmverges@gmail.com",
          cart: {
            items: [],
          },
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
