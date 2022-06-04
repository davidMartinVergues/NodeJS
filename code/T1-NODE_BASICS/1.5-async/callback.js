function hola(nombre, cb) {
  setTimeout(() => {
    console.log("hola " + nombre);
    cb(nombre);
  }, 1500);
}

function adios(nombre, cb) {
  setTimeout(() => {
    console.log("adios " + nombre);
    cb();
  }, 1000);
}

console.log("iniciando proceso");

hola("David", (nombre) => {
  adios(nombre, () => {
    console.log("terminando proceso...");
  });
});
