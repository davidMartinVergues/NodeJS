// let y const
const age = 36;
let name = "David";
name = "David Martin";

function myName() {
  console.log(`hello my name is ${name} and i am ${age} years old`);
}

// arrow funciton

// 1. función anónima
const ummarizUser = function (_name, _age) {
  console.log(`hello my name is ${_name} and i am ${_age} years old`);
};

ummarizUser(name, age);

// nueva sintaxi eliminando keyword function

const add2 = (a, b) => {
  return a + b;
};
// podemos simplificar en un única línea
const add = (a, b) => a + b;

console.log(add(1, 1));

// OBjetos

const person = {
  name: "David",
  age: 36,

  greet() {
    console.log("hello from " + this.name);
  },

  greet3: function () {
    console.log("hello from " + this.name);
  },

  greet2: () => {
    console.log("hi" + this.name); // aquí no debemos usar ArrowsFunction xq mantiene el scoope del elemento q llama a la función y en este caso es el object person el cual pertenece al scoope global así q no "busca dentro del objeto"
  },
};

person.greet3();
