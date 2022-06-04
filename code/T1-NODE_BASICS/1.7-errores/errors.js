function otraFuncion() {
  seRompre();
}

function seRompre() {
  return 3 + z;
}

function seRompreAsincrona(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (err) {
      cb(err);
    }
  }, 1000);
}

try {
  seRompreAsincrona((err) => {
    console.error(err.message);
    console.log("un error!!!!!");
  });
} catch (error) {
  console.error(error.message);
}
// try {
//   otraFuncion();
// } catch (error) {
//   console.error(error.message);
// }

console.log("mi programa continua");
