process.on("beforeExit", () => {
  // el proceso está fuera del eventloop
  console.log("el proceso terminará próximamente");
});

process.on("exit", () => {
  console.log("ale, el proceso terminó");
});

process.on("uncaughtException", (err, origin) => {
  console.error("se nos olvidó capturar el error");
  console.error(err.message);
});

//process.on("uncaughtRejection"); // para promesas rechazadas sin catch

bcbc();
