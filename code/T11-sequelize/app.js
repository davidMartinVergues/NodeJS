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
const sequelize_db = require("./util/database");
const User = require("./model/user");
const Product = require("./model/product");
const Cart = require("./model/cart");
const CartItem = require("./model/cart-item");
const Order = require("./model/order");
const OrderItem = require("./model/order-item");
//------------ FIN IMPORTS ----------------

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// para cada request guardamos el user en el objeto req
app.use((req, res, next) => {
  User.findByPk(1)
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

//establecemos las relaciones entre las tablas
User.hasMany(Product);
Product.belongsTo(User);

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(Product, { through: OrderItem });
Product.belongsToMany(Order, { through: OrderItem });

//----------------

//sincronizams tablas y generamos el user en caso q no esté creado
sequelize_db
  //.sync({ force: true })
  .sync()
  .then((result) => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({
        name: "David",
        email: "dmverges@gmail.com",
      });
    }
    return user;
  })
  .then((user) => {
    user
      .getCart()
      .then((cart) => {
        if (!cart) {
          user.createCart();
        }
        app.listen(3000);
      })
      .catch((err) => {
        console.log(err);
      });
    //return user.createCart();
  })
  .catch((err) => {
    console.log(err);
  });
