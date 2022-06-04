function hola(nombre, cb) {
  setTimeout(() => {
    console.log("hola " + nombre);
    cb(nombre);
  }, 1500);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log("bla bla bla");
    callbackHablar();
  }, 1000);
}

function adios(nombre, cb) {
  setTimeout(() => {
    console.log("adios " + nombre);
    cb();
  }, 1000);
}

function conversacion(nombre, iteraciones, cb) {
  if (iteraciones > 0) {
    hablar(() => {
      conversacion(nombre, --iteraciones, cb);
    });
  } else {
    adios(nombre, cb);
  }
}

//--

hola("david", (nombre) => {
  conversacion(nombre, 3, () => {
    console.log("proceso terminado");
  });
});

// console.log("iniciando proceso");
// hola("David", (nombre) => {
//   hablar(() => {
//     hablar(() => {
//       hablar(() => {
//         adios(nombre, () => {
//           console.log("terminando proceso...");
//         });
//       });
//     });
//   });
// });
