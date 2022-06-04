console.error("errors");

let miTabla = [
  {
    nombre: "david",
    apellido: "martin",
  },
  {
    nombre: "david2",
    apellido: "martin2",
  },
];

console.table(miTabla);

function funcion1() {
  console.group("funcion 1");
  console.log("cosas d ela func 1");
  funcion2();
  console.log("seguimos con funcion 1");
  console.groupEnd("funcion 1");
}

function funcion2() {
  console.group("funcion 2");
  console.log("cosas d ela func 2");
  console.groupEnd("funcion 2");
}

funcion1();
