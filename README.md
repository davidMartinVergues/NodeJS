# INDEX

# NodeJS Course

### by Maximillian Academind (Udemy)

> <span style="font-size:1.5em;"> [_link del video_](https://www.udemy.com/course/nodejs-the-complete-guide/) </span>

---

- # Introducción

  - ## Que es NodeJS

Node.js es un entorno de tiempo de ejecución de JavaScript (de ahí su terminación en .js haciendo alusión al lenguaje JavaScript). Este entorno incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript. Es la manera que tenemos de ejecutar JS fuera del navegador.
Node aprovecha el motor V8(engine v8) de google, este permite compilar código JS en código máquina.
Una vez instalado Node en la terminal tecleamos node y entramos en el "REPL"(Read user input, Evaluate user input, Print output, Loop wait for new input), interprete de comandos de node.

Habitualmente Node se usa del lado del servidor.

Aquí tenemos una petición cliente-servidor típica:

![not found!](img/img-1.png)

- ## Que podemos hacer cono node

Podemos construir nuestro propio servidor, aceptar peticiones y crear respuestas en forma de html, datos (json, xml, archivos) y la lógica de negocio

![not found!](img/img-2.png)

- # Repaso JS

![not found!](img/img-3.png)

Js es un lenguaje débilmente tipado, podemos usar el paradigma orintado a objetos.

# T-0 JavaScript Refresh

- Sintaxi de arrow function

  ```
  const add2 = (a, b) => {
  return a + b;
  };

  //podemos simplificar en un sola línea
  const add = (a, b) => a + b;

  // si solo tien un argumento
  const addOne = a => a + 1;

  // si no tien ningún argumento
  const addRandom = () => 1+2;
  ```

- Uso de la keyword this y el uso de () en funciones.

  - This se usa para referirnos a variables o métodos dentro de la misma clase. Si definimos una variable con this dentro de la clase ésta será accesible desde un objeto de esa clase.
    Aquí JS tiene algo curioso y es que no solo "this" hace referencia a elementos dentro de la clase si no que también hace referencia al elemento que llama a la función.

    ```
    class NameGeenerator{
        constructor(){
          const btn = document.querySelector('button');
          this.names= ['Desi','Jenni','David']          //asequible a toda la clase
          this.currentName= 0;
          btn.addEventListener('click', this.addName); //acceder a 1 método de la clase
                                                        aquí This hace referencia a la clase
                                                        xq quien llama al constructor es la clase
        }

        addName(){

          const name = new NameField(this.names[this.currentName]); // aquí this hace referencia al elemento que llama a la funcion addName q es el btn
          this.currentName++;

          if(currentName>= this.names.length){
            this.currentName= 0;
          }
        }

      }

      const gen = new NameGeenerator();
    ```

    Para cambiar este comportamiento del this debemos usar el método bind() que fija a que hace referencia el this para esa función

    ```
    btn.addEventListener('click', this.addName.bind(this)); //vuelvo a poner this xq en el
                                                              contexto del contructor quien
                                                              lo llama es la propia clase

    ```

    Otra manera de solucionar esto es usando funciones anónimas pero aquíi otra vez nos encontramos con el problema del this

    ```
    btn.addEventListener(
      "click",
      function () {
        this.addName();
      }.bind(this)
    );

    ```

    Pero la última solución propuesta x ES6 son las arrow function las cuales nos permiten conservar la referencia del this, es como si llamaramos al this fuera de esa función y por lo tanto dentro del constructor.

    ```
    btn.addEventListener("click", () => { this.addName(); } );

    ```

  - () indican que la función debe ser ejecutada de manera inmediata, así dentro de la clase cuando nos queremos referir a un método utilizamos this.nombreMetodo
    sin los "()" así sin () lo que hacemos es pasarle la referencia de esa función(la dirección de esa función).

    ```

    class NameField{
      constructor(name){
        const field = document.createElement('li');
        field.textContent = name;
        const nameListHook = document.querySelector('#names');
        nameListHook.appemdChild(field);
    }

    class NameGeenerator{
      constructor(){
        const btn = document.querySelector('button');
        btn.addEventListener('click', this.addName); // sin () para q no la ejecute inmediatamente
      }

      addName(){
        const name = new NameField('Dav');
      }

    }
    ```

- Objects properties methods

Definir un objeto:

```
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
    console.log("hi" + this.name); // aquí no debemos usar ArrowsFunction xq
                                       mantiene el scoope del elemento q llama
                                       a la función y en este caso es el object
                                       person el cual pertenece al scoope global
                                       así q no "busca dentro del objeto"
  },
};
```

- Arrays y sus métodos
