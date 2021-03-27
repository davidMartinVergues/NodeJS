const User = require("../model/user");

module.exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    path: "Login",
    pageTitle: "Login",
    logged: req.isLogged,
  });
};

module.exports.postLogin = (req, res, next) => {
  User.findById("6049388ff1f3dae6be7e56a8")
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

module.exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
