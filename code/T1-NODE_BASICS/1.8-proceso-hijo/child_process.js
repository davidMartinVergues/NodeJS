const { exec, spawn } = require("child_process");
//const exec = require("child_process").exec;

const pyProg = spawn("python", ["myScript.py", "david"]);

console.log(pyProg.pid); //podemos ver el id del proceso
console.log(pyProg.connected); //podemos ver el id del proceso

//podemos escuchar el stdout cuando se dé el evento de 'data' y visualoizarla
pyProg.stdout.on("data", function (data) {
  console.log(JSON.parse(data));
});

pyProg.on("exit", () => {
  //escuchamos el eento exit
  console.log("proceso terminado");
});

// exec(
//   "python3 /home/david/programming/NodeJS/code/T1-NODE_BASICS/1.8-proceso-hijo/myScript.py",
//   (err, stdout, stderr) => {
//     if (err) {
//       console.log(err);
//       return false;
//     }

//     let data = JSON.parse(stdout);

//     console.log(data);

//     console.log(data.name);
//   }
// );
