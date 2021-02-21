// usando streams, dividimos los datos en chunks y lo leemos poco a poco.

//streams and buffers
const fs = require("fs");

// creando un stream de lectura
const readableStream = fs.createReadStream(__dirname + "/data2.txt", {
  encoding: "utf8",
});
// creando un stream de escritura
const writeableStream = fs.createWriteStream(__dirname + "/copy_of_data2.txt");

readableStream.on("data", (chunk_data_ready) => {
  console.log(`chunk recived`);
  writeableStream.write(chunk_data_ready);
});
