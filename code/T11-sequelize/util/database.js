// importo sequelize q en realidad es una clase
const Sequelize = require("sequelize");

// instancio un objeto sequelize con los datos necesrios para relaizar la conexión a bbdd
const sequelize = new Sequelize("node-app", "david", "dmv1104", {
  dialect: "mariadb",
  host: "localhost",
});

// por default hace una pool conection

//exportamos
module.exports = sequelize;
