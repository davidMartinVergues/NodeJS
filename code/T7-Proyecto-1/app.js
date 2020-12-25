//----IMPORTS
//-----CORE MODULES
const path = require("path");
//-----3º PARTY
const express = require("express"),
  bodyParser = require("body-parser");
//-----ROUTES
const shopRoutes = require("./routes/shop.routes");
const adminRoutes = require("./routes/admin.routes");
//-----CONTROLLER
const errorPageController = require("./controllers/404.controller").error;
//--------FIN IMPORTS

const app = express();

//----- configuraciones
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// Fin configuraciones

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorPageController);

const server = app.listen(3000, "localhost");
