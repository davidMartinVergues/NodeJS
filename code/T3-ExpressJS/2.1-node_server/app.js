//-------------- IMPORTS ------------
//core modules
const path = require("path");

// third party modules
const express = require("express");
const bodyParser = require("body-parser");
//Router
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");
//------------ FIN IMPORTS ----------------

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
});

app.listen(3000);
