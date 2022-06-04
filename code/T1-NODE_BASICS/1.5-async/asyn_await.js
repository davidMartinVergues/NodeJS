async function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hola " + nombre);
      resolve(nombre);
    }, 1500);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("bla bla bla");
      resolve(nombre);
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("adios " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

async function main() {
  let nombre = await hola("david");
  await hablar();
  await hablar();
  await adios(nombre);
}

main();
