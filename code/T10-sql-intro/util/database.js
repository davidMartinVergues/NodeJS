const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "david",
  database: "node-app",
  password: "dmv1104",
});

module.exports = pool.promise();
