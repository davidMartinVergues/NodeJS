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

/// ARRAYS

const miArray = ["david", "martin", 36];

for (let items of miArray) {
  // "of" conseguimos los datos
  console.log(items);
}

for (let items in miArray) {
  // "in" conseguimos los índices
  console.log(items);
}

// methods on array
//1 línea
let newArray = miArray.map((item, x) => `ìtem ${x}: ${item}`);
//
let newArray2 = miArray.map((item, x) => {
  return `ìtem ${x}: ${item}`;
});

console.log(newArray);

// new operators spread / rest

const array1 = ["david", "martin", [36]];
const arrayCopy = [...array1];
array1.push("vertgues");
array1[0] = "david2";
array1[2][0] = 40;
console.log(array1);
console.log(arrayCopy);

const arrayCopy2 = { ...array1 };

console.log(arrayCopy2);

const person2 = {
  name: "David",
  age: 36,
  hobbies: ["nadar", "correr"],
  greet() {
    console.log("hello david");
  },
};

const person3 = { ...person2 };

person2.greet = function greet() {
  console.log("hello martin");
};
person2.hobbies.push("comer");

console.log(person2);
console.log(person3);

// rest
const toArray = (...args) => args;

console.log(toArray(1, 2, 3, 5));

// destucturing

const person4 = {
  name4: "David",
  age4: 36,
  hobbies4: ["nadar", "correr"],
  greet4() {
    console.log("hello david");
  },
};

const printData = ({ name4, age4 }) => console.log(name4, age4);
//

printData(person4);

const { name4, age4 } = person4;

console.log(name4, age4);
// con arrays

const array4 = ["fruta", "leche"];

let [item1, item2] = array4;

console.log(item1, item2);

// async code and promises
//asíncrono
//síncrono
//console.log("2");
//console.log("1");

////------
// const fetchData = (callback) => {
//   setTimeout(() => {
//     callback("Done");
//   }, 1500);
// };

// setTimeout(() => {
//   console.log("time done!");
//   fetchData((text) => {
//     console.log(text);
//   });
// }, 2000);

// ------

const datos = [
  {
    id: 1,
    title: "titulo 1",
    year: 2000,
  },
  {
    id: 2,
    title: "titulo 2",
    year: 2002,
  },
  {
    id: 3,
    title: "titulo 3",
    year: 2003,
  },
];

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 10);

  setTimeout(
    () => (number > 5 ? resolve(number) : reject(new Error("Menor a 5"))),
    1000
  );
});

promise
  .then((number) => console.log(number))
  .catch((error) => console.error(error));
