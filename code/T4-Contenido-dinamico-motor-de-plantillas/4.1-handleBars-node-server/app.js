//-------------- IMPORTS ------------
//core modules
const path = require("path");
const expressHbs = require("express-handlebars");

// third party modules
const express = require("express");
const bodyParser = require("body-parser");
//Router
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");
//------------ FIN IMPORTS ----------------

const app = express();

app.engine(
  "hbs",
  expressHbs({
    defaultLayout: "main-layout",
    layoutsDir: path.join(__dirname, "Templates", "layouts"),
    extname: "hbs",
  })
);
app.set("views", "Templates");
app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res
    .status(404)
    .render("404", { layout: false, pageTitle: "Page not found2" });
});

app.listen(3000);
