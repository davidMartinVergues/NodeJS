const fs = require("fs");

// leer archivos
function leer(path, cb) {
  fs.readFile(path, (err, data) => {
    cb(data.toString());
  });
}

// leer(__dirname + "/test.txt", (data) => console.log(data));

// leer(__dirname + "/test.txt", console.log);

function escribir(path, data, cb) {
  fs.writeFile(path, data, (err) => {
    if (err) {
      console.log("file not created " + err);
    } else {
      console.log("file created");
    }
  });
}

// escribir(__dirname + "/test2.txt", "soy un archivo nuevo", console.log);

function borrar(path, cb) {
  fs.unlink(path, cb);
}

borrar(__dirname + "/test2.txt", console.log);
