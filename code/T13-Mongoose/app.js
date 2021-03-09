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

//const User = require("./model/user");

//------------ FIN IMPORTS ----------------

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// para cada request guardamos el user en el objeto req
app.use((req, res, next) => {
  // User.getUserById("60470af1d26ca646565213bc")
  //   .then((user) => {
  //     req.user = new User(user.username, user.email, user.cart, user._id);
  //     next();
  //   })
  //   .catch((err) => console.log(err));
});
//--------------
// fijamos las rutas
app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);
//--------------
app.use(errorController.get404);

mongoose
  .connect(
    "mongodb+srv://david:dmv1104@node-app.j1vce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
