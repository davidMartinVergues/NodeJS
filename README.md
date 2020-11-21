# INDEX

- [NodeJS Course](#nodejs-course)
  - [by Maximillian Academind (Udemy)](#by-maximillian-academind)
- [Introducción](#introducción)
  - [Cómo funciona la web](#como-funciona-la-web)
  - [Que es NodeJS](#que-es-nodejs)
  - [Que podemos hacer cono node](#que-podemos-hacer-cono-node)
- [T-0 JavaScript Refresh](#t-0-javascript-refresh)
  - [Sintaxi de arrow function](#sintaxi-de-arrow-function)
  - [Uso de la keyword this y utilidad de () en las funciones](#Uso-de-la-keyword-this-y-utilidad-de)
  - [Objects properties methods](#objects-properties-methods)
  - [Arrays y sus métodos](#arrays-y-sus-métodos)
    - [Métodos](#métodos)
      - [map()](#map)
      - [slice()](#slice)
      - [splice()](#splice)
      - [foreach()](#foreach)
      - [push() / pop() / shift() / unshift()](#push--pop--shift--unshift)
  - [new Operators](#new-operators)
    - [spread "..."](#spread)
    - [rest "..."](#rest)
  - [Destructuring "{}"](#destructuring)
  - [Async code & Promises](#async-code-&-promises)
    - [Código síncrono vs asíncrono](#código-síncrono-vs-asíncrono)
    - [Promises](#promises)
- [T-1 NodeJs Basics](#t-1-nodejs-basics)
  - [Creando un servidor con NodeJS](#creando-un-servidor-con-nodejs)
    - [Creación del servidor:](#creación-del-servidor-)
      - [**request object**](#--request-object--)
      - [**response object**](#--response-object--)
      - [Routing request](#routing-request)
      - [Redirectign request & creating a file](#redirectign-request-&-creating-a-file)
      - [Obtener los datos del body de una request **Streams & Buffers**](#obtener-los-datos-del-body-de-una-request-streams-&-buffers)
    - [Lifecycle de un programa NodeJS](#lifecycle-de-un-programa-nodejs)
      - [The Event loop deeper](#the-event-loop-deeper)
  - [Usando el sistema de módulos de NodeJS](#usando-el-sistema-de-m-dulos-de-nodejs)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

Index made by: https://ecotrust-canada.github.io/markdown-toc/

# NodeJS Course

## by Maximillian Academind

> <span style="font-size:1.5em;"> [_link del curso_](https://www.udemy.com/course/nodejs-the-complete-guide/) </span>

- # Introducción

  - ## Como funciona la web
    ![not found!](img/img-4.png)
    Esta comunicación con el servidor se realiza utilizando unos protocolos, standarización de las rglas que tienen que seguir este tipo de comunicación. Hay varios protocolos pero los más utilizados son HTTP y HTTPs
    ![not found!](img/img-5.png)
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

- # T-0 JavaScript Refresh

  ![not found!](img/img-3.png)

  Js es un lenguaje débilmente tipado, podemos usar el paradigma orintado a objetos.

  - ## Sintaxi de arrow function

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

  - ## Uso de la keyword this y utilidad de ()

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

  - ## Objects properties methods

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

  - ## Arrays y sus métodos

    ```
    const miArray = ["david", "martin", 36];

    for (let items of miArray) {
      // "of" conseguimos los datos
      console.log(items);
    }

    for (let items in miArray) {
      // "in" conseguimos los índices
      console.log(items);
    }
    ```

    - ### Métodos

      - #### map()

        Convierte cada elemento del array, conservando el array original y devolviendo otro con los cambios efectuados. Por ejempo añadir a cada item un texto

        ```

        //1 línea
        let newArray = miArray.map((item, x) => `ìtem ${x}: ${item}`);
        //
        let newArray2 = miArray.map((item, x) => {
          return `ìtem ${x}: ${item}`;
        });

        console.log(newArray);//
        output: [ 'ìtem 0: david', 'ìtem 1: martin', 'ìtem 2: 36' ]
        ```

      - #### slice()

        para copiar arrays su contenido no la referencia así q los arryas serán independientes

        ```
        let shallowCopy = fruits.slice() // this is how to make a copy
        ```

      - #### splice()

        Eliminar items

        ```
        let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
        console.log(vegetables)
        // ["Cabbage", "Turnip", "Radish", "Carrot"]

        let pos = 1
        let n = 2

        let removedItems = vegetables.splice(pos, n)
        // this is how to remove items, n defines the number of items to be removed,
        // starting at the index position specified by pos and progressing toward the end of array.
        ```

      - #### foreach()
        looping arrays
        ```
        fruits.forEach(function(item, index, miArray) {
          console.log(item, index)
        })
        ```
      - #### push() / pop() / shift() / unshift()

        ```
        let fruits = ['Apple', 'Banana']

        let newLength = fruits.push('Orange')
        // ["Apple", "Banana", "Orange"]

        let last = fruits.pop() // remove Orange (from the end)
        // ["Apple", "Banana"]

        let first = fruits.shift() // remove Apple from the front
        // ["Banana"]

        let newLength = fruits.unshift('Strawberry') // add to the front
        // ["Strawberry", "Banana"]

        ```

  - ## new Operators

    - ### spread

      Permite sacar el contenido(propiedades/métodos/items) de un objeto/array y crear otro objeto/array según rodeemos el spread operator.
      Atención no hace un deep copy, es decir si copiamos un array/objeto que contiene otro valor por referencia no crea un nuevo objeto si no q copia la referencia (los métodos no son referencias, se mantiene independientes).

      ```

        const array1 = ["david", "martin", [36]];
        const arrayCopy = [...array1]; // lo rodeo de "[]" por lo q crea un array
        array1.push("vertgues");
        array1[0] = "david2";
        array1[2][0] = 40;

        console.log(array1);     //  [ 'david2', 'martin', [ 40 ], 'vertgues' ]
        console.log(arrayCopy); // [ 'david', 'martin', [ 40 ] ]

        no añade el último elemento pero si modifica el array anidado xq copió la referencia a este no hizo uno nuevo
      ```

      Puedo envolverlo con {} para crear un objeto

      ```
        const arrayCopy2 = { ...array1 };
        console.log(arrayCopy2); //
          {
          '0': 'david2',
          '1': 'martin',
          '2': [ 40 ],
          '3': 'vertgues'
          }
      ```

    - ### rest

      Tiene el efecto opuesto a spread, lo que hace es mergear / combinar los argumentos que le pasamos a una función en un array. También son 3 puntitos XD

      ```
      const toArray = (...args) => args;
      console.log(toArray(1, 2, 3, 5)); //[ 1, 2, 3, 5 ]

      ```

  - ## Destructuring

    Nos permite obtener los datos de un objeto / array de una manera sencilla. Se puede aplicar tanto a un objeto como a un array.

    Le paso un objeto y de ese objeto extraigo la propiedad name y age

    ```
    const person4 = {
    name: "David",
    age: 36,
    hobbies: ["nadar", "correr"],
    greet() {
      console.log("hello david");
    },
    };

    const printData = ({ name, age }) => console.log(name, age);

    ```

    También funciona fuera de las funciones y nos permite crear variables con el nombre de las propiedades de los objetos.

    ```
      const person4 = {
        name4: "David",
        age4: 36,
        hobbies4: ["nadar", "correr"],
        greet4() {
          console.log("hello david");
        }
      };

      const { name4, age4 } = person4;

      console.log(name4, age4);
    ```

    Podemos hacer destructuring de arrays y crear variables separadas, en este caso el destruturing se usa "[]" pero NO crea un array

    ```
      const array4 = ["fruta", "leche"];

      let [item1, item2] = array4;

      console.log(item1, item2);//fruta leche
    ```

  - ## Async code & Promises

    - ### Código síncrono vs asíncrono

      Un código síncrono es aquel que se ejecuta línea a línea, es decir un código síncrono es aquel código donde cada instrucción espera a la anterior para ejecutarse.

      Un código asíncrono no espera a las instrucciones diferidas y continúa con su ejecución. Por lo general la asincronía permite tener una mejor respuesta en las aplicaciones y reduce el tiempo de espera del cliente.

      ```
        //asíncrono
        setTimeout(() => {
          console.log("time done!");
        }, 2000);

        //síncrono
        console.log("2");
        console.log("1");
      ```

      el setTimeOut es como un callback, después de 2000 ms se ejecuta la función (el console.log) entonces eso es reconocido por JS y aunque el tiempo sea poco(2 s) primero ejecuta los otros console.log y después vuelve al setTimeOut.

      Si tenemos varias funciones asincronas puede ser difícil gestionarlas

      ```
        //asíncrono
        setTimeout(() => {
          console.log("time done!");
        }, 2000);

        //síncrono
        console.log("2");
        console.log("1");
      ```

    - ### Promises

      Son un objeto de JS que nos permite ejecutar código dependiendo del resultado de otra función. Por ejemplo la concexión a un API para obtener datos si la conexión es exitosa y obtenemos los datos cn la promesa ejecutamos un código y si el servidor devuelve un error ejecutamos otro código distinto.
      Las promesas se crean usando un constructor llamado Promise y pasándole una función que recibe dos parámetros, resolve y reject, que nos permiten indicarle a esta que se resolvió o se rechazó.

      ```
      const promise = new Promise((resolve, reject) => {
        const number = Math.floor(Math.random() * 10);

        setTimeout(
          () => number > 5
                    ? resolve(number)
                    : reject(new Error("Menor a 5"))
          ,1000
        );
      });

      promise
        .then((number) => console.log(number))
        .catch((error) => console.error(error));
      ```

---

- # T-1 NodeJs Basics

  - ## Creando un servidor con NodeJS

    Por defecto Node incluye una serie de módulos, los llamados core modules, algunos ejemplos son:
    ![not found](img/img-6.png)

    Aunque estos módulos están incluidos alguno de ellos no están disponibles de manera global como es el caso del módulo http para ello debemos importarlo usando el keyword **require**

    - require nos permitirá:
      - importar archivos locales, para ello hay que usar un path:
        - absoluto (empezamos x la raíz del sistema de archivos "/")
        - relativo (empezamos x donde se encuentra el archivo "./")
      - importar un **global module** para ello no especificamos ningún path, sólo el nombre del módulo.
    - ### Creación del servidor:

      1. importamos el global module **http**
         ```
           const http = require("http");
         ```
      2. usamos el método **createServer()**, como argumento necesita un **requestListener**, es una función tipo callback
         se ejecutará por cada conexión con el servidor (incoming request).
      3. definir los argumentos de la función requestListener, estos argumentos son dos objetos:

         - request => incoming message
         - response => respuesta del servidor  
           La función puede ser creada como función a parte, anónima o usando arrow function.

           ```
             1. Función a parte

               function rqListener(req, res) {}
               http.createServer(rqListener);

             2. anónima
               http.createServer(function (req, res) {});

             3. arrow funciton
                 http.createServer((req, res) => {console.log(req); });
           ```

      4. el método http.createServer() nos devuelve un objeto del tipo servidor.

         ```
           const server = http.createServer((req, res) => {
                         console.log(req);
                       });

         ```

      5. cn el servidor definimos, mediante el método listen(), un puerto y un
         hostname,si corremos en local por defecto es "localhost" así q no haría
         falta ponerlo.
         ```
          server.listen(3000, "localhost");
         ```

      - #### **request object**

        Es un objeto bastante complejo con multitud de información, a destacar:

        1. Headers
           - Es metadata, añadida al request y tb a response. Contiene el host
             ![not found](img/img-8.png)
        2. url
        3. method

      - #### **response object**

        Con el objeto response podemos mandar datos de vuelta, para ello utilizamos diferentes métodos:

        1.  **setHeader()**
            Definimos qué tipo de datos vamos a devolver
        2.  **setWrite()**
            No es muy habitual pero nos permite escribir html
        3.  **end()**
            Para indicar que finalizamos la respuesta. siempre tenemos que agregar end() para indicar q se finaliza

            ```
                const server = http.createServer((req, res) => {

                    const url = req.url;

                    res.setHeader("Content-Type", "text/html");
                    res.write("<html>");>
                    res.write("<head><title>My Web</title></head>");
                    res.write("<body><h1>Hello world</h1></body>");
                    res.write("</html>");
                    res.end();
              });
            ```

      - #### Routing request

        Vamos a gestionar las rutas de nuestro servidor, según el end-point el server nos dará una respuesta u otra.A lo cutre pero sería algo así:

        ```
        if (url === "/") {

                    res.setHeader("Content-Type", "text/html");
                    res.write("<html>");
                    res.write("<head><title>My Web</title></head>");
                    res.write(
                    "<body>
                      <h1>Enter massage</h1>
                      <form action='/message' method='POST'>
                        <input name='message' type='text'></input>
                        <button type='submit'>Click Me!</button>
                      </form>
                    </body>"
                    );
                    res.write("</html>");
                    return res.end();

                }
        ```

      - #### Redirectign request & creating a file

        ```
          // creamos estas variable como globales, fuera del http.reateServer()
          /--------------------------
          const fs = require("fs");
          const method = req.method;
          //--------------------------

          if (url == "/message" && method === "POST") {
            const m = "nothing";
            fs.writeFileSync("message.txt", m);
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
          }

        ```

      - #### Obtener los datos del body de una request **Streams & Buffers**

        Node gestiona todos los datos del mismo modo, usando streams y buffers, es una manera muy eficiente de gestionar los datos (leer/escribir datos de entrada en una salida secuencial), son usados para leer archivos, comunicaciones en red,...
        Básicamente un stream lo que hace es partir los datos en fragmentos lo que hace que sean más manegables y que se puedan empezar a procesar a medida que vamos obteniendo estos fragmentos, en lugar de cargar todos los datos en memoria de una vez como se hacía antes.
        Es como funcionan las plataformas de "streaming" como youTube, no cargan el vido completo para poder visualizarlo sino que trocean la información y la van mandando a trozos para que estos puedan ser procesados de inmediato y el video se reproduzca al momento, creando así un flujo continuo de datos. El papel del buffer es de contenedor, a medida que vamos obteniendo trozos de datos vamos llenando el buffer(éste tiene una memoria fija), así un buffer contiene fragmentos de datos antes de empezar a procesarlos, cuando este se llena los datos empiezan a ser procesados. En el flujo continuo de datos, los buffers serían como un stop para coger ese conjunto de trozos de datos y empezar a procesarlos.  
        ![not found](img/img-9.png)  
        ![not found](img/img-10.png)

        Para leer los datos del request, en nuestro caso datos enviados por un formulario (POST), en node todo son eventos así que para capturar los datos tenemos que implementar un **event listener** que esté pendiente de un evento tipo data, este evento es disparado por el stream cuando hay un paquete de datos (chunk) disponible, cuando el buffer está lleno, entonces podemos empezar a procesar esa parte de los datos y el stream dispara un evento 'data' y genera un chunk_of_data que es un objeto Buffer, cada uno de estos chunk_of_data los vamos metiendo en un array de tal manera q al finalizar el proceso tendremos un array de buffers. Al finalizar el proceso se emite un evento end (ya no hay más datos disponibles). Capturamos ese evento y mediante el método concat() de la clase buffer generamos un nuevo buffer a partir del array de buffers (body) y como sabemos q la info es tipo string lo casteamos a string

        ```
              const body = [];
              req.on("data", (chunk_of_data) => {
                body.push(chunk_of_data);
              });
              req.on("end", () => {
                const parsedBody = Buffer.concat(body).toString();
                const message = parsedBody.split("=")[1];
                fs.writeFile("message.txt", message, (err)=>{
                  res.statusCode = 302;
                    res.setHeader("Location", "/");
                    return res.end();
                });
              });
        ```

    - ### Lifecycle de un programa NodeJS

      En el caso de nuestro servidor(app.js), los pasos son los siguientes:

      1.  Ejecutamos el archivo => node app.js
      2.  El motor de node lee el archivo
      3.  Parsea el código, registra las variables y funciones
      4.  Entonces sucede que nuestro archivo se mantiene en ejecución gracias al **event loop**  
           4.1. Event loop es un proceso gestionado por nodeJS que gestiona los callbacks.  
           4.2. Hay que recordar que NodeJS corre en un único hilo (single threat) no se pueden ejectar varios procesos al mismo tiempo(aunque se puede modificar hasta 4 threats)  
           4.2. Event loop está formado por varias partes:

          - Tenemos un event queue, donde se almacenan los procesos a reaizar
          - cada evento es recogido x el event loop y llevado al thread pool donde es asignado a un hilo
          - En el thread pool hay un max de 4 hilos cuando están ocupados, la event queue se va llenado
          - a medida que van terminando los procesos los hilos se desocupan y event loop va cogiendo nuevos procesos de la cola
          - en nuestro caso (servidor) el event loop se queda continuamente a la escucha de nuevos request.

            ![not found](img/img-7.png)  
            **Siendo NodeJS un proceso monohilo como conseguimos el efecto multihilo, para ello nos servimos de las callbacks y del sistema operativo que nos provee de prcesos multihilo, entonces NodeJS recoge la tarea del event queue. pej leer fichero, y solicita al SO que realice esa función y mediante una callback nos avise cuando la haya completado, mientras nuestro hilo sigue su curso y se encuentra otra tarea, conexion cn bbdd, vuelve a solicitar al SO que haga la conexión, y así, si tuvieramos un proceso que requiere mucho poder de computación o el SO no provee ninguna interfaz asíncrona para ese proceso ya no se utiliza al SO si no que tiramos el threadPoll**  
            source: [_link del video_](https://www.youtube.com/watch?v=lGiv0zfdiJA)

      - #### The Event loop deeper

        Cómo ya hemos dicho event loop se encarga de gestionar los callbacks, en el siguiente orden:

        - En primer lugar busca si en nuestro código hay **timers** (setTimeOut/setInterval)
        - Otros callbacks pendientes tipo I/O-related como leer/escribir archivos, conexiones de red,...en general blocking long taking operation
        - en un punto de este proceso nodeJS dejará esta fase, así que si hay más callbacks pospondrá su ejecución hasta el siguiente iteración del loop
        - Una vez estas primera operaciones se completen, event loop entra en la fase poll
        - Esta fase pull es cuando nodeJS buscará nuevos I/O events
        - Si encuentra nuevos IO events hará lo posible por ejecutar sus callbacks de manera inmediata
        - Si no es posible pospondrá su ejecución y las registrará como callbacks pendientes.

        VOLVER A MIRAR EL VIDEO 14
        ![not found](./img/img-12.png)
        ![not found](./img/img-11.png)

  - ## Usando el sistema de módulos de NodeJS

    En nodeJS es muy común separar nuestro código en diferentes archivos y luego exportarlos para poderlos usar desde otros archvos y así tener nuestro código más ordenado.  
    Podemos crear un nuevo archivo llamado **routes.js** que contendrá los pasos a seguir según la url que le solicitemos al servidor, esto es la función anónima que le pasamos como argumento a **http.createServer()**. Así podemos dejar un archivo con la creación del servidor y un archivo routes dnd encontremoslas urls de éste.
    Nuestro punto de partida será el servidor (app.js) y este requerirá el código del archivo routes, para ello desde el archio routes asignamos nuestra función **(req,res)=>{}** a una constamte llamada **requestHandler** para luego poderla exportar.

    ```
    const requestHandler = (req, res) => {
      const url = req.url;
      const method = req.method;
      if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My Web</title></head>");
        res.write(
          "<body><h1>Enter massage</h1> <form action='/message' method='POST'> <input name='message' type='text'></input> <button type='submit'>Click Me!</button> </form></body>"
        );
        res.write("</html>");
        return res.end();
      }

      if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", (chunk_of_data) => {
          body.push(chunk_of_data);
        });
        req.on("end", () => {
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split("=")[1];
          fs.writeFileSync("message.txt", message, (err) => {
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
          });
        });
      }
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>My Web</title></head>");
      res.write("<body><h1>hello world</h1> </body>");
      res.write("</html>");
      res.end();
    };
    ```

    Y esta constante **requestHandler** será lo que exportemos. Lo podemos hacer de varias maneras pero siempre utilizando un objeto global de JS llamada **module** que tiene una propiedad llamada **exports** a la cual le podemos asignar un valor:

    1. Almacenar directamente la constante en la propiedad exports

    ```
      module.exports = requestHandler;

      // en app.js podríamos utilizar la constante directamente:
        const routes = require("./routes");
        const server = http.createServer(routes);

    ```

    2. exportar como un objeto

    ```
      module.exports = {
        handler: requestHandler,
        text : 'Hello world"
      }
      // en app.js tenemos q acceder a la propiedad de ese objeto:
        const routes = require("./routes");
        const server = http.createServer(routes.handler);

    ```

    2. crear propiedades dentro de exports

    ```
      module.exports.handler= requestHandler;
      module.exports.text= 'hello world';

      // en app.js tenemos q acceder a la propiedad de ese objeto:
        const routes = require("./routes");
        const server = http.createServer(routes.handler);

    ```

    Una vez hecho esto desde nuestro archivo app.js podemos importar los datos contenido en esa propiedad **exposrts** mediante un **require** y almacenar los datos en una constante. Como estamos importando un módulo que no es global necesitamos especificar el path por ello:

    ```
      const routes = require("./routes");
    ```
