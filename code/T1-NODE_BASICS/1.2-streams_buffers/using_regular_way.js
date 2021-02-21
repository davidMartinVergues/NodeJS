// Cargamos todos los datos en memoria y luego los leermos
const fs = require("fs");

const data = fs.readFileSync(__dirname + "/data.txt", "utf8");

console.log(`printing data\n ${data}`);
const data2 = fs.readFile(__dirname + "/data.txt", "utf8", (err, data) => {
  console.log(`printing data2\n ${data}`);
});
