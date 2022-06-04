const os = require("os");

console.log(os.arch());
console.log(os.platform());

console.log(os.cpus());
console.log(os.cpus().length);

console.log(os.constants);

console.log(os.freemem()); // memoria disponible en kas
console.log(os.totalmem()); // total de memoria de la máquina

console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.hostname());
console.log(os.networkInterfaces()); //interfaces de red
