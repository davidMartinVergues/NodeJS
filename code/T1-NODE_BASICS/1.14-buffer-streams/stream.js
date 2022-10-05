const fs = require('fs')
const stream = require('stream')
const util = require('util')


let data = "";


let readableStream = fs.createReadStream(__dirname + '/input.txt')

readableStream.setEncoding('UTF-8') // para poder leer texto con tildes, ñ 

// escuchamnos el evento data  del stream, a medida q van llegando datos los vamos capturando
readableStream.on('data', chunk => {

    data += chunk
    //console.log(chunk);
})

// evento end cuando termina el stream nos devuelve la data completa.
readableStream.on('end', () => {

    //console.log(data);

})

// stream de salida 

// utilizamos la salida std del sistema, escribimos en el buffer de la salida std del sistema
process.stdout.write('hola que tal')

const Transform = stream.Transform;

function Mayus() {

    Transform.call(this)

}

util.inherits(Mayus, Transform)

Mayus.prototype._transform = function (chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase()
    this.push(chunkMayus)
    cb()
}

let mayus = new Mayus()

readableStream
    .pipe(mayus)
    .pipe(process.stdout)