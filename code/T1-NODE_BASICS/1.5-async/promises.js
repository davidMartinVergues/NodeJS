function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hola " + nombre);
      resolve(nombre);
    }, 1500);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("bla bla bla");
      resolve(nombre);
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("adios " + nombre);
      //resolve(nombre);
      reject("se ha generado un error en una promesa");
    }, 1000);
  });
}

// console.log("iniciando el proceso....");
// hola("david").then((nombre) => {
//   console.log(`${nombre} -> terminado el proceso`);
// });

// hola("david")
//   .then((nombre) => {
//     return adios(nombre);
//   })
//   .then((nombre) => {
//     console.log(`${nombre} -> terminado el proceso`);
//   });
hola("david")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log(`${nombre} -> terminado el proceso`);
  })
  .catch((err) => {
    console.error("error has ocurred");
    console.error(err);
  });
