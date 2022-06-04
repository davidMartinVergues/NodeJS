let i = 1;

let intervalo = setInterval(() => {
  if (i == 3) {
    clearInterval(intervalo);
  }
  console.log("hola");
  i++;
}, 1000);

setImmediate(() => {
  console.log("helo");
});

console.log(__filename);
