let buffer = Buffer.alloc(4); // guardamos un byte en memoria

//genera un buffer vacio pero con 4 espacios de memoria
// <Buffer 00 00 00 00> 


buffer = Buffer.from([1, 2, 3, 4, 5, 6])
console.log(buffer); //<Buffer 01 02 03 04 05 06>

buffer = Buffer.from('Hola mundo!')
console.log(buffer); //<Buffer 48 6f 6c 61 20 6d 75 6e 64 6f 21>
console.log(buffer.toString()); //Hola mundo!


let abcedario = Buffer.alloc(26);



abcedario.forEach((element, index) => {

    abcedario[index] = index + 97;



})

console.log(abcedario.toString()); // abcdefghijklmnopqrstuvwxyz