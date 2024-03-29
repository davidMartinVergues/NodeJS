- [NodeJS Course](#nodejs-course)
  - [by Maximillian Academind](#by-maximillian-academind)
- [Introducción](#introducción)
  - [Como funciona la web](#como-funciona-la-web)
  - [Que es NodeJS](#que-es-nodejs)
  - [Que podemos hacer cono node](#que-podemos-hacer-cono-node)
- [T-0 JavaScript Refresh](#t-0-javascript-refresh)
  - [Sintaxi de arrow function](#sintaxi-de-arrow-function)
  - [Uso de la keyword this y utilidad de ()](#uso-de-la-keyword-this-y-utilidad-de-)
  - [Objects properties methods](#objects-properties-methods)
  - [Arrays y sus métodos](#arrays-y-sus-métodos)
    - [Métodos](#métodos)
      - [map()](#map)
      - [slice()](#slice)
      - [splice()](#splice)
      - [filter()](#filter)
      - [foreach()](#foreach)
      - [push pop shift unshift](#push-pop-shift-unshift)
      - [find and findIndex](#find-and-findindex)
  - [new Operators](#new-operators)
    - [spread](#spread)
    - [rest](#rest)
  - [Destructuring](#destructuring)
  - [Async code & Promises](#async-code--promises)
    - [Código síncrono vs asíncrono](#código-síncrono-vs-asíncrono)
    - [Promises](#promises)
- [T-1 NodeJs Basics](#t-1-nodejs-basics)
  - [Definición de Node](#definición-de-node)
    - [Bases de Node](#bases-de-node)
    - [Event loop - asincronía](#event-loop---asincronía)
      - [CÓMO FUNCIONA](#cómo-funciona)
      - [Problemas del monohilo](#problemas-del-monohilo)
  - [Configurar variables de entorno en nodeJS](#configurar-variables-de-entorno-en-nodejs)
  - [Herramientas para nodeJS](#herramientas-para-nodejs)
    - [Nodemon](#nodemon)
    - [pm2](#pm2)
  - [Manejar asincronía en nodeJS](#manejar-asincronía-en-nodejs)
    - [Callbacks](#callbacks)
      - [Callback hells](#callback-hells)
    - [Promesas](#promesas)
    - [Async/await](#asyncawait)
  - [Modulos del Core de nodeJS](#modulos-del-core-de-nodejs)
    - [Globals](#globals)
    - [File System - fs](#file-system---fs)
      - [readFile](#readfile)
      - [writeFile](#writefile)
      - [unlink](#unlink)
    - [Console](#console)
    - [HTTP](#http)
    - [OS](#os)
    - [Process](#process)
    - [Try/Catch](#trycatch)
  - [Procesos hijos](#procesos-hijos)
    - [Ejecutar/compilar modulos de C++](#ejecutarcompilar-modulos-de-c)
  - [NPM](#npm)
  - [Creando nuestro propio módulo](#creando-nuestro-propio-módulo)
  - [Datos almacenados vs en memoria](#datos-almacenados-vs-en-memoria)
    - [Buffers](#buffers)
    - [Streams](#streams)
      - [Stream de lectura](#stream-de-lectura)
      - [Los streams de escritura](#los-streams-de-escritura)
  - [Trucos node](#trucos-node)
    - [Rendimiento de una app de node](#rendimiento-de-una-app-de-node)
    - [Debugging](#debugging)
    - [Error first callbacks](#error-first-callbacks)
  - [Automatización de procesos con node](#automatización-de-procesos-con-node)
  - [Crear aplicaciones con NodeJS - Electron](#crear-aplicaciones-con-nodejs---electron)
  - [Instalar nodeJS](#instalar-nodejs)
  - [Creando un servidor con NodeJS](#creando-un-servidor-con-nodejs)
  - [Creación del servidor](#creación-del-servidor)
    - [**request object**](#request-object)
      - [**response object**](#response-object)
      - [Routing request](#routing-request)
    - [Redirectign request & creating a file](#redirectign-request--creating-a-file)
      - [Obtener los datos del body de una request **Streams & Buffers**](#obtener-los-datos-del-body-de-una-request-streams--buffers)
      - [Streams, buffers, pipes and files](#streams-buffers-pipes-and-files)
    - [Lifecycle de un programa NodeJS](#lifecycle-de-un-programa-nodejs)
      - [The Event loop deeper](#the-event-loop-deeper)
  - [Usando el sistema de módulos de NodeJS](#usando-el-sistema-de-módulos-de-nodejs)
- [T2 work flow y debugging](#t2-work-flow-y-debugging)
  - [Entendiendo NPM node package manager scripts](#entendiendo-npm-node-package-manager-scripts)
    - [Instalando paquetes de terceros](#instalando-paquetes-de-terceros)
      - [Paquetes útiles](#paquetes-útiles)
        - [sharp](#sharp)
        - [moment](#moment)
        - [bcrypt](#bcrypt)
        - [NODEMON](#nodemon-1)
  - [Errors and debugging](#errors-and-debugging)
- [T3 ExpressJS](#t3-expressjs)
  - [Que es expressJS y para qué se utiliza](#que-es-expressjs-y-para-qué-se-utiliza)
  - [Usando express](#usando-express)
    - [Middleware](#middleware)
      - [use](#use)
      - [listen()](#listen)
    - [Manejando rutas](#manejando-rutas)
    - [Parsing incoming request](#parsing-incoming-request)
    - [usando el router de express](#usando-el-router-de-express)
    - [generar 404 error page](#generar-404-error-page)
    - [Filtrar los PATHS](#filtrar-los-paths)
    - [Servir páginas HTML](#servir-páginas-html)
      - [Formas de acceder al path](#formas-de-acceder-al-path)
        - [process.cwd()](#processcwd)
        - [require.main.filename](#requiremainfilename)
        - [dirname](#dirname)
    - [Servir archivos estáticos](#servir-archivos-estáticos)
- [T4 - Trabajando con contenido dinámico y motor de plantillas](#t4---trabajando-con-contenido-dinámico-y-motor-de-plantillas)
  - [Motor de plantillas](#motor-de-plantillas)
    - [Instalación de las plantillas](#instalación-de-las-plantillas)
      - [view engine](#view-engine)
      - [views](#views)
    - [PUG](#pug)
      - [Añadiendo contenido dinámico a la plantilla de pug](#añadiendo-contenido-dinámico-a-la-plantilla-de-pug)
      - [Añadiendo Layouts](#añadiendo-layouts)
      - [Añadir clases css de manera dinámica](#añadir-clases-css-de-manera-dinámica)
    - [HandleBars](#handlebars)
      - [Usando layouts con handlebars](#usando-layouts-con-handlebars)
    - [EJS](#ejs)
- [T-5 Patrón Modelo vista controlador - MVC -](#t-5-patrón-modelo-vista-controlador---mvc--)
- [T-6 Enhancing app](#t-6-enhancing-app)
- [T-7 Dynamic routes and advanced models](#t-7-dynamic-routes-and-advanced-models)
- [T-8 Proyecto-1](#t-8-proyecto-1)
  - [Funciones a tener en cuenta](#funciones-a-tener-en-cuenta)
  - [callbacks - aclaración -](#callbacks---aclaración--)
  - [Proyecto para poner en práctica todo lo aprendido hasta el momento.](#proyecto-para-poner-en-práctica-todo-lo-aprendido-hasta-el-momento)
- [T-9 BBDD y NodeJS](#t-9-bbdd-y-nodejs)
  - [SQL](#sql)
  - [noSQL](#nosql)
  - [SQL](#sql-1)
    - [Instalando MySQL - KDE neon](#instalando-mysql---kde-neon)
    - [INSTALAR MariaDB](#instalar-mariadb)
      - [Configuraciones MARIADB](#configuraciones-mariadb)
    - [creación de un nuevo usuario mysql](#creación-de-un-nuevo-usuario-mysql)
    - [INSTALAR **Dbeaver** - GUI TOOL](#instalar-dbeaver---gui-tool)
    - [INSTALAR mysql](#instalar-mysql)
    - [Errores msql](#errores-msql)
    - [Desinstalar mysql](#desinstalar-mysql)
    - [Usando workbench](#usando-workbench)
    - [Conectar nuestra app a la base de datos SQL](#conectar-nuestra-app-a-la-base-de-datos-sql)
    - [Adaptando nuestra app a la conexión con bbdd](#adaptando-nuestra-app-a-la-conexión-con-bbdd)
- [T-10 Sequelize](#t-10-sequelize)
  - [conectar sequelize a nuestra bbdd](#conectar-sequelize-a-nuestra-bbdd)
  - [crear modelo con sequelize](#crear-modelo-con-sequelize)
    - [Creación de product model](#creación-de-product-model)
    - [Creación de User model](#creación-de-user-model)
    - [usando el modelo de sequelize](#usando-el-modelo-de-sequelize)
  - [Reescribiendo los controladores](#reescribiendo-los-controladores)
    - [admin controller](#admin-controller)
      - [Crear un nuevo producto](#crear-un-nuevo-producto)
      - [obtener todos los productos de la bbdd](#obtener-todos-los-productos-de-la-bbdd)
      - [obtener un producto por su primary_key](#obtener-un-producto-por-su-primary_key)
      - [update a product](#update-a-product)
      - [delete a product](#delete-a-product)
  - [relaciones o asociaciones con sequelize](#relaciones-o-asociaciones-con-sequelize)
    - [Opciones de los métodos](#opciones-de-los-métodos)
      - [onDelete and onUpdate](#ondelete-and-onupdate)
      - [Customizing the foreign key](#customizing-the-foreign-key)
      - [Asociación obligatoria u opcional](#asociación-obligatoria-u-opcional)
    - [one-to-one](#one-to-one)
    - [one-to-Many](#one-to-many)
    - [Many-to-Many](#many-to-many)
  - [creación de un user (simple)](#creación-de-un-user-simple)
  - [Trabajando en el modelo de cart](#trabajando-en-el-modelo-de-cart)
  - [Eager Loading](#eager-loading)
- [T-11 Usando MongoDB](#t-11-usando-mongodb)
  - [Instalamos MongoDB compass](#instalamos-mongodb-compass)
  - [Conectar con mongodb Atlas](#conectar-con-mongodb-atlas)
  - [Rehaciendo los modelos](#rehaciendo-los-modelos)
    - [product model](#product-model)
      - [Guardar un nuevo item](#guardar-un-nuevo-item)
      - [encontrar un elemento por ID](#encontrar-un-elemento-por-id)
      - [Modificar un item](#modificar-un-item)
      - [eliminar un item](#eliminar-un-item)
    - [Creando un modelo para users](#creando-un-modelo-para-users)
    - [Cart model](#cart-model)
    - [order model](#order-model)
- [T-12 Usando Mongoose](#t-12-usando-mongoose)
  - [Que es mongoose?](#que-es-mongoose)
  - [Instalar mongoose](#instalar-mongoose)
  - [Trabajando con mongoose](#trabajando-con-mongoose)
    - [Conectar con nuestra bbdd](#conectar-con-nuestra-bbdd)
    - [Product model](#product-model-1)
      - [CRUD con mongoose](#crud-con-mongoose)
        - [Create](#create)
        - [Read](#read)
        - [Update](#update)
        - [Delete](#delete)
    - [User model](#user-model)
    - [Establecer relaciones con mongoose](#establecer-relaciones-con-mongoose)
    - [Obtener datos de modelos relacionados](#obtener-datos-de-modelos-relacionados)
      - [select()](#select)
      - [populate()](#populate)
    - [Trabajando en el cart](#trabajando-en-el-cart)
      - [Añadir productos al cart](#añadir-productos-al-cart)
      - [Pintar productos del cart](#pintar-productos-del-cart)
      - [Eliminar productos del cart](#eliminar-productos-del-cart)
    - [order model](#order-model-1)
      - [creando una orden](#creando-una-orden)
      - [obtener las orders](#obtener-las-orders)
- [T13 - Sessions and cookies](#t13---sessions-and-cookies)
  - [creando una cookie](#creando-una-cookie)
  - [creando sessiones](#creando-sessiones)
    - [**IMPLEMENTACIÓN DE UNA SESSION**](#implementación-de-una-session)
    - [**GUARDANDO LA SESSION EN LA BBDD**](#guardando-la-session-en-la-bbdd)
    - [**ELIMINAR UNA SESSION**](#eliminar-una-session)
  
  [creando un servidor con nodejs](#creando-un-servidor-con-nodejs)
  - [Creación del servidor](#creación-del-servidor)
    - [**request object**](#request-object)
      - [**response object**](#response-object)
      - [Routing request](#routing-request)
    - [Redirectign request & creating a file](#redirectign-request--creating-a-file)
      - [Obtener los datos del body de una request **Streams & Buffers**](#obtener-los-datos-del-body-de-una-request-streams--buffers)
      - [Streams, buffers, pipes and files](#streams-buffers-pipes-and-files)
    - [Lifecycle de un programa NodeJS](#lifecycle-de-un-programa-nodejs)
      - [The Event loop deeper](#the-event-loop-deeper)
  - [Usando el sistema de módulos de NodeJS](#usando-el-sistema-de-módulos-de-nodejs)
- [NodeJS Course](#nodejs-course)
  - [by Maximillian Academind](#by-maximillian-academind)
- [Introducción](#introducción)
  - [Como funciona la web](#como-funciona-la-web)
  - [Que es NodeJS](#que-es-nodejs)
  - [Que podemos hacer cono node](#que-podemos-hacer-cono-node)
- [T-0 JavaScript Refresh](#t-0-javascript-refresh)
  - [Sintaxi de arrow function](#sintaxi-de-arrow-function)
  - [Uso de la keyword this y utilidad de ()](#uso-de-la-keyword-this-y-utilidad-de-)
  - [Objects properties methods](#objects-properties-methods)
  - [Arrays y sus métodos](#arrays-y-sus-métodos)
    - [Métodos](#métodos)
      - [map()](#map)
      - [slice()](#slice)
      - [splice()](#splice)
      - [filter()](#filter)
      - [foreach()](#foreach)
      - [push pop shift unshift](#push-pop-shift-unshift)
      - [find and findIndex](#find-and-findindex)
  - [new Operators](#new-operators)
    - [spread](#spread)
    - [rest](#rest)
  - [Destructuring](#destructuring)
  - [Async code & Promises](#async-code--promises)
    - [Código síncrono vs asíncrono](#código-síncrono-vs-asíncrono)
    - [Promises](#promises)
- [T-1 NodeJs Basics](#t-1-nodejs-basics)
  - [Definición de Node](#definición-de-node)
    - [Bases de Node](#bases-de-node)
    - [Event loop - asincronía](#event-loop---asincronía)
      - [CÓMO FUNCIONA](#cómo-funciona)
      - [Problemas del monohilo](#problemas-del-monohilo)
  - [Configurar variables de entorno en nodeJS](#configurar-variables-de-entorno-en-nodejs)
  - [Herramientas para nodeJS](#herramientas-para-nodejs)
    - [Nodemon](#nodemon)
    - [pm2](#pm2)
  - [Manejar asincronía en nodeJS](#manejar-asincronía-en-nodejs)
    - [Callbacks](#callbacks)
      - [Callback hells](#callback-hells)
    - [Promesas](#promesas)
    - [Async/await](#asyncawait)
  - [Modulos del Core de nodeJS](#modulos-del-core-de-nodejs)
    - [Globals](#globals)
    - [File System - fs](#file-system---fs)
      - [readFile](#readfile)
      - [writeFile](#writefile)
      - [unlink](#unlink)
    - [Console](#console)
    - [HTTP](#http)
    - [OS](#os)
    - [Process](#process)
    - [Try/Catch](#trycatch)
  - [Procesos hijos](#procesos-hijos)
    - [Ejecutar/compilar modulos de C++](#ejecutarcompilar-modulos-de-c)
  - [NPM](#npm)
  - [Creando nuestro propio módulo](#creando-nuestro-propio-módulo)
  - [Datos almacenados vs en memoria](#datos-almacenados-vs-en-memoria)
    - [Buffers](#buffers)
    - [Streams](#streams)
      - [Stream de lectura](#stream-de-lectura)
      - [Los streams de escritura](#los-streams-de-escritura)
  - [Trucos node](#trucos-node)
    - [Rendimiento de una app de node](#rendimiento-de-una-app-de-node)
    - [Debugging](#debugging)
    - [Error first callbacks](#error-first-callbacks)
  - [Automatización de procesos con node](#automatización-de-procesos-con-node)
  - [Crear aplicaciones con NodeJS - Electron](#crear-aplicaciones-con-nodejs---electron)
  - [Instalar nodeJS](#instalar-nodejs)
  - [Creando un servidor con NodeJS](#creando-un-servidor-con-nodejs)
  - [Creación del servidor](#creación-del-servidor)
    - [**request object**](#request-object)
      - [**response object**](#response-object)
      - [Routing request](#routing-request)
    - [Redirectign request & creating a file](#redirectign-request--creating-a-file)
      - [Obtener los datos del body de una request **Streams & Buffers**](#obtener-los-datos-del-body-de-una-request-streams--buffers)
      - [Streams, buffers, pipes and files](#streams-buffers-pipes-and-files)
    - [Lifecycle de un programa NodeJS](#lifecycle-de-un-programa-nodejs)
      - [The Event loop deeper](#the-event-loop-deeper)
  - [Usando el sistema de módulos de NodeJS](#usando-el-sistema-de-módulos-de-nodejs)
- [T2 work flow y debugging](#t2-work-flow-y-debugging)
  - [Entendiendo NPM node package manager scripts](#entendiendo-npm-node-package-manager-scripts)
    - [Instalando paquetes de terceros](#instalando-paquetes-de-terceros)
      - [Paquetes útiles](#paquetes-útiles)
        - [sharp](#sharp)
        - [moment](#moment)
        - [bcrypt](#bcrypt)
        - [NODEMON](#nodemon-1)
  - [Errors and debugging](#errors-and-debugging)
- [T3 ExpressJS](#t3-expressjs)
  - [Que es expressJS y para qué se utiliza](#que-es-expressjs-y-para-qué-se-utiliza)
  - [Usando express](#usando-express)
    - [Middleware](#middleware)
      - [use](#use)
      - [listen()](#listen)
    - [Manejando rutas](#manejando-rutas)
    - [Parsing incoming request](#parsing-incoming-request)
    - [usando el router de express](#usando-el-router-de-express)
    - [generar 404 error page](#generar-404-error-page)
    - [Filtrar los PATHS](#filtrar-los-paths)
    - [Servir páginas HTML](#servir-páginas-html)
      - [Formas de acceder al path](#formas-de-acceder-al-path)
        - [process.cwd()](#processcwd)
        - [require.main.filename](#requiremainfilename)
        - [dirname](#dirname)
    - [Servir archivos estáticos](#servir-archivos-estáticos)
- [T4 - Trabajando con contenido dinámico y motor de plantillas](#t4---trabajando-con-contenido-dinámico-y-motor-de-plantillas)
  - [Motor de plantillas](#motor-de-plantillas)
    - [Instalación de las plantillas](#instalación-de-las-plantillas)
      - [view engine](#view-engine)
      - [views](#views)
    - [PUG](#pug)
      - [Añadiendo contenido dinámico a la plantilla de pug](#añadiendo-contenido-dinámico-a-la-plantilla-de-pug)
      - [Añadiendo Layouts](#añadiendo-layouts)
      - [Añadir clases css de manera dinámica](#añadir-clases-css-de-manera-dinámica)
    - [HandleBars](#handlebars)
      - [Usando layouts con handlebars](#usando-layouts-con-handlebars)
    - [EJS](#ejs)
- [T-5 Patrón Modelo vista controlador - MVC -](#t-5-patrón-modelo-vista-controlador---mvc--)
- [T-6 Enhancing app](#t-6-enhancing-app)
- [T-7 Dynamic routes and advanced models](#t-7-dynamic-routes-and-advanced-models)
- [T-8 Proyecto-1](#t-8-proyecto-1)
  - [Funciones a tener en cuenta](#funciones-a-tener-en-cuenta)
  - [callbacks - aclaración -](#callbacks---aclaración--)
  - [Proyecto para poner en práctica todo lo aprendido hasta el momento.](#proyecto-para-poner-en-práctica-todo-lo-aprendido-hasta-el-momento)
- [T-9 BBDD y NodeJS](#t-9-bbdd-y-nodejs)
  - [SQL](#sql)
  - [noSQL](#nosql)
  - [SQL](#sql-1)
    - [Instalando MySQL - KDE neon](#instalando-mysql---kde-neon)
    - [INSTALAR MariaDB](#instalar-mariadb)
      - [Configuraciones MARIADB](#configuraciones-mariadb)
    - [creación de un nuevo usuario mysql](#creación-de-un-nuevo-usuario-mysql)
    - [INSTALAR **Dbeaver** - GUI TOOL](#instalar-dbeaver---gui-tool)
    - [INSTALAR mysql](#instalar-mysql)
    - [Errores msql](#errores-msql)
    - [Desinstalar mysql](#desinstalar-mysql)
    - [Usando workbench](#usando-workbench)
    - [Conectar nuestra app a la base de datos SQL](#conectar-nuestra-app-a-la-base-de-datos-sql)
    - [Adaptando nuestra app a la conexión con bbdd](#adaptando-nuestra-app-a-la-conexión-con-bbdd)
- [T-10 Sequelize](#t-10-sequelize)
  - [conectar sequelize a nuestra bbdd](#conectar-sequelize-a-nuestra-bbdd)
  - [crear modelo con sequelize](#crear-modelo-con-sequelize)
    - [Creación de product model](#creación-de-product-model)
    - [Creación de User model](#creación-de-user-model)
    - [usando el modelo de sequelize](#usando-el-modelo-de-sequelize)
  - [Reescribiendo los controladores](#reescribiendo-los-controladores)
    - [admin controller](#admin-controller)
      - [Crear un nuevo producto](#crear-un-nuevo-producto)
      - [obtener todos los productos de la bbdd](#obtener-todos-los-productos-de-la-bbdd)
      - [obtener un producto por su primary_key](#obtener-un-producto-por-su-primary_key)
      - [update a product](#update-a-product)
      - [delete a product](#delete-a-product)
  - [relaciones o asociaciones con sequelize](#relaciones-o-asociaciones-con-sequelize)
    - [Opciones de los métodos](#opciones-de-los-métodos)
      - [onDelete and onUpdate](#ondelete-and-onupdate)
      - [Customizing the foreign key](#customizing-the-foreign-key)
      - [Asociación obligatoria u opcional](#asociación-obligatoria-u-opcional)
    - [one-to-one](#one-to-one)
    - [one-to-Many](#one-to-many)
    - [Many-to-Many](#many-to-many)
  - [creación de un user (simple)](#creación-de-un-user-simple)
  - [Trabajando en el modelo de cart](#trabajando-en-el-modelo-de-cart)
  - [Eager Loading](#eager-loading)
- [T-11 Usando MongoDB](#t-11-usando-mongodb)
  - [Instalamos MongoDB compass](#instalamos-mongodb-compass)
  - [Conectar con mongodb Atlas](#conectar-con-mongodb-atlas)
  - [Rehaciendo los modelos](#rehaciendo-los-modelos)
    - [product model](#product-model)
      - [Guardar un nuevo item](#guardar-un-nuevo-item)
      - [encontrar un elemento por ID](#encontrar-un-elemento-por-id)
      - [Modificar un item](#modificar-un-item)
      - [eliminar un item](#eliminar-un-item)
    - [Creando un modelo para users](#creando-un-modelo-para-users)
    - [Cart model](#cart-model)
    - [order model](#order-model)
- [T-12 Usando Mongoose](#t-12-usando-mongoose)
  - [Que es mongoose?](#que-es-mongoose)
  - [Instalar mongoose](#instalar-mongoose)
  - [Trabajando con mongoose](#trabajando-con-mongoose)
    - [Conectar con nuestra bbdd](#conectar-con-nuestra-bbdd)
    - [Product model](#product-model-1)
      - [CRUD con mongoose](#crud-con-mongoose)
        - [Create](#create)
        - [Read](#read)
        - [Update](#update)
        - [Delete](#delete)
    - [User model](#user-model)
    - [Establecer relaciones con mongoose](#establecer-relaciones-con-mongoose)
    - [Obtener datos de modelos relacionados](#obtener-datos-de-modelos-relacionados)
      - [select()](#select)
      - [populate()](#populate)
    - [Trabajando en el cart](#trabajando-en-el-cart)
      - [Añadir productos al cart](#añadir-productos-al-cart)
      - [Pintar productos del cart](#pintar-productos-del-cart)
      - [Eliminar productos del cart](#eliminar-productos-del-cart)
    - [order model](#order-model-1)
      - [creando una orden](#creando-una-orden)
      - [obtener las orders](#obtener-las-orders)
- [T13 - Sessions and cookies](#t13---sessions-and-cookies)
  - [creando una cookie](#creando-una-cookie)
  - [creando sessiones](#creando-sessiones)
    - [**IMPLEMENTACIÓN DE UNA SESSION**](#implementación-de-una-session)
    - [**GUARDANDO LA SESSION EN LA BBDD**](#guardando-la-session-en-la-bbdd)
    - [**ELIMINAR UNA SESSION**](#eliminar-una-session)

# NodeJS Course

## by Maximillian Academind

> <span style="font-size:1.5em;"> [_link del curso_](https://www.udemy.com/course/nodejs-the-complete-guide/) </span>

# Introducción

## Como funciona la web

![not found!](img/img-4.png)
Esta comunicación con el servidor se realiza utilizando unos protocolos, standarización de las rglas que tienen que seguir este tipo de comunicación. Hay varios protocolos pero los más utilizados son HTTP y HTTPs
![not found!](img/img-5.png)

## Que es NodeJS

Node.js es un entorno de tiempo de ejecución de JavaScript (de ahí su terminación en .js haciendo alusión al lenguaje JavaScript). Este entorno incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript. Es la manera que tenemos de ejecutar JS fuera del navegador.
Node aprovecha el motor V8(engine v8) de google, este permite compilar código JS en código máquina.
Una vez instalado Node en la terminal tecleamos node y entramos en el "REPL"(Read user input, Evaluate user input, Print output, Loop wait for new input), interprete de comandos de node.

Habitualmente Node se usa del lado del servidor.

Aquí tenemos una petición cliente-servidor típica:

![not found!](img/img-1.png)

## Que podemos hacer cono node

Podemos construir nuestro propio servidor, aceptar peticiones y crear respuestas en forma de html, datos (json, xml, archivos) y la lógica de negocio

![not found!](img/img-2.png)

# T-0 JavaScript Refresh

![not found!](img/img-3.png)

Js es un lenguaje débilmente tipado, podemos usar el paradigma orintado a objetos.

## Sintaxi de arrow function

```javascript
const add2 = (a, b) => {
  return a + b;
};

//podemos simplificar en un sola línea
const add = (a, b) => a + b;

// si solo tien un argumento
const addOne = (a) => a + 1;

// si no tien ningún argumento
const addRandom = () => 1 + 2;
```

cp

## Uso de la keyword this y utilidad de ()

- This se usa para referirnos a variables o métodos dentro de la misma clase. Si definimos una variable con this dentro de la clase ésta será accesible desde un objeto de esa clase.
  Aquí JS tiene algo curioso y es que no solo "this" hace referencia a elementos dentro de la clase si no que también hace referencia al elemento que llama a la función.

```javascript
class NameGeenerator {
  constructor() {
    const btn = document.querySelector("button");
    this.names = ["Desi", "Jenni", "David"]; //asequible a toda la clase
    this.currentName = 0;
    btn.addEventListener("click", this.addName); //acceder a 1 método de la clase
    //aquí This hace referencia a la clase
    // xq quien llama al constructor es la clase
  }

  addName() {
    const name = new NameField(this.names[this.currentName]); // aquí this hace referencia al elemento que llama a la funcion addName q es el btn
    this.currentName++;

    if (currentName >= this.names.length) {
      this.currentName = 0;
    }
  }
}

const gen = new NameGeenerator();
```

Para cambiar este comportamiento del this debemos usar el método bind() que fija a que hace referencia el this para esa función

```javascript
btn.addEventListener("click", this.addName.bind(this)); //vuelvo a poner this xq en el
// contexto del contructor quien
//  lo llama es la propia clase
```

    Otra manera de solucionar esto es usando funciones anónimas pero aquíi otra vez nos encontramos con el problema del this

```javascript
btn.addEventListener(
  "click",
  function () {
    this.addName();
  }.bind(this)
);
```

Pero la última solución propuesta x ES6 son las arrow function las cuales nos permiten conservar la referencia del this, es como si llamaramos al this fuera de esa función y por lo tanto dentro del constructor.

```javascript
btn.addEventListener("click", () => {
  this.addName();
});
```

- () indican que la función debe ser ejecutada de manera inmediata, así dentro de la clase cuando nos queremos referir a un método utilizamos this.nombreMetodo
  sin los "()" así sin () lo que hacemos es pasarle la referencia de esa función(la dirección de esa función).

```javascript

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

## Objects properties methods

Definir un objeto:

```javascript
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
    console.log("hi" + this.name);

    /* aquí no debemos usar ArrowsFunction xq
          mantiene el scoope del elemento q llama
          a la función y en este caso es el object
          person el cual pertenece al scoope global
          así q no "busca dentro del objeto"*/
  },
};
```

## Arrays y sus métodos

```javascript
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

### Métodos

#### map()

- Convierte cada elemento del array, conservando el array original y devolviendo otro con los cambios efectuados. Por ejempo añadir a cada item un texto

```javascript
const miArray = ["david", "martin", 36];

//1 línea
let newArray = miArray.map((item, x) => `ìtem ${x}: ${item}`);
//
let newArray2 = miArray.map((item, x) => {
  return `ìtem ${x}: ${item}`;
});

console.log(newArray); //
output: ["ìtem 0: david", "ìtem 1: martin", "ìtem 2: 36"];
```

#### slice()

- para copiar arrays su contenido no la referencia así q los arryas serán independientes

```javascript
let shallowCopy = fruits.slice(); // this is how to make a copy
```

#### splice()

- Eliminar items

```javascript
let vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"];
console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1;
let n = 2;

let removedItems = vegetables.splice(pos, n);
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.
```

#### filter()

- Nos permite generar un nuevo array siguiendo los criterios del filtro.

```javascript
const updatedroducts = products.filter((element) => element.id !== id);
```

del array de productos filtramos aquellos que no tengan un id concreto, útil para el método deete by ID

#### foreach()

- looping arrays

```javascript
fruits.forEach(function (item, index, miArray) {
  console.log(item, index);
});
```

#### push pop shift unshift

-

```javascript
let fruits = ["Apple", "Banana"];

let newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]

let last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"]

let first = fruits.shift(); // remove Apple from the front
// ["Banana"]

let newLength = fruits.unshift("Strawberry"); // add to the front
// ["Strawberry", "Banana"]
```

#### find and findIndex

- Nos permite obtener el valor/indice del primer elemento del array que cumple con la condición especificada
  obteniendo el índice:

```javascript
const array1 = [5, 12, 8, 130, 44];

let x = array1.findIndex((element) => element > 5);
console.log(array1[x]); // 12
console.log(x); // 1
```

    o obtener el valor

```javascript
const array1 = [5, 12, 8, 130, 44];

let x = array1.find((element) => element > 5);
console.log(x); // 12
```

    si no encuentra el valor devuelve un `undefined` el índice devuelve un `-1`

## new Operators

### spread

- Permite sacar el contenido(propiedades/métodos/items) de un objeto/array y crear otro objeto/array según rodeemos el spread operator.
  Atención no hace un deep copy, es decir si copiamos un array/objeto que contiene otro valor por referencia no crea un nuevo objeto si no q copia la referencia (los métodos no son referencias, se mantiene independientes).

```javascript

  const array1 = ["david", "martin", [36]];
  const arrayCopy = [...array1]; // lo rodeo de "[]" por lo q crea un array
  array1.push("vertgues");

  array1[0] = "david2";
  array1[2][0] = 40;

  console.log(array1);     //  [ 'david2', 'martin', [ 40 ], 'vertgues' ]
  console.log(arrayCopy); // [ 'david', 'martin', [ 40 ] ]

  no añade el último elemento pero sí modifica el array anidado xq copió la referencia, NO hizo uno nuevo
```

    Puedo envolverlo con {} para crear un objeto

```javascript
  const arrayCopy2 = { ...array1 };
  console.log(arrayCopy2); //
    {
    '0': 'david2',
    '1': 'martin',
    '2': [ 40 ],
    '3': 'vertgues'
    }
```

### rest

- Tiene el efecto opuesto a spread, lo que hace es mergear / combinar los argumentos que le pasamos a una función en un array. También son 3 puntitos XD

```javascript
const toArray = (...args) => args;
console.log(toArray(1, 2, 3, 5)); //[ 1, 2, 3, 5 ]
```

## Destructuring

Nos permite obtener los datos de un objeto / array de una manera sencilla. Se puede aplicar tanto a un objeto como a un array.

Le paso un objeto y de ese objeto extraigo la propiedad name y age. Para que funcione tenemos que dar a las variables los mismos nombres que las propiedades del objeto

```javascript
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

```javascript
const person4 = {
  name4: "David",
  age4: 36,
  hobbies4: ["nadar", "correr"],
  greet4() {
    console.log("hello david");
  },
};

const { name4, age4 } = person4;

console.log(name4, age4);
```

si queremos dar un nombre diferente de las propiedades a las variables usamos la notación `:`

```javascript
const { name4: name, age4 } = person4;
```

Podemos hacer destructuring de arrays y crear variables separadas, en este caso el destruturing se usa "[]" pero NO crea un array

```javascript
const array4 = ["fruta", "leche"];

let [item1, item2] = array4;

console.log(item1, item2); //fruta leche
//---------------------------------
let miArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function miF([x, y, Z, J]) {
  console.log(x); // [1, 2, 3]
  console.log(y); // [4, 5, 6]
  console.log(Z); // [7, 8, 9]
  console.log(J); //undefined
}
miF(miArray);

//------ FUERA DE FUNCIONES

let [array1, array2, array3] = miArray;
console.log(array1);
console.log(array2);
console.log(array3);
```

## Async code & Promises

### Código síncrono vs asíncrono

Un código síncrono es aquel que se ejecuta línea a línea, es decir un código síncrono es aquel código donde cada instrucción espera a la anterior para ejecutarse.

Un código asíncrono no espera a las instrucciones diferidas y continúa con su ejecución. Por lo general la asincronía permite tener una mejor respuesta en las aplicaciones y reduce el tiempo de espera del cliente.

```javascript
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

```javascript
//asíncrono
setTimeout(() => {
  console.log("time done!");
}, 2000);

//síncrono
console.log("2");
console.log("1");
```

### Promises

Son un objeto de JS que nos permite ejecutar código dependiendo del resultado de otra función. Por ejemplo la concexión a un API para obtener datos si la conexión es exitosa y obtenemos los datos cn la promesa ejecutamos un código y si el servidor devuelve un error ejecutamos otro código distinto.
Las promesas se crean usando un constructor llamado Promise y pasándole una función que recibe dos parámetros, resolve y reject, que nos permiten indicarle a esta que se resolvió o se rechazó.

```javascript
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
```

---

# T-1 NodeJs Basics

## Definición de Node 

Es un entorno de ejecución para javascript fuera del navegador. Esto permite tener servidores escritos en JS y por lo tanto que funcionen de manera asíncrona. 

### Bases de Node

- Concurrencia 
  
Es un lengaje monohilo pero todas las entradas y salidas son asíncronas, esto se consigue gracias al event loop. Es un único proceso pero que funciona de manera asíncrona. 
Esto nos permitirá tener muchas conexiones por ejemplo acceso y lectura de archivos, a bbdd, ...

- Corre sobre el motor V8

Entorno de ejecución de JS creado por Google y escrito en C++. Este convierte el código JS a código máquina en lugar de interpretarlo. 

Al compilarlo nos permite primero darnos cuenta de errores de sintaxi (mayor robustez) y al estar escrito en C++ hace que sea muy rápido. 

- Funciona a base de módulos 

Todo lo que no es sintaxi de programación son módulos (trozos de código que podemos reutilizar). Muchos módulos vienen por defecto al instalar nodeJS. Aunque tb podemos crear 
nuestros propios módulos.

- Está orientado a eventos 

Hay un event loop que está funcionando continuamente y está esperando a que se disparen esos eventos para procesarlos. Que esté orientado a eventos nos permite programar de una manera reactiva, es decir, cuando sucede algo(se crea un nuevo archivo) que se ejecute una parte del código en concreto. 

### Event loop - asincronía 


El event loop es un proceso con un bucle que se ejecuta constantemente y gestiona de manera asíncrona todos los eventos de nuestra aplicación. Esto significa que cuando llega una petición entra en el bucle se gestiona pero permite la entrada de otros eventos, haciendo a node muy concurrente. 

#### CÓMO FUNCIONA 

1. Todo el código de nuestra app genera un evento (una función, request, click event,...) 
2. esos eventos se encolan en la **event queue**
3. desde el event queue los pasa al **event loop** y los gestiona, si son instrucciones rápidas las resuelve si son costosas lo pasa al **thread pool**
4. en el thread pool tenemos todas las operaciones lentas como leer archivos, conexión a bbdd,...
5. el thread pool para cada una de estas operaciones levanta un nuevo hilo para procesarla cuando termina, genera un nuevo evento q es capturado por el event loop 

![not found](img/1.png)

Para escribir código de este modo tenemos que utilizar callbacks, promesas y async await. Según el caso utilizaremos una estrategia u otra. 

#### Problemas del monohilo 

El event loop genera una serie de problemas a nivel de seguridad, de gestión de errores,...

Cuando creamos un programa en node, porej un hola mundo, se abre un proceso se compila a código máquina se ejecuta y se termina/cierra el hilo. Tenemos la opción de mantener el event loop siempre a la escucha por ejemplo con un setInterval. 

Aquí podremos ver lo malo de q sea monohilo pq si generamos un error en el código y no está bien gestionado detendrá toda la ejecución del programa

```javascript
 let i = 0;

setInterval(() => {
  console.log(i);
  i++;

  if (i === 5) {
    i += z; // z is not define
  }
}, 1000);
 
```

## Configurar variables de entorno en nodeJS 

Cuando tenemos variables que dependerán de un valor externo como por ejempli un token para una API, o passwords, nombres de usuarios,... son casos en los q no deben estar en el código por lo que tenemos que meter estos datos desde fuera del programa. Para ello existen las variables de entorno.

PAra poder acceder a variables de entorno usamos `process.env.VARIABLE`

```javascript
nombre = process.env.NOMBRE || "si nombre";

console.log(`hola ${nombre}`);

```

## Herramientas para nodeJS 

### Nodemon 

```
npm install -g nodemon 
```
Nos permitirá ejecutar la aplicación y si cambiamos algo en el código se vuelve a relanzar automáticamente. Mejor usar en desarrollo. 

```
nodemon myapp.js 
```

### pm2 

Parecida a nodemon pero mucho más potente. Usar solo en **producción** pq nos da:

- gestión de logs 
- monitoring 
- container integration 
- behavior config 
- startup scripts

```
npm install -g pm2
```

## Manejar asincronía en nodeJS 

### Callbacks 

Node por defecto es asíncrono por lo que si ejecutamos el siguiente código: 

```javascript
function hola(nombre, cb) {
  setTimeout(() => {
    console.log("hola " + nombre);
    cb(nombre);
  }, 1500);
}

function adios(nombre, cb) {
  setTimeout(() => {
    console.log("adios " + nombre);
    cb();
  }, 1000);
}

console.log("iniciando proceso");
hola('david',()=>{})
adios('david',()=>{})

// iniciando proceso...
// adios david
// hola david


```
como es asinc, x lo tanto el programa no se detiene a completar las funciones y hola tarda más q adios tendríamos el resultado de adios antes q hola, pq hola tarda 1500 ms y adiós 1000ms. CUando tenemos funciones que no sabemos cuanto tardarán en ejecutarse como por ejemplo conexión a bbdd o escritura en ficheros tenemos que controlar bien cuando se ejecutan. Para controlar esta asincronía del lenguaje surgen los callbacks.

Un callback es cuando pasamos una función como argumento de otra función, la clave aquí es q la función externa "decide" cuando se ejecuta la función pasada (callback).

Con el callback controlamos cúando se ejecutan las funciones, hasta que una función no termina no se ejecuta la siguiente.

```javascript
console.log("iniciando proceso");

hola("David", (nombre) => {
  adios(nombre, () => {
    console.log("terminando proceso...");
  });
});

 
```

#### Callback hells 

Gestionar así las llamadas puede generar el llamado callback hell q es cuando encadenamos multiples llamadas dependiendo unas de otras. 

```javascript
 console.log("iniciando proceso");
hola("David", (nombre) => {
  hablar(() => {
    hablar(() => {
      hablar(() => {
        adios(nombre, () => {
          console.log("terminando proceso...");
        });
      });
    });
  });
}); 
```
una manera de evitar esto es utilizar funciones recursivas.  El código quedaría así 

```javascript

// añadimos una nueva función conversación 
 function conversacion(nombre, iteraciones, cb) {
  if (iteraciones > 0) {
    hablar(() => {
      conversacion(nombre, --iteraciones, cb);
    });
  } else {
    adios(nombre, cb);
  }
}

//--

hola("david", (nombre) => {
  conversacion(nombre, 3, () => {
    console.log("proceso terminado");
  });
}); 
```

### Promesas 

Todas las peticiones asíncronas devuelven una promesa!

Para evitar el callbackHell se crea las promises. La clave de las promesas es que tienen un estado, pueden estar **resuletas**, **pendientos** o **fallar** y pueden ser anidadas.

Cuando creamos una función como una promesa debemos devolver uno **promise**, 

```javascript
 function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hola " + nombre);
      resolve(nombre);
    }, 1500);
  });
}

console.log("iniciando el proceso....");
hola("david").then((nombre) => {
  console.log(`${nombre} -> terminado el proceso`);
});

/* 
iniciando el proceso....
hola david
david -> terminado el proceso
*/
 
```

podemos anidar promesas y pasar el resultado de una al siguiente `then`:

```javascript
 hola("david")
  .then((nombre) => {
    return adios(nombre);
  })
  .then((nombre) => {
    console.log(`${nombre} -> terminado el proceso`);
  });
 /*
 hola david
adios david
david -> terminado el proceso
 */
```
pero lo podemos hacer más sencillo, podemos pasarle directamente la función al `then`

```javascript
hola("david")
  .then(adios)
  .then((nombre) => {
    console.log(`${nombre} -> terminado el proceso`);
  }); 
```
podemos anidar varias promesas y modificando la función hablar.

```javascript
function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("bla bla bla");
      resolve(nombre);
    }, 1000);
  });
}


hola("david")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log(`${nombre} -> terminado el proceso`);
  });
 
```

Todo esto está muy bien pero si en alguna de las promesas se genera un error hay q tratarlo para que no detenga el proceso. Para ello al final de la cadena de promesas pondremos un **catch**

```javascript
function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("adios " + nombre);
      //resolve(nombre);
      reject("se ha generado un error en una promesa");
    }, 1000);
  });
}

 hola("david")
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log(`${nombre} -> terminado el proceso`);
  })
  .catch((err) => {
    console.error("error has ocurred");
    console.error(err);
  });
 
```

### Async/await 

Es una nueva sintaxi para controlar la asincronía, asegurarnos que ciertas funciones se ejecuten secuencialmente pq el resultado de una será el input de la otra. 

Con esta sintaxi podemos definir explicitamente una función como asíncrona y poder esperar a q esa función termine. Como es asíncrona no bloquea el hilo principal, ya que puede seguir escuchando nuevas peticiones. Dentro de esta función asíncrona podremos usar la palabra reservada `await` para gestionar funciones q devuelven promesas y hasta q esa promesa no se resuleve no sigue la ejecución del código.

```javascript

async function leerResponse(){

  let response = await fetch('https://api.github.com/users/codigofacilito')
  let json = await response.json()
  console.log(json)
}

leerResponse();
```
Usamos dos awaits pq cada una de las llamadaas son funciones q devuelven una promesa (son peticiones asíncronas)

En realidad async/await por detrás trabaja por promesas. Si queremos gestionar errores en las llamadas con async/await tenemos q incluir los await en bloques try/catch

```javascript
async function leerResponse() {

    try {

        let response = await fetch("https://api.github.com/users/codigofacilito");
        let json = await response.json()
        console.log(json)

    } catch (err) {
        console.log('errorrrrrrrrrrrrrrr');
        console.log(err);
    }
}
leerResponse();

```


primero debemos declarar una función como asíncrona 

```javascript
async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("adios " + nombre);
      resolve(nombre);
    }, 1000);
  });
} 
```
para ejecutar esta función con el await debe estar dentro de otra función asíncrona

```javascript
async function main() {
  let nombre = await hola("david");
  await hablar();
  await hablar();
  await adios(nombre);
}

main(); 
```

Otro ejemplo de async/await 



## Modulos del Core de nodeJS 

### Globals 

Son los módulos que ya vienen instalados en el core de node. Todos los módulos globales se encuentran en la variable `global`. Global es un alias de `this`

```javascript
console.log(global) 
```
Por ejemplo setInterval se encuentra dentro de este objeto global y por lo tanto podemos acceder directamente 

```javascript
setInterval(() => {
      console.log("hola");
      
    }, 1000); 
```

Todas las funciones globales tienen una función q detiene su ejecución `clear` 

```javascript
let i = 1;

let intervalo = setInterval(() => {

  if (i == 3) {
    clearInterval(intervalo);
  }
  console.log("hola");
  i++;
}, 1000);
```
hay otra función q se llaman `inmediate` que lo q hacen es indicar que esa función se ejecute lo primero en nuestro código. 

```javascript
setImmediate(() => {
  console.log("helo");
});

```
se incluye dentro de global:

- process => `console.log(process)` toda la info del proceso no solo las variables de entorno.
- `__dirname` => en qué directorio se encuentra el archivo dnd se ejecuta la variable 
- `__filename` => nos da la ruta absoluta dnd se encuentra el archivo (/../../tu_archivo.js) 

No es recomendable pero podemos crear variables globales 

```javascript
global.miVariable = 'tu variable' 
```
### File System - fs 

Nos permite acceder a archivos de nuestro sistema. Como este módulo viene en el core de node no necesitamos instalar nada, lo importamos con requiere. 

```javascript
const fs = require('fs') 
```

Los métodos de este módulo son todos ellos asíncronos. 


#### readFile

```javascript
const fs = require("fs");

// leer archivos
function leer(path, cb) {
  fs.readFile(path, (err, data) => {
    cb(data);
  });
}
//  Buffer 68 6f 6c 61 2c 20 63 c3 b3 6d 6f 20 65 73 74 61 73 3f 0a 74 65 6e 67 6f 20 76 61 72 69 61 73 20 6c c3 ad 6e 65 61 73>
```
así directamente la función readFile nos devuelve un buffer. Para poderlo leer debemos convertirlo a string. 

```javascript
const fs = require("fs");

// leer archivos
function leer(path, cb) {
  fs.readFile(path, (err, data) => {
    cb(data.toString());
  });
}
leer(__dirname + "/test.txt", (data) => console.log(data));
leer(__dirname + "/test.txt", console.log); // para simplificar la sintaxi
 
```
#### writeFile

```javascript
function escribir(path, data, cb) {
  fs.writeFile(path, data, (err) => {
    if (err) {
      console.log("file not created " + err);
    } else {
      console.log("file created");
    }
  });
}

escribir(__dirname + "/test2.txt", "soy un archivo nuevo", console.log); 
```

#### unlink

```javascript
 function borrar(path, cb) {
  fs.unlink(path, cb);
}

borrar(__dirname + "/test2.txt", console.log); 
```

### Console 

Tenemos varios métodos según lo que queramos pintar en plantalla. Tenemos 

```javascript
console.log('algo')
console.info('some info')
console.error('errors')
console.warn('warnings')
console.debug('warnings')
```
podemos mostrar datos en forma de tabla. 

```javascript
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

/*
┌─────────┬──────────┬───────────┐
│ (index) │  nombre  │ apellido  │
├─────────┼──────────┼───────────┤
│    0    │ 'david'  │ 'martin'  │
│    1    │ 'david2' │ 'martin2' │
└─────────┴──────────┴───────────┘
*/
```
tenemos tb el `group` que nos pinta por pantalla mensajes identados

```javascript

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

/*
funcion 1
  cosas d ela func 1
  funcion 2
    cosas d ela func 2
  seguimos con funcion 1
*/
```

### HTTP 

Este módulo nos permite crear un servidor o conectarnos con servidores externos. 

```javascript
 const http = require("http");

const router = (req, res) => {
  console.log("nueva peticion");

  switch (req.url) {
    case "/hola":
      res.writeHead(201, { "content-type": "text/plain; charset=utf-8" });
      res.write("hello from node! ");
      res.end();
    default:
      res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      res.write("no sé qué quieres");
      res.end();
  }
};

const port = 3000,

server = http.createServer(router).listen(port);
console.log(`escuchando en el ${port}`);
```

### OS  

Permite acceder a toda la información que nos aporta el sistema operativo desde qué sistema de archivos usamos, cuanta RAM tenemos, lo núcleos, etc... todo esto con el módulo OS 

```javascript
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
```
### Process 

Cómo podemos acceder a nuestro proceso usando el módulo `os`

```javascript
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
```

### Try/Catch

Un error en nodeJs detiene nuestro hilo principal así que para evitar eso capturaremos el error con un try/catch. 

```javascript
function seRompre() {
  return 3 + z;
}

try {
  seRompre();
} catch (error) {
  console.error(error.message);
}

console.log("mi programa continua"); 
```

Cuando se produce un error, éstos se propagan hacia arriba a las siguientes funciones hasta ver si ese error es capturado por eso cuando hacemos lo siguiente podemos capturar el error:

```javascript

function seRompre() {
  return 3 + z;
}
  
function otraFuncion() {
  seRompre();
}

try {
  otraFuncion();// no rompe directamente esta función pero aún así captura el error
} catch (error) {
  console.error(error.message);
}

console.log("mi programa continua");
  
```

La cosa es muy diferente cuando tratamos funciones asíncronas, hay q recordar q las funciones asíncronas no se gestionan en el hilo del event loop si no q se pasan al thread pool, por eso no se captura el error

```javascript
function seRompreAsincrona() {
  setTimeout(() => {
    return 3 + z;
  }, 1000);
}

try {
  seRompreAsincrona();
} catch (error) {
  console.error(error.message);
}

console.log("mi programa continua");
 
```

En esas situaciones es mejor hacer el try/catch dentro de la función asíncrona.

```javascript

function seRompreAsincrona(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (err) {
      cb(err);
    }
  }, 1000);
}

try {
  seRompreAsincrona((err) => {
    console.error(err.message);
    console.log("un error!!!!!");
  });
} catch (error) {
  console.error(error.message);
}

console.log("mi programa continua");
```

## Procesos hijos

Node a parte de ejecutar sus propios procesos, puede ejecutar otros procesos en el sistema (correr procesos hijo). Con el módulo `child_process` podemos levantar otros procesos (ejecutar otros programas) como un script de python,... 

```python
import json

def myFunc():
    print(json.dumps({'name':'David'}))

myFunc()

# json.dumps() function converts a Python object into a json string.

```


```javascript
const { exec } = require("child_process"); // ecmascript 6 sintaxy
//const exec = require("child_process").exec; 

exec(
  "python3 /home/david/programming/NodeJS/code/T1-NODE_BASICS/1.8-proceso-hijo/myScript.py",
  (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      return false;
    }

    let data = JSON.parse(stdout);
    
    console.log(data);
    
    console.log(data.name);
  }
);

/*
{ name: 'David' }
David
*/

```
Si a parte de ejecutar el proceso queremos tener un poco más de control sobre él usaremos spawn, podemos pasarle argumentos.

```python
import json,sys

def myFunc(name):
    print(json.dumps({'name':name}))

myFunc(sys.argv[1]) 
```

```javascript
const { exec, spawn } = require("child_process");

const pyProg = spawn("python", ["myScript.py", "david"]); // le paso variables al script


console.log(pyProg.pid); //podemos ver el id del proceso
console.log(pyProg.connected); //

//podemos escuchar el stdout cuando se dé el evento de 'data' y visualizarla
pyProg.stdout.on("data", function (data) {
  console.log(JSON.parse(data));
});
```
Hay que tener en cuenta que **spawn** devuelve los datos como un buffer así q normalmente deberemos utilizar `data.toString()`



1. proceso hijo creado por spawn()
   - no genera un shell para ejecutar el comando
   - crea un **stream** de los datos devueltos por el proceso secundario (el flujo de datos es constante)
   - no tiene límite de tamaño de transferencia de datos


2. proceso hijo creado por exec()
   - genera un shell en el que se ejecuta el comando pasado
   - almacena en búfer los datos (espera hasta que el proceso se cierra y transfiere los datos en un **chunk**)
   - la transferencia máxima de datos hasta Node.js v.12.x fue de 200 kb (de forma predeterminada), pero desde Node.js v.12x se incrementó a 1 MB (de forma predeterminada)

### Ejecutar/compilar modulos de C++ 

Para poder compilar módulos nativos escritos en C++ instalamos node-gyp.

1. Instala `node-gyp`. Hay que hacerlo de forma global. Para eso, ejecuta:

    ```npm i -g node-gyp```

    _Dependiendo del sistema de archivos, y los permisos, puede que tengas que usar sudo en linux y mac, o ejecutar como administrador en windows_

2. Crea tu archivo fuente. Un ejemplo lo puedes encontrar en [la documentación de node](https://nodejs.org/api/addons.html#addons_hello_world)
3. Crea un `binding.gyp` en la raiz del módulo.
4. En la carpeta raiz del módulo, ejecuta:

    ```node-gyp configure```

5. Se habrá generado un directorio build.
6. En la carpeta raiz del módulo, ejecuta:

    ```node-gyp build```

7. El módulo se compilará. y podrás importarlo en javascript. Puedes revisar que exista el archivo `build/Release/addon.node` _(es un binario, así que no podrás abrirlo)_
8. Para usarlo, crea un archivo js. Para importarlo:

    ```const addon = require('./build/Release/addon');```

    y para usarlo:

    ```addon.hola()```

    debería imprimir `mundo`


## NPM 

## Creando nuestro propio módulo  

[Usando el sistema de módulos de NodeJS](#usando-el-sistema-de-módulos-de-nodejs)  
[Entendiendo NPM node package manager scripts](#entendiendo-npm-node-package-manager-scripts)  
[Instalando paquetes de terceros](#instalando-paquetes-de-terceros)  
[Paquetes útiles](#paquetes-útiles)  


Con ES6 hay una nueva sintaxi para los módulos pero para poderla utilizar los archivos deben tener extensión `.mjs`. 


```javascript

//  esto es el archivo del módulo.mjs


function greet(name) {
  console.log(`hola señor ${name}`);
}

export default {
  greet,
  prop1: "esto es una propiedad",
};

/*

export defualt greet

*/

```

```javascript
// en el index_es6.mjs 


import modulo_es6 from "./modulo/modulo-es6.mjs";

console.log(modulo_es6);
modulo_es6.greet("david");
/*

{ greet: [Function: greet], prop1: 'esto es una propiedad' }
hola señor david


*/
```
## Datos almacenados vs en memoria

Hay datos que se manejan al vuelo (en RAM) y esto da una alta velocidad en el momento de acceder a estos datos. Sin embargo cuando grabamos en disco es un proceso muy lento. 

Por ejemplo si queremos editar una imagen muy pesada en lugar de estar escribiendo en disco y leyendo y repetir el proceso, lo que lo haría muy lento se utiliza la memoria RAM para ir realizando las distintas acciones y cuando hayamos terminado se escribe finalmente en disco. Para escribir esos datos en RAM y pasar la info entre las distintas funciones utilizamos los buffers y streams.

### Buffers 

Los buffers no son más que datos crudos, en binario, que van de un punto A -> B. Por ejemplo con el módulo `fs` cuando leemos un fichero esos datos están en forma de buffer.

Para crear un buffer 

```javascript
let buffer = Buffer.alloc(4); // guardamos un byte en memoria

console.log(buffer);
//genera un buffer vacio pero con 4 espacios de memoria
// <Buffer 00 00 00 00> 

```

Si queremos pasarle datos no usaremos `.alloc()`, que solo reserva un espacio en memoria, si no usaremos `.from()`.

```javascript
buffer = Buffer.from([1, 2, 3, 4, 5, 6])
console.log(buffer);
//<Buffer 01 02 03 04 05 06>
```
También podemos guardamos texto.

```javascript
buffer = Buffer.from('Hola mundo!')
console.log(buffer);
//<Buffer 48 6f 6c 61 20 6d 75 6e 64 6f 21>
console.log(buffer.toString());
//Hola mundo!

```

Trabajar con buffers nos permite trabajar cn los datos a nivel más bajo(binario) así q aquí no intervienen los tipos por eso es importante saber que quien envía los datos y los recibe debe saber qué tipo de dato contiene el buffer para poderlos decodificar.

También nos permite trabajar con el buffer posición a posición, por paquetes de bytes, así podemos cambiar parte de la información. 

```javascript
let abcedario = Buffer.alloc(26);

abcedario.forEach((element, index) => {

    abcedario[index] = index + 97;
})

console.log(abcedario.toString());//abcdefghijklmnopqrstuvwxyz
```

Un buffer no suele venir solo si no que suele venir de un stream.


### Streams

Son el paso de datos entre un punto A -> B. Tenemos 3 tipos de streams:

1. de lectura, se lee info del punto A y se la pasa a punto B
2. de escritura, tienes un stream de destino y le vas metiendo datos
3. stream bidireccional, son streams tanto de lectura como escritura.

En el paquete `fs` tenemos la opción de crear un stream de lectura para leer archivos muy grandes, este stream nos permite leer el archivo a trozos (chunks).

#### Stream de lectura

```javascript

const fs = require('fs')


let data = "";


let readableStream = fs.createReadStream(__dirname + '/input.txt')

readableStream.on('data', chunk => {
    console.log(chunk);
})
//<Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 2c 20 61 6d 65 74 20 63 6f 6e 73 65 63 74 65 74 75 72 20 61 64 69 70 69 73 69 63 69 6e ... 4592 more bytes>
```
Por el stream nos viene un buffer, pero como sabemos que ese buffer contiene texto podemos establecer la condificación del stream en UTF-8 para q entienda los caracteres.

```javascript

const fs = require('fs')

let data = "";

let readableStream = fs.createReadStream(__dirname + '/input.txt')


// para poder leer texto con tildes, ñ , etc
readableStream.setEncoding('UTF-8') 

// escuchamnos el evento data  del stream, a medida q van llegando datos los vamos capturando
readableStream.on('data', chunk => {

    data += chunk
    console.log(chunk);
})

// evento end cuando termina el stream nos devuelve la data completa.
readableStream.on('end', () => {

    console.log(data);

})

```

#### Los streams de escritura

```javascript

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

    console.log(data);

})

// stream de salida 

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
```

## Trucos node
### Rendimiento de una app de node 

Para averiguar qué parte d enuestro código está relentizando nuestra app podemos utilizar `console.time('nombre')` y `console.timeEnd('nombre')` Si encerramos nuestro código entre estas dos líneas podremos saber cuanto tarde en ejecutarse 

```javascript

let suma = 0

console.time('bucle')

for (let index = 0; index < 100000000; index++) {
    suma++;

}

console.timeEnd('bucle')
```

### Debugging 

para ejecutar una app de node en debugging mode y poderlo debuggear en chrome hacemos:.

```
node --inspect debugger.js

```
y en chrome entramos en la url `chrome://inspect`, ahí veremos el archivo q estamos debugeando, si clicamos en inspect nos abrirá una consola y en sources debemos cargar nuestra carpeta dnd tenemos la app de node.

### Error first callbacks

Es una convención de q todos los módulos q tiren de callbacks el primer argumento que recibe la función es el error. 

Así es como generaríamos una función con callbacks y como primer parámetro venga el error

```javascript

function asincrona(cb) {
    setTimeout(() => {

        try {
            let a = 3 + z
            cb(null, a)
        } catch (e) {
            cb(e, null)
        }

    }, 1000);
}

asincrona((err, dato) => {
    if (err) {
        console.log('tenemos error');
        console.log(err);
        return false
    }

    console.log('todo bien ', dato);
})
```

RECORDEMOS QUE NO PODEMOS ARROJAR EL ERROR CON UN `thorw` teniendo funciones asíncronas por eso para gestionar errores en callbacks usamos la primera aproximación. No funciona xq el try/catch no puede recoger el error arrojado por el callback pq éste se ejecuta en otro hilo

```javascript
function asincrona(cb) {
    setTimeout(() => {

        try {
            let a = 3 + z
            cb(null, a)
        } catch (e) {
            cb(e, null)
        }

    }, 1000);
}

try {

    asincrona((err, dato) => {
        if (err) {

            throw err; // ESTO NO FUNCIONA
        }

        console.log('todo bien ', dato);
    })


} catch (e) {
    console.err('hay un error');
    console.err(e);
}


```

## Automatización de procesos con node 

Hay distintas herramientas de automatización de procesos como GULP, Grunt (sirven para todo front/back-end). También está webpack pero es más común en frontend.

Nosotros usaremos Gulp. 

Para ello necesitaremos instalar `gulp`. 

```
npm i gulp gulp-server-livereload
```

Para poder empezar con gulp tenemos q crear un archivo `gulpfile.js` en la raíz de la app (al lado de package.json).

```javascript
const gulp = require('gulp');
const server = require('gulp-server-livereload')

gulp.task('build', (cb) => {

    console.log('construyendo la app');

    setTimeout(cb, 1200);

})

gulp.task('serve', cb => {
    gulp.src('www')
        .pipe(server({
            livereload: false,
            open: true,
        }));
})

gulp.task('default', gulp.series('build', 'serve'))

```
y en el package.json añadimos los cripts correspondientes

La última task es default así q solo haciendo `gulp`se activa. Para correr estos scripts hay q hacerlo como siempre `npm run start`.


```javascript
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "gulp build",
    "serve": "gulp serve",
    "start": "gulp"
  },

```

## Crear aplicaciones con NodeJS - Electron


## Instalar nodeJS

Se instalará node y npm

```bash
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```

La mejor manera de instalar nodeJS es usando `nvm` (node version manager), cuando instalemos node se instalará utomáticamente npm (node package manager)

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | zsh        

# si estoy usando bash

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

```

cierro la terminal y lo vuelvo a abrir

para listar las versiones disponibles 

```
nvm list-remote
```

para instalar la última version de node LTS

```
nvm install --lts
# si quiero una versión en concreto de la lista
nvm install 10.05.0
```
si queremos usar una versión diferente (premviamente debemos instalarla): 

```
nvm use 13.6.0
```

Para listar las versiones instaladas 
```
nvm ls
```


Para refrescar el archvo de configuración de zsh

```
source ~/.zshrc
```
podemos saber la versión de npm 

```
npm -v
```
si queremos actualizar npm a la última versión
```
sudo npm install -g npm@latest
```
otros comandos de nvm son 

```
// check version
node -v || node --version
```

```
// list installed versions of node (via nvm)
nvm ls
```

```
// install specific version of node
nvm install 6.9.2
```

```
// set default version of node
nvm alias default 6.9.2
```

```
// switch version of node
nvm use 6.9.1
```

cuando hago un source ~/.zshrc me sale este mensaje 
    
```
N/A: version "N/A -> N/A" is not yet installed.

You need to run "nvm install N/A" to install it before using it.
```

vemos como el default está a puntando a N/A

default -> lts/* (-> N/A)

```
~ ❯ source ~/.zshrc
    
N/A: version "N/A -> N/A" is not yet installed.

You need to run "nvm install N/A" to install it before using it.
    
~ ❯ nvm ls
    
    v12.22.12
    v14.19.1
    v16.14.2

default -> lts/* (-> N/A)
node -> stable (-> v16.14.2) (default)
stable -> 16.14 (-> v16.14.2) (default)
iojs -> N/A (default)
unstable -> N/A (default)
nvm_list_aliases:36: no matches found: /home/guibos/.nvm/alias/lts/*
    
~ ❯ nvm alias default v12.22.12
  default -> v12.22.12
    
~ ❯ nvm ls                     
        v12.22.12
        v14.19.1
        v16.14.2
default -> v12.22.12
node -> stable (-> v16.14.2) (default)
stable -> 16.14 (-> v16.14.2) (default)
iojs -> N/A (default)
unstable -> N/A (default)
nvm_list_aliases:36: no matches found: /home/guibos/.nvm/alias/lts/*
    
~ ❯ node -v
    zsh: command not found: node
    
~ ❯ source ~/.zshrc            
~ ❯ node -v
    v12.22.12
```

## Creando un servidor con NodeJS

Por defecto Node incluye una serie de módulos, los llamados core modules, algunos ejemplos son:

![not found](img/img-6.png)

Aunque estos módulos están incluidos alguno de ellos no están disponibles de manera global como es el caso del módulo http para ello debemos importarlo usando el keyword **require**

- require nos permitirá:
  - importar archivos locales, para ello hay que usar un path:
    - absoluto (empezamos x la raíz del sistema de archivos "/")
    - relativo (empezamos x donde se encuentra el archivo "./")
  - importar un **global module** para ello no especificamos ningún path, sólo el nombre del módulo.

## Creación del servidor

1. importamos el global module **http**

```javascript
const http = require("http");
```

2. usamos el método **createServer()**, como argumento necesita un **requestListener**, es una función tipo callback
   se ejecutará por cada conexión con el servidor (incoming request).
3. definir los argumentos de la función requestListener, estos argumentos son dos objetos:

- request => incoming message
- response => respuesta del servidor  
  La función puede ser creada como función a parte, anónima o usando arrow function.

```javascript
1. Función a parte

  function rqListener(req, res) {}
  http.createServer(rqListener);

2. anónima
  http.createServer(function (req, res) {});

3. arrow funciton
    http.createServer((req, res) => {console.log(req); });
```

4. el método http.createServer() nos devuelve un objeto del tipo servidor.

```javascript
const server = http.createServer((req, res) => {
  console.log(req);
});
```

5. cn el servidor definimos, mediante el método listen(), un puerto y un
   hostname,si corremos en local por defecto es "localhost" así q no haría
   falta ponerlo.

```javascript
server.listen(3000, "localhost");
```

### **request object**

Es un objeto bastante complejo con multitud de información, a destacar:

1. Headers
   - Es metadata, añadida al request y tb a response. Contiene el host
     ![not found](img/img-8.png)
2. url
3. method

#### **response object**

Con el objeto response podemos mandar datos de vuelta, para ello utilizamos diferentes métodos:

1.  **setHeader()**
    Definimos qué tipo de datos vamos a devolver
2.  **setWrite()**
    No es muy habitual pero nos permite escribir html
3.  **end()**
    Para indicar que finalizamos la respuesta. siempre tenemos que agregar end() para indicar q se finaliza

```javascript
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

#### Routing request

Vamos a gestionar las rutas de nuestro servidor, según el end-point el server nos dará una respuesta u otra.A lo cutre pero sería algo así:

```javascript
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

### Redirectign request & creating a file

```javascript
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

#### Obtener los datos del body de una request **Streams & Buffers**

Node gestiona todos los datos del mismo modo, usando streams y buffers, es una manera muy eficiente de gestionar los datos (leer/escribir datos de entrada en una salida secuencial), son usados para leer archivos, comunicaciones en red,...
Básicamente un stream lo que hace es partir los datos en fragmentos lo que hace que sean más manegables y que se puedan empezar a procesar a medida que vamos obteniendo estos fragmentos, en lugar de cargar todos los wdatos en memoria de una vez como se hacía antes.
Es como funcionan las plataformas de "streaming" como youTube, no cargan el vido completo para poder visualizarlo sino que trocean la información y la van mandando a trozos para que estos puedan ser procesados de inmediato y el video se reproduzca al momento, creando así un flujo continuo de datos. El papel del buffer es de contenedor, a medida que vamos obteniendo trozos de datos vamos llenando el buffer(éste tiene una memoria fija), así un buffer contiene fragmentos de datos antes de empezar a procesarlos, cuando este se llena los datos empiezan a ser procesados. En el flujo continuo de datos, los buffers serían como un stop para coger ese conjunto de trozos de datos y empezar a procesarlos.  
![not found](img/img-9.png)  
![not found](img/img-10.png)

Para leer los datos del request, en nuestro caso datos enviados por un formulario (POST), en node todo son eventos así que para capturar los datos tenemos que implementar un **event listener** que esté pendiente de un evento tipo data, este evento es disparado por el stream cuando hay un paquete de datos (chunk) disponible, cuando el buffer está lleno, entonces podemos empezar a procesar esa parte de los datos y el stream dispara un evento 'data' y genera un chunk_of_data que es un objeto Buffer, cada uno de estos chunk_of_data los vamos metiendo en un array de tal manera q al finalizar el proceso tendremos un array de buffers. Al finalizar el proceso se emite un evento end (ya no hay más datos disponibles). Capturamos ese evento y mediante el método concat() de la clase buffer generamos un nuevo buffer a partir del array de buffers (body) y como sabemos q la info es tipo string lo casteamos a string

    ```javascript
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

#### Streams, buffers, pipes and files

La manera tradicional de leer un archivo podía ser usando métodos síncronos o asíncronos.

```javascript
// Cargamos todos los datos en memoria y luego los leermos
const fs = require("fs");

const data = fs.readFileSync(__dirname + "/data.txt", "utf8");

console.log(`printing data\n ${data}`);
const data2 = fs.readFile(__dirname + "/data.txt", "utf8", (err, data) => {
  console.log(`printing data2\n ${data}`);
});
```

Usando streams sería así:

```javascript
// usando streams, dividimos los datos en chunks y lo leemos poco a poco.

//streams and buffers
const fs = require("fs");

// creando un stream de lectura
const readableStream = fs.createReadStream(__dirname + "/data2.txt", {
  encoding: "utf8",
});
// creando un stream de escritura
const writeableStream = fs.createWriteStream(__dirname + "/copy_of_data2.txt");

readableStream.on("data", (chunk_data_ready) => {
  console.log(`chunk recived`);
  writeableStream.write(chunk_data_ready);
});
```

Cuando trabajamos con streams se suele usar pipes (tuberias) que es una manera de enlazar streams.

```javascript
const body = [];
req.on("data", (chunk_of_data) => {
  body.push(chunk_of_data);
});
req.on("end", () => {
  const parsedBody = Buffer.concat(body).toString();
  const message = parsedBody.split("=")[1];
  fs.writeFile("message.txt", message, (err) => {
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  });
});
```

### Lifecycle de un programa NodeJS

En el caso de nuestro servidor(app.js), los pasos son los siguientes:

1.  Ejecutamos el archivo => node app.js

2.  El motor de node lee el archivo

3.  Parsea el código, registra las variables y funciones

4.  Entonces sucede que nuestro archivo se mantiene en ejecución gracias al **event loop**
    - Event loop es un proceso gestionado por nodeJS que gestiona los callbacks.
    - Hay que recordar que NodeJS corre en un único hilo (single threat) no se pueden ejectar varios procesos al mismo tiempo(aunque se puede modificar hasta 4 threats)
    - Event loop está formado por varias partes:
      - Tenemos un event queue, donde se almacenan los procesos a reaizar
      - cada evento es recogido x el event loop y llevado al thread pool donde es asignado a un hilo
      - En el thread pool hay un max de 4 hilos cuando están ocupados, la event queue se va llenado
      - a medida que van terminando los procesos los hilos se desocupan y event loop va cogiendo nuevos procesos de la cola
      - en nuestro caso (servidor) el event loop se queda continuamente a la escucha de nuevos request.
      - ![not found](img/img-7.png)
        **Siendo NodeJS un proceso monohilo como conseguimos el efecto multihilo, para ello nos servimos de las callbacks y del sistema operativo que nos provee de prcesos multihilo, entonces NodeJS recoge la tarea del event queue. pej leer fichero, y solicita al SO que realice esa función y mediante una callback nos avise cuando la haya completado, mientras nuestro hilo sigue su curso y se encuentra otra tarea, conexion cn bbdd, vuelve a solicitar al SO que haga la conexión, y así, si tuvieramos un proceso que requiere mucho poder de computación o el SO no provee ninguna interfaz asíncrona para ese proceso ya no se utiliza al SO si no que tiramos el threadPoll**  
        source: [_link del video_](https://www.youtube.com/watch?v=lGiv0zfdiJA)

#### The Event loop deeper

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

## Usando el sistema de módulos de NodeJS

En nodeJS es muy común separar nuestro código en diferentes archivos y luego exportarlos para poderlos usar desde otros archvos y así tener nuestro código más ordenado.  

Podemos crear un nuevo archivo llamado **routes.js** que contendrá los pasos a seguir según la url que le solicitemos al servidor, esto es la función anónima que le pasamos como argumento a **http.createServer()**. Así podemos dejar un archivo con la creación del servidor y un archivo routes dnd encontraremos las urls de éste.
Nuestro punto de partida será el servidor (app.js) y este requerirá el código del archivo routes, para ello desde el archio routes asignamos nuestra función **(req,res)=>{}** a una constamte llamada **requestHandler** para luego poderla exportar.

```javascript
// archivo dnd está escrito es routes

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

   ```javascript
   module.exports = requestHandler;

   // en app.js podríamos utilizar la constante directamente:
   const routes = require("./routes");
   const server = http.createServer(routes);
   ```

1. exportar como un objeto

   ```javascript
     module.exports = {
       handler: requestHandler,
       text : 'Hello world"
     }
     // en app.js tenemos q acceder a la propiedad de ese objeto:
       const routes = require("./routes");
       const server = http.createServer(routes.handler);

   ```

1. crear propiedades dentro de exports

   ```javascript
   module.exports.handler = requestHandler;
   module.exports.text = "hello world";

   // en app.js tenemos q acceder a la propiedad de ese objeto:
   const routes = require("./routes");
   const server = http.createServer(routes.handler);
   ```

Una vez hecho esto desde nuestro archivo app.js podemos importar los datos contenido en esa propiedad **exports** mediante un **require** y almacenar los datos en una constante. Como estamos importando un módulo que no es global necesitamos especificar el path por ello:

```javascript
const routes = require("./routes");
```

# T2 work flow y debugging

## Entendiendo NPM node package manager scripts

Es un gestor de paquetes para NodeJS que se instala automáticamente cuando instalamos NodeJS. Este nos permitirá instalar paquetes de terceros no incluidos en el core de NodeJS.
Podemos usar npm para empezar un nuevo proyecto de NodeJS. En el directorio del proyecto tecleamos en la terminal:

```
npm init
```

Esto nos guiará por un asistente para que completemos información sobre nuestro proyecto. Esto generará un archivo **package.json** (archivo de configuración de nuestro proyecto).

```javascript
  {
    "name": "2.1-node_server",
    "version": "1.0.0",
    "description": "",
    "main": "app.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "David Martin",
    "license": "ISC"
  }
```

Gracias a este archivo de configuración nos podemos llevar nuestro proyecto a otro pc y para instalarlo (dependencias) podemos hacer

```
npm install
```

Y tendremos nuestro proyecto listo

En este archivo hay una sección de scripts, en la cual podemos definir scripts propios.

1. start  
   Este es el nombre de un script predefinido así que se ejecuta directamente **npm start** Nos permite ejecutar un comando para inicializar nuestro proyecto. Esto se utiliza cuando alguien externo quiere ejecutar nuestro proyecto y no sabe el punto de partida se suele poner "npm start" para que se ejecute. Lo podemos correr directamente en la consola pq el script con nombre `start` está soportado por node, si nos inventamos un nombre pej `callbacks` lo corremos así `npm run callbacks` o podemos construir un script como `start:callbacks` pues corremos como `npm run start:callbcks`

Puede que al ejecutar **npm start** si no tenemos instalado nodemon de antemano nos de error, así que mejor instalar nodemon y después ejecutar npm start

```javascript
  {
    "name": "2.1-node_server",
    "version": "1.0.0",
    "description": "",
    "main": "app.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "node app.js",
      "start:callbacks":"src/asincronismo/callbacks.js" // no está en el proyecto
    },
    "author": "David Martin",
    "license": "ISC"
  }
```

2. custom name
   Para ejecutar un scrip con un nombre puesto por nosotros debemos teclear:

```
npm run nombreScript
```

### Instalando paquetes de terceros

![not found](img/img-13.png)

NPM repository es donde se almacenan los paquetes de terceros y mediante comandos de npm podemos instalarlos en nuestro proyecto y utilizarlos como dependencias del mismo lo que llamamos **paquetes de producción** o también hay paquetes que nos ayudan durante el desarrollo **paquetes de desarrollo**.

Así cuando instalamos un paquete hay que decidir de que tipo es, si es dependencia de desarrollo lo instalamos como

```
npm install nombrePackage --save-dev
```

Si queremos instalarlo como dependencia de producción es

```
npm install nombrePackage --save
```

De ambas maneras solo lo instala en nuestro proyecto, si queremos instalar un paquete de manero global usamos -g

```
npm install -g nombrePackage
```

#### Paquetes útiles


##### sharp

Esta librería nos permite trabajar con imágenes.

```javascript

const sharp = require('sharp')


sharp('utiles.png')
    .resize(80)
    .grayscale()
    .toFile('resize-img.png')


```

##### moment 

Esta librería nos permite trabajar con fechas. 

```javascript
const moment = require('moment')

let ahora = moment();

console.log(ahora.toString());

// como formatear la fecha
console.log(ahora.format('DD/MM/yyyy - HH:mm'));

// startOf() cuanto tiempo ha pasado desde la hora en la q estamos es decir los  MINUTOS 
console.log(ahora.startOf('hour').fromNow());
// startOf() cuanto tiempo ha pasado desde el inicio del día es decir la Hora actual.
console.log(ahora.startOf('day').fromNow());

// endtOf() cuanto tiempo falta para finalizar el día
console.log(ahora.endOf('day').fromNow());

// calendar 
console.log(ahora.subtract(10, 'days').calendar(null, { sameElse: 'LLLL' }));
console.log(ahora.subtract(3, 'days').calendar(null, { sameElse: 'DD/MM/YYYY' }));
console.log(ahora.subtract(1, 'days').calendar(null, { sameElse: 'DD/MM/YYYY' }));
console.log(ahora.calendar(null, { sameElse: 'DD/MM/YYYY' }));
console.log(ahora.add(1, 'days').calendar(null, { sameElse: 'DD/MM/YYYY' }));
console.log(ahora.add(3, 'days').calendar(null, { sameElse: 'DD/MM/YYYY' }));
console.log(ahora.add(10, 'days').calendar(null, { sameElse: 'DD/MM/YYYY' }));

// multiple locale support

console.log(moment.locale());// en
;         // en
moment().format('LT');   // 7:17 PM
moment().format('LTS');  // 7:17:56 PM
moment().format('L');    // 06/04/2022
moment().format('l');    // 6/4/2022
moment().format('LL');   // June 4, 2022
moment().format('ll');   // Jun 4, 2022
moment().format('LLL');  // June 4, 2022 7:17 PM
moment().format('lll');  // Jun 4, 2022 7:17 PM
moment().format('LLLL'); // Saturday, June 4, 2022 7:17 PM
moment().format('llll'); // // Sat, Jun 4, 2022 7:24 PM


```


##### bcrypt

Muy útil para cifrar y desencriptar datos por ejemplo passwords. 

```
npm install bcrypt
```

```javascript
 const bcrypt = require("bcrypt");

async function create_hash(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 5, (err, hash) => {
      resolve(hash);
    });
  });
}

async function check_hash(password, hash) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, res) => {
      resolve(res);
    });
  });
}

async function main(password) {
  let password_encrypted = await create_hash(password);
  let result = await check_hash(password, password_encrypted);
  console.log(result);
}

main("1234Segura!"); 
```



##### NODEMON
   
- Nos permite reiniciar nuestro servidor cuando modificamos el código. Para instalarlo

```
npm install nodemon --save-dev
```

Podemos crear una archivo, nodemon.json, en la raiz del proyecto para configurar que ignore algunos archivos

```javascript
{
  "ignore": ["*.json"]
}
```

Así solo lo instalamos de manera local (solo nuestro proyecto). Nos crea en nuestro proyecto una carpeta **node_modules** donde se instalan estos paquetes.
Para usarlo tenemos que ejecutar el proyecto mediante nodemon no usando node

```javascript
{
  "name": "2.1-node_server",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
/*=>*/  "start": "nodemon app.js" // <==
  },
  "author": "David Martin",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^2.0.6"
  }
}
```


## Errors and debugging

Hay tres categorias de errores:

- sintaxis  
  Tiempo de ejecución => nuestro programa tiene algún error que impide que se ejecute  
  Errores de lógica => el programa se ejecuta pero no funciona como se esperaría.

# T3 ExpressJS

## Que es expressJS y para qué se utiliza

![not found](img/img-14.png)

Express es un framework que nos permitirá despreocuparnos de tareas tediosas, como extraer el body de la request, crear servidor, routing,... y centrarnos en la lógica.
Por ejemplo para extraer el body de la request teníamos q escuchar el event data recorrer el buffer, detectar el event end y parsear la info a string si la info era un string... con express todo eso se simplifica.

## Usando express

1. Instalamos express

```
  npm install express --save
```

2. importamos en nuestro app.js

```javascript
const express = require("express");
```

3. creamos una app cn express y arrancamos el server

```javascript
const app = express();

const server = http.createServer(app);

server.listen(3000);
```

### Middleware

![not found](img/img-15.png)

Express funciona con middlewares, es un conjunto de funciones a través de las cuales es conducida una request al servidor. Estos middlewares son requestHandlers mediante los cuales podemos agregar funcionalidades a nuestro servidor, son funciones que establecemos entre la entrada de la request y el envío de la respuesta.

#### use

- Es un método sobrecargado por lo que tenemos varias implementaciones del mismo.
  Para cada request entrante se ejecutará el método use(), a éste le pasamos tres argumentos request,response y **next**.

  - **Next()**
    es una función que debemos ejecutar al final de nuestro código para permitir el avance hacia el siguiente middleware. Excepto cuando enviemos una respuesta.
  - **send()**
    Nos permite enviar una respuesta y de manera automática exprees detecta qué tipo de respuesta es y le completa el header.

    ![not found](img/img-16.png)

#### listen()

- Esta función sustituye a la creación del servidor.

```javascript
const server = http.createServer(app);
server.listen(3000, "localhost");
```

podemos escribir directamente

```javascript
app.listen(3000);
```

### Manejando rutas

Podemos usar el middleware use() para especificar la url. Si solo especificamos en la ruta "/" como todas las url empiezan por '/', si queremos acceder a una url q no existe en nuestro servidor pej
/random como el único elemento que coincide es / se dirigirá ahí. Las diferentes rutas siempre tienen que ir por encima de la principal "/". Para evitar esto podemos utilizar get(), post(),... ya que con estos métodos sólo se dirigirá si la url es exactamente igual.

```javascript
app.use("/add-product", (req, res, next) => {
  console.log("in the middleware");
  res.send("<h1>Add-product page</h1>");
}); //middleware

app.use("/", (req, res, next) => {
  console.log("in the other middleware");
  res.send("<h1>Hello from express</h1>");
}); //middleware
```

### Parsing incoming request

Para gestionar los request usamos el middeware use() de la siguiente manera.

1. body-parser y urlencoded()
   Es una paquete externo que instalamos en desarrollo que nos ayudará a parsear el contenido del body. Funciona solo para parsear datos codificados en la url por lo tanto tipo string, datos que vienen de un formulario, si enviamos tipo json o archivos usaremos otro tipo de **body-parser**.
   Como hemos dicho antes use() se ejecuta para cada request así q body-parser se ejecutará en cada conexión y si hay datos en la url los decodificará, lleva implícito un next() por lo que permitirá ejecutar el código que le sigue.

   ```
     npm install body-parser --save

   ```

   Una vez instalado lo importamos y especificamos que queremos decodificar las url usando el método urlencoded()
   tenemos que añadirle la opción extended en:

   - false si los datos codificados en la url serán de tipo string o array

   - true si serán de cualquier tipo

```javascript
const bodyParser = require("body-parser");

const app = express();
//parsear el request body
app.use(bodyParser.urlencoded({ extended: true }));
```

      Para hacer que la ruta (/product) solo sea accesible mediante una petición tipo POST
      el método use() es genérico, reacciona a cualquier request si queremos filtrar r get o post debemos usar
        app.get()
        app.post()
        app.delete()
        app.push()
        app.put()

```javascript
app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
```

### usando el router de express

La función Router() crea como una mini app de express asociada a nuestra app que nos ayuda a gestionar las rutas. Creamos una carpeta Routes y dentro ponemos nuestroas archivos para las rutas, normalmente se pone uno para las rutas a las q puede acceder el admin y otro genérico.

![not found](img/img-17.png)

```javascript
  const express = require("express");

  const router = express.Router();

  router.get("/add-product", (req, res, next) => {

    res.send(
      "
      <body>
        <h1>Add-product</h1>
          <form action='/product' method='POST'>
            <input name='title' type='text'></input>
            <button type='submit'>add produc t!</button>
          </form>
      </body>
      "
    );
  });

  router.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
  });

  router.module.exports = router;
```

después importamos nuestro archivo a la app.js.

```javascript
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");

app.use(adminRoutes);
```

### generar 404 error page

Para generar una respuesta ante una url que no existe usamos

```javascript
//------------ FIN IMPORTS ----------------
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000);
```

### Filtrar los PATHS

Es habitual en las apps que las url se filtren por usuario, por ejemplo "/admin/add-product" o "/admin/products" y así. Si tenemos configurado nuestros paths de esa manera podemos añadirlo a use() de la siguiente manera:

```javascript
app.use("/admin", adminRoutes);
```

de tal modo que solo las url que empiezan por /admin entraran en el adminRoutes. Pero una vez dentro del archivo no debemos volver a chequear la ruta entera "/admin/add-product" solo mira a partir de
"/admin/"

```javascript
// /admin/add-product => GET

router.get("/add-product", (req, res, next) => {
  res.send(
    "<body><h1>Add-product</h1> <form action='/admin/add-product' method='POST'> <input name='title' type='text'></input> <button type='submit'>add produc t!</button></form></body>"
  );
});

// /admin/add-product => POST

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
```

### Servir páginas HTML

#### Formas de acceder al path

##### process.cwd()

- Esta función es una manera de conocer la ruta absoluta donde se encuntra nuestro proyecto:

```javascript
console.log(process.cwd()) / home / david / Programacion / WEB -
  DEVELOPMENT / NodeJs / code / T5 -
  MVC / 5.1 -
  eJS -
  node -
  server;
```

##### require.main.filename

- Sustituye a process.mainModule.filename, y como este nos da el nombre del archivo donde empieza nuestra app, el que arranca la aplicación.

```javascript
console.log(require.main.filename);
/home/david/Programacion/WEB-DEVELOPMENT/NodeJs/code/T5-MVC/5.1-eJS-node-server/app.js

```

##### dirname

- Nos da la ruta absoluta hasta el archivo donde ejecutamos `__dirname`

```javascript
console.log(__dirname);
/home/david/Programacion/WEB-DEVELOPMENT/NodeJs/code/T5-MVC/5.1-eJS-node-server/controllers

```

Creamos un directorio llamado views dnd guardaremos nuestras págias HTML.
Para poderlas devolver en la respuesta usamos el método sendFile() y especificamos la ruta a nuestras vistas. Para especificar el PATH tenemos un core module que nos ayuda con eso.

```javascript
const path = require("path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
});
```

    usamos el método join() para ir encadenando porciones de la ruta hasta llegar a nuestro archivo. la variable global **__dirname** hace referncia a la ruta desde la raíz de nuestro SSOO hasta el archivo donde escribimos __dirname, una vez ahí vamos completando la ruta. En nuestro caso tenemos q entrar en una carpeta hermana de la q ejecutamos el código así q tenemos q concatenar
    "..".

### Servir archivos estáticos

Servir archivos estáticos significa poder servir archivos que no esté gestionado por el sistema de router de express u otro middleware si no que se accede directamente por el sistema de archivos.
En principio NodeJS bloquea el acceso al sistema de archivos pero para que el html puede acceder a una hoja CSS necesitamos hacer una excepción.
Para ello necesitamos otro middleware usando el propio objeto de express

```javascript
app.use(express.static(path.join(__dirname, "public")));
```

De este manera hará que todo el contenido del directorio **public** sea accesible.
Cuando intentemos acceder desde el HTML para cargar el css el sistema ya situa la ruta en el directorio especificado "public" así que en el tag link ponemos

```html
<link rel="stylesheet" href="/css/main.css" />
```

**No hay que dejarse la "/" antes de css IMPORTANTE!!!**
Lo que hace express es que cualquier request que solicite un archivo terminado en .css, .js, imágenes, etc.. lo edirigirá al directorio especificado como archivos státicos, en nuestro caso el diretorio public.

Mediante el mismo método podemos registrar varios directorios como fuentes de archivos estáticos.

# T4 - Trabajando con contenido dinámico y motor de plantillas

Hasta ahora hemos parendido a servir contenido estático lo que no es muy usual, lo habitual es que podamos modificar el contenido de nuestros HTML de manera dinámica, por ejemplo recuperando info de nuestra BBDD.
Para simular una bbdd usaremos una array, el problema de esto es que el array es "heredado" en node para todos los usuarios que se conecten al servidor, lo que ocasiona que si un usuario modifica la info el otro tb verá esas modificaciones, lo que no es una implementación que se deba hacer, pero xa aprender a usar el motor de plantillas está bien.

Entonces en adimin creamos el array y lo exportamos:

```javascript
const express = require("express"),
  path = require("path");

const router = express.Router();

//----variable donde guardaremos info a modo de bbdd
const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});
// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

module.exports.routes = router;
module.exports.products = products;
```

## Motor de plantillas

![not found](img/img-18.png)
Motores de platillas hay muchos pero veremos los 3 más usados. Todos ellos se integran a la perfección con express, es más es más fácil usarlos con express, solo necesitamos "decirle" a express que usaremos un motor de plantillas

![not found](img/img-19.png)

### Instalación de las plantillas

1. Instalamos con npm los paquetes

```
    npm install ejs pug express-handlebars --save
```

2. Coonfiguramos express para que use el motor de plantillas, para ello usamos método set() para establecer una configuración global. También podemos usar set() para establecer datos de manera global (accesible en toda la app), estos datos siempre son parejas llave-valor. Hay lgunas llaves preestablecidas como el caso q nos interesa **"views"** y **"view engine"**.

#### view engine

Le dice a express que para renderizar vistas dinámicas utilice el motor de plantillas especificado.

#### views

Le dice a express donde encontrar las plantillas dinámicas. Por defecto las coge en la ruta "/views"

```javascript
// datos globales
app.set("miNombre", "David");
app.get("miNombre"); //"David"

// establecer plantillas.

const app = express();

app.set("view engine", "pug");
app.set("views", "Templates");
```

### PUG

Es un motor que usa una versión simplificada de HTML, es muy importante respetar la identación, podemos usar css enlazados pero para aplicar una clase css a un tag HTML se utiliza la notación de punto

```pug
<!DOCTYPE html>
html(lang="en")
  head
    meta(charset="UTF-8")
    meta(name="viewport", content="width=device-width, initial-scale=1.0")
    title My Shop
    link(rel="stylesheet", href="/css/main.css")
    link(rel="stylesheet", href="/css/main-product.css")
  body
    header.main-header
      nav.main-header__nav
        ul.main-header__item-list
          li.main-header__item
            a.active(href="/") Shop
          li.main-header__item
            a.active(href="/admin/add-product") Add Product
```

Para renderizar la vista debemos usar el método render(), como anteriormente ya definimos dónde guardábamos las platillas dinámicas no hace falta especificar la ruta

```javascript
router.get("/", (req, res, next) => {
  res.render("shop");
});
```

#### Añadiendo contenido dinámico a la plantilla de pug

Para pasar datos a la plantilla simplemente debemos agregárselos como segundo argumento de la función render(); en forma de objeto(clave-valor)

```javascript
const products = require("./admin").products;
//---------------------------------------------

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop", { items: products, docTitle: "Shop" });
});
```

Para recuperar esos datos en la plantilla de pug usamos la sitaxi  
`# { }`
Recordemos que en la clave items tenemos un array (products) que contiene objetos del tipo {title:''} Entonces solo tendremos que iterar el array e ir sacando el título de cada producto

```pug
<!DOCTYPE html>
html(lang="en")
head
  meta(charset="UTF-8")
  meta(name="viewport", content="width=device-width, initial-scale=1.0")
  title #{docTitle}
  link(rel="stylesheet", href="/css/main.css")
  link(rel="stylesheet", href="/css/main-product.css")
body
  header.main-header
    nav.main-header__nav
      ul.main-header__item-list
        li.main-header__item
          a.active(href="/") Shop
        li.main-header__item
          a.active(href="/admin/add-product") Add Product
  main
    if items.length > 0
      div.grid
          each item in items
            article.card.product-item
                header.card__header
                    h1.product__title #{item.title}
                div.card__image
                    img(src="https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png",
                    alt="A Book")
                div.card__content
                    h2.product__price $19.99
                    p.product__description A very interesting book
                div.card__actions
                    button.btn Add to Cart
    else
      h1 No products
```

Un formulario quedaría así

```pug
  main
    form.product-form(action="/admin/add-product",method="POST")
        div.form-control
          label(for="title") Title
          input(type="text", name="title", id="title")
        button.btn( type="submit") Add Product

```

#### Añadiendo Layouts

Si en todas nuestras páginas tenemos una estrctura similar, como nos sucede a nosotros con el header podemos hacer layouts en lugar de volver a escribirlo.
Estos layuots podemos personalizarlos para que se ajusten a cada situación, por ejemplo hay páginas que tendrán unos estilos css diferentes, un contenido concreto,... así para crear un layout (esqueleto) y poder añadir elementos usamos los bloques `block`

```pug
<!DOCTYPE html>
html(lang="en")
  head
    meta(charset="UTF-8")
    meta(name="viewport", content="width=device-width, initial-scale=1.0")
    title #{title}
    link(rel="stylesheet", href="/css/main.css")
    block styles
  body
    header.main-header
      nav.main-header__nav
        ul.main-header__item-list
          li.main-header__item
            a(href="/") Shop
          li.main-header__item
            a(href="/admin/add-product") Add Product
    block content

```

Lo mejor para guardar los layouts es en la misma carpeta donde tenemos las plantillas.

![not found](img/img-20.png)

Una vez hecho esto en la plantilla deseada utilizando la palabra reservada `extends`
importamos el layout y con `block` inyectamos el contenido que queramos

```pug
  extends layouts/main-layout.pug

  block content
    h1 Page not found
```

#### Añadir clases css de manera dinámica

Para ello podemos enviar un nuevo argumento en el método render() para saber si debemos añadir la clase o no.

```javascript
router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add-Product",
    path: "/admin/add-product",
  });
});
```

luego comprobamos con un `if` en la plantilla

```pug
  a(href="/admin/add-product", class= (path=== '/admin/add-product' ? 'active' : '')  ) Add Product
```

### HandleBars

Este otro motor de plantillas usa HTML mezclado con código para generar la lantilla. Así que en app.use() modificamos nuestro motor pero handlebars no está incluido en el core así que tenemos q importarlo previamente y decirle a express que es un motor de plantillas

```javascript
const expressHbs = require("express-handlebars"); //importamos

app.engine("hbs", expressHbs()); // lo registramos como motor de plantillas
app.set("views", "Templates");
app.set("view engine", "hbs");
```

Para renderizar la página tenemos que especificar q no usamos layouts porque por defecto handlebars se construye con un esquelo principal al que le vamos añadiendo cosas, entonces busca primero un main.handlebars.
Busca por este árbol de directorios  
![not found](img/img-21.png)

```javascript
app.use((req, res, next) => {
  res
    .status(404)
    .render("404", { layout: false, pageTitle: "Page not found2" });
});
```

Luego podemos modificar varios valores con los que trabaja handlebars por defecto

```javascript
app.engine(
  "handlebasrs",
  expressHbs({
    layoutsDir: path.join(__dirname, "Templates", "layouts"),
    partialsDir: path.join(__dirname, "Templates", "layouts", "partials"),
    extname: "hbs",
    defaultLayout: "main",
  })
);
```

Una de las diferencias con pug es que en una plantilla de handlebars no podemos usar lógica, es decir evaluar con un if
`if items.length > 0 ...` sólo podemos pasarle variables con datos.
Así que la lógica la tenemos que tener en nuestro nodeJS pasarle a la plantilla el resultado

```javascript
router.get("/", (req, res, next) => {
  res.render("shop", {
    layout: false,
    pageTitle: "Shop - handlebars",
    items: products,
    hasProducts: products.length > 0,
  });
});
```

una vez sabemos si tenemos productos evaluar con if en la plantilla, cuando hacemos un loop con `each` podemos acceder a cada elemento dentro de la iteración con `this`

```handlebars
{{#if hasProducts}}
  {{#each items}}
    <div class="grid">
      <article class="card product-item">
        <header class="card__header">
          <h1 class="product__title">{{this.title}}</h1>
        </header>
        <div class="card__image">
          <img
            src="https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png"
            alt="A Book"
          />
        </div>
        <div class="card__content">
          <h2 class="product__price">$19.99</h2>
          <p class="product__description">A very interesting book about so many
            even more interesting things!</p>
        </div>
        <div class="card__actions">
          <button class="btn">Add to Cart</button>
        </div>
      </article>
    </div>
  {{/each}}
{{else}}
  <h1>Not found products</h1>
{{/if}}
```

#### Usando layouts con handlebars

Tenemos que especificar dónde están guardadas los layouts y como se llama el layout por defecto

```javascript
app.engine(
  "hbs",
  expressHbs({
    defaultLayout: "main-layout",
    layoutsDir: path.join(__dirname, "Templates", "layouts"),
    extname: "hbs",
  })
);
```

Creamos nuestro layout, en la regióm `{{{body}}}` es donde inyectará la página que estamos renderizando

```handlebars
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>{{pageTitle}}</title>
      <link rel="stylesheet" href="/css/main.css" />
      {{#if formsCss}}
        <link rel="stylesheet" href="/css/forms.css" />
      {{/if}}
      {{#if productCss}}
        <link rel="stylesheet" href="/css/main-product.css" />
      {{/if}}
    </head>

    <body>
      <header class="main-header">
        <nav class="main-header__nav">
          <ul class="main-header__item-list">
            <li class="main-header__item"><a class= " {{#if activeShop}}active{{/if}}" href="/">Shop</a></li>
            <li class="main-header__item">
              <a class= "{{#if activeAddProduct}}active{{/if}} " href="/admin/add-product">Add Product</a>
            </li>
          </ul>
        </nav>
      </header>
      {{{body}}}
    </body>
  </html>

```

Una vez hecho esto en shop.js queda así

```javascript
router.get("/", (req, res, next) => {
  res.render("shop", {
    productCss: true,
    activeShop: true,
    pageTitle: "Shop - handlebars",
    items: products,
    hasProducts: products.length > 0,
  });
});
```

### EJS

Es parecido a Pug por lo q no necesitamos registrarlo como motor de plantillas. No es compatible con layouts.  
Para crear la plantilla podemos usar HTML

```
<%= %> nos permite renderizar el contenido de una variable como si fuera un string

<%  %> en medio podemos incluir código JS
<%- %> permite renderizar código como HTML o  hacer includes
      <%- include('../includes/navigation.ejs') %>

```

Si quisiera pasar algún dato al include uso un segundo argumento

**mirar la sintaxis de los archivos del T4**

# T-5 Patrón Modelo vista controlador - MVC -

Es un patrón de diseño que separa nuestro código en diferentes partes, cada una de ellas tiene una función concreta. Nuestra app está formada por tres partes:

- **modelo** => es la parte responsable de la gestión de los datos.
- **la vista** => se encarga de mostrar el contenido al usuario.
- **el controlador** =>responsable de conectar el modelo con las vistas, controla qué vista se renderiza, las rutas y que modelo se usa.

![not found](img/img-22.png)

**mirar código del T5**
En el archivo 'T5-MVC/5.1-eJS-node-server/model/product.js' cuando leemos el archivo para almacenar los productos lo podemos hacer directamente (readFile()) o si el archivo es muy grande leerlo como un stream (a trozos).

- Refectoring usando una helper function que lea el archivo bbdd.

```javascript
const fs = require("fs"),
  path = require("path");

const path_to_bbdd_file = path.join(
  process.cwd(),
  "data",
  "products_bbdd.json"
);
//---------helper function
const getProductsFromFile = (cb) => {
  fs.readFile(path_to_bbdd_file, (err, data) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(data));
    }
  });
};
//-----------------------
module.exports.classProduct = class Product {
  constructor(title) {
    this.title = title;
  }
  save() {
    getProductsFromFile((products_data) => {
      products_data.push(this);
      fs.writeFile(path_to_bbdd_file, JSON.stringify(products_data), (err) => {
        if (err) console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
```

![not found](img/img-23.png)

# T-6 Enhancing app

`mirar el código`

# T-7 Dynamic routes and advanced models

![not found](img/img-24.png)

- Extraer con Router() datos de la url, para ello en el router usamos la siguiente nomenglatura

```javascript
router.get("/products/:productId", shopController.getProduct);
```

Si tenemos otro segmento statico en la ruta `/products/` como por ejemplo `/products/delete` y lo ponemos detrás de la url con segmento dinámico express no podra acceder, es decir en este orden

```javascript
//-- ESTO NO FUNCIONA BIEN !!!!!!

//url con segmento dinámico marcado por  ":"
router.get("/products/:productId", shopController.getProduct);
router.get("/products/delete", shopController.deleteProduct);
```

Este sería el orden correcto!

```javascript
//-- ORDEN CORRECTO !!!!!!

//url con segmento dinámico marcado por  ":"
router.get("/products/delete", shopController.deleteProduct);
router.get("/products/:productId", shopController.getProduct);
```

Recordar que para pasar datos por post podemos usar el `req.body` o meter la info en la url como un `segmento dinámico (/products/:id)` y recogerlo como req.params.id

- Query params
  Son los datos que pasamos por la url, se indican a partir de un `? ` en la url y si pasamos más de uno van separados por `&`
  ```
    http://localhost:3000/admin/edit-product/0.12?myParam=true&title=book
  ```
  Hay que tener en cuenta que los datos extarídos así siempre son del tipo `string`
  Para extraerlos:
  ```javascript
  req.query.myParam;
  ```
  Si no se encuentra el parámetro que buscamos nos devuelve `undefined`

# T-8 Proyecto-1

## Funciones a tener en cuenta

- Usaremos funcionalidades importantes de los arrays como:
  - .find()
  - .findIndex()
  - .filter()

## callbacks - aclaración -

Es cuando pasamos una función como argumento de otra función, la clave aquí es q la función externa "decide" cuando se ejecuta la función pasada (callback). Ponemos de ejemplo la funión de lectura y escritura en n archivo

```javascript
const getProductsFromFile = (cb) => {
  fs.readFile(path_to_bbdd, (err, data) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(data));
    }
  });
};
```

La función getProductsFromFile recibe un callback que lo ejecutará cuando haya leído el archivo, pasándole los datos del archivo o un array vacío [].
Entonces cuando yo ejecuta esta función le paso la implementación del callback

```javascript
getProductsFromFile((products_from_file) => {
  products_from_file.push(this);

  fs.writeFile(path_to_bbdd, JSON.stringify(products_from_file), (error) => {
    if (error) {
      console.log(error);
    }
  });
});
```

Primero lee el archivo:

- si da un error ejecuta la arrow function que le estoy pasando y le pasa como argumento un array vacío []
- si obtiene datos se los pasa
  La arrow function que le paso escribe los datos en un archivo

## Proyecto para poner en práctica todo lo aprendido hasta el momento.

1. Iniciamos proyecto con npm
   ```
     npm init -y
   ```
2. Instalamos dependencias
   1. de desarrollo
      1. nodemon => permite refrescar el servidor con cada cambio, podemos excluir archivos para que cuando haya modificacines en ellos no se reinicie el servirdor por ejemplo archivos tipo json.
         ```
          npm install nodemon --save-dev
         ```
   2. de producción
      1. express
      2. ejs
      3. body-parser
      ```
        npm install express ejs body-parser --save
      ```
3. Archivos de configración, en la raíz del proyecto
   1. nodemon.json
      ```javascript
        {
          "ignore": ["*.json"]
        }
      ```
   2. package.json
      ```javascript
        {
          "name": "t7-proyecto-1",
          "version": "1.0.0",
          "description": "Proyecto resumen hasta ahora",
          "main": "app.js",
          "scripts": {
            "start": "nodemon app.js"
          },
          "author": "David",
          "license": "ISC",
          "devDependencies": {
            "nodemon": "^2.0.6"
          },
          "dependencies": {
            "body-parser": "^1.19.0",
            "ejs": "^3.1.5",
            "express": "^4.17.1"
          }
        }
      ```
4. Creamos toda la esructura del proyecto

   1. archivo
      1. app.js => archivo que pone en marcha la applicación
   2. directorios
      1. controllers
      2. data => guarda archivos con la función de bbdd
      3. model
      4. public => archivos estáticos (css, js)
      5. routes
      6. views

5. levantamos un servidor

- el método listen() devuelve un objeto `http.server` el cual tiene un método addres() que devuelve : { port: xxx, family: 'IPv4', address: '127.0.0.1' }

  ```javascript
  //--------import core modules
  const path = require("path");

  //-------- imports third party
  const express = require("express"),
    bodyParser = require("body-parser");
  //--------FIN IMPORTS

  const app = express();

  app.use("/", (req, res, next) => {
    console.log(`running on ${server.address().address}`);
    console.log(`running on ${server.address().port}`);
    console.log(`running on ${server.address().family}`);
    res.send("<h1>hello world</h1>");
  });

  const server = app.listen(3000, "localhost");
  ```

6. configuraciones de los módulos
   1. Seteamos qué motor de vistas usaremos (ejs) y donde guardaremos las vistas
      ```javascript
      app.set("view engine", "ejs");
      app.set("views", "viwes");
      ```
   2. configuramos boy-parser para que en cada conexión decodifique los datos del body
      ```javascript
      app.use(bodyParser.urlencoded({ extended: true }));
      ```
   3. seteamos dónde se guardarán los archivos estáticos (css, js,...)
      ```javascript
      app.use(express.static(path.join(__dirname, "public")));
      ```
7. Routting & controllers

   1. Creamos los archivos para gestionar nuestras rutas, en mi caso un gestor genérico `shop.routes.js` y otro para gestionar las rutas con acceso al admin `admin.routes.js`. en cada archivo usamos el router de express `express.Router()` para gestionar las rutas  
      ![not found](img/img-25.png)
   2. Creamos un archivo `shop.controller.js` y `404.controller.js` en la carpeta `controllers`, con diferentes funciones para cada caso/ruta  
      ![not found](img/img-26.png)
      1. `shop.controller`  
         Creamos y exportamos una función llamada `getIndex` que renderizará la página principal
         ```javascript
         module.exports.getIndex = (req, res, next) => {
           res.render("shop/index", { pageTitle: "Index Page" });
         };
         ```
      2. `404.controller.js`  
         creamos el controller para las páginas 404
         ```javascript
         module.exports.error = (req, res, next) => {
           res.status(404).render("404", { pageTitle: "404 Page" });
         };
         ```
   3. `shop.routes.js`  
      le decimos al router qué función ejecutar del controlador según la url detectada y `finalmente exportamos la variable`

      ```javascript
      //------Imports

      //-----Modules
      /*-------*/ const express = require("express");
      /*-------*/ const router = express.Router();

      //-----Controller
      /*-------*/ const shopController = require("../controllers/shop.controller.js");

      //------FIN IMPORTS

      router.get("/", shopController.getIndex);

      module.exports = router;
      ```

   4. Creamos las vistas para cada página (uso bootstrap)

      1. creo fragmentos head y nav y los guardo en includes  
          ![not found](img/img-27.png)

         1. head.ejs

         - ```html
           <!DOCTYPE html>
           <html lang="en">
             <head>
               <meta charset="UTF-8" />
               <meta
                 name="viewport"
                 content="width=device-width, initial-scale=1.0"
               />
               <title><%= pageTitle %></title>
               <link
                 rel="stylesheet"
                 href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
                 rel="stylesheet"
                 integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                 crossorigin="anonymous"
               />
               <script
                 src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                 integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                 crossorigin="anonymous"
                 defer
               ></script>
             </head>
           </html>
           ```

         2. nav.ejs

         - ```html
           <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
             <div class="container-fluid">
               <button
                 class="navbar-toggler"
                 type="button"
                 data-bs-toggle="collapse"
                 data-bs-target="#navbarTogglerDemo03"
                 aria-controls="navbarTogglerDemo03"
                 aria-expanded="false"
                 aria-label="Toggle navigation"
               >
                 <span class="navbar-toggler-icon"></span>
               </button>

               <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                   <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="/"
                       >Inicio</a
                     >
                   </li>
                   <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="/"
                       >Home</a
                     >
                   </li>
                   <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="/"
                       >Home</a
                     >
                   </li>
                 </ul>
               </div>
             </div>
           </nav>
           ```

      2. index.ejs

         - ```html
             <%- include('../includes/head.ejs')  %>
               <body>
             <%- include('../includes/nav.ejs')  %>
                 <div class="container">

                     <div class="alert alert-warning mt-5" role="alert">
                         Not products available
                     </div>

                 </div>

               </body>
             </html>
           ```

      3. 404.ejs

         - ```html
             <%- include('includes/head.ejs')  %>
               <body>
             <%- include('includes/nav.ejs')  %>
                 <div class="container">

                     <div class="alert alert-danger mt-5" role="alert">
                         Page not found!
                     </div>

                 </div>

               </body>
             </html>
           ```

   5. importamos todo en el archivo `app.js` para q funcione

      ```javascript
      //----IMPORTS

      //-----CORE MODULES
      const path = require("path");

      //-----3º PARTY
      const express = require("express"),
        bodyParser = require("body-parser");

      //-----ROUTES
      const shopRoutes = require("./routes/shop.routes");
      const adminRoutes = require("./routes/admin.routes");

      //-----CONTROLLER
      const errorPageController = require("./controllers/404.controller").error;

      //--------FIN IMPORTS

      const app = express();

      //----- configuraciones
      app.set("view engine", "ejs");
      app.set("views", "views");

      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(express.static(path.join(__dirname, "public")));
      // Fin configuraciones

      app.use("/admin", adminRoutes);
      app.use(shopRoutes);
      app.use(errorPageController);

      const server = app.listen(3000, "localhost");
      ```

   6. Más vistas

      1. Formulario para entrar productos

         - ```html
           <%- include('../includes/head.ejs')%>

           <body>
             <%- include('../includes/nav.ejs')%>

             <div class="container mt-5">
               <form method="POST" action="/admin/add-product">
                 <div class="row mb-3">
                   <label for="title" class="col-sm-2 col-form-label"
                     >Title</label
                   >
                   <div class="col-sm-10">
                     <input
                       name="title"
                       type="text"
                       class="form-control"
                       id="title"
                     />
                   </div>
                 </div>
                 <div class="row mb-3">
                   <label for="price" class="col-sm-2 col-form-label"
                     >Price</label
                   >
                   <div class="col-sm-10">
                     <input
                       name="price"
                       type="number"
                       class="form-control"
                       id="price"
                     />
                   </div>
                 </div>
                 <div class="row mb-3">
                   <label for="imgUrl" class="col-sm-2 col-form-label"
                     >imgUrl</label
                   >
                   <div class="col-sm-10">
                     <input
                       name="imgUrl"
                       type="text"
                       class="form-control"
                       id="imgUrl"
                     />
                   </div>
                 </div>
                 <div class="row mb-3">
                   <label for="description" class="col-sm-2 col-form-label"
                     >Description</label
                   >
                   <div class="col-sm-10">
                     <textarea
                       name="description"
                       id="description"
                       cols="30"
                       rows="10"
                     >
                     </textarea>
                   </div>
                 </div>
                 <button type="submit" class="btn btn-primary">Send</button>
               </form>
             </div>
           </body>
           ```

         1. añado el siguiente código en el archivo `admin.routes.js`

            - ```javascript
              const express = require("express"),
                router = express.Router(),
                adminController = require("../controllers/admin.controller");

              router.get("/add-product", adminController.getAddProduct);
              router.post("/add-product", adminController.postAddProduct);

              module.exports = router;
              ```

         2. Creo el controlador `admin.controller.js`
            - ```javascript
              module.exports.getAddProduct = (req, res, next) => {
                res.render("admin/add-product", { pageTitle: "Add product" });
              };
              module.exports.postAddProduct = (req, res, next) => {
                const producto = req.body;
                const p = new Product(
                  producto.title,
                  producto.price,
                  producto.imgUrl,
                  producto.description.trim()
                );
                p.save();
                res.redirect("/");
              };
              ```
         3. Para que sea accesible por la ruta `/admin/...` en el archivo importo las `adminRoutes` y con `app.use` esecifico que busque en en ese archivo para las rutas que empiezan por /admin
            - ```javascript
              const adminRoutes = require("./routes/admin.routes");
              app.use("/admin", adminRoutes);
              ```

   7. Modelo & archivos JSON como bbdd

      1. Class Product

         - Creo una clase producto que me permitirá gestionar los items, crear productos y guardarlos en un archivo tipo JSON, con `this.id = Math.random();` le doy un id a cada producto. Como no voy a hacer operaciones con ese id lo transformo en string y así la comparación será más fácil pq cuando pase el id del producto por la url (cuando quiera editar/borrar el producto) será del tipo string ya que todos los datos codificados en la url quedan covertidos a tipo string.

           - ```javascript
              //-------IMPORTs
              const fs = require("fs"),
                path = require("path");

              const path_to_bbdd = path.join(
                process.cwd(),
                "data",
                "product_bbdd.json"
              );

              //--- CLASS
              module.exports.ProductClass = class Product {
                constructor(title, price, imgUrl, description) {
                  this.title = title;
                  this.price = price;
                  this.imgUrl = imgUrl;
                  this.description = description;
                }

                save() {
                  Product.getAllProducts((products_from_file) => {
                    this.id = Math.random().toString();
                    products_from_file.push(this);
                    fs.writeFile(
                      path_to_bbdd,
                      JSON.stringify(products_from_file),
                      (error) => {
                        if (error) {
                          console.log(error);
                        }
                      }
                    );
                  });
                }

                static getAllProducts(cb) {
                  fs.readFile(path_to_bbdd, (err, data) => {
                    if (err) {
                      cb([]);
                    } else {
                      cb(JSON.parse(data));
                    }
                  });
                }
              };
             ```

      2. Tenemos que modificar el `shop.controller` para mostrar en la página principal los productos del archivo json, pero como la función de `readFile` es asíncrona intenta renderizar la vista antes de tener los datos eso no ocasiona un error para evitarlo el método para obtener los productos le pasemas un callback, y será esa función callback la que renderizará la vista

         - ```javascript
           //-----IMPORTS

           const Product = require("../model/product").ProductClass;

           module.exports.getIndex = (req, res, next) => {
             Product.getAllProducts((datos) => {
               res.render("shop/index", {
                 pageTitle: "Index Page",
                 productos: datos,
               });
             });
           };
           ```

      3. Hemos modificado el index, en cada item hems añadido un enlace tipo botón que nos lleva a una ruta con el `id` del producto  
         `<a href="/add-cart/<%= datos.id %>" class="btn btn-primary">Add to cart</a>`

         - ```html
              <%- include('../includes/head.ejs')  %>
                <body>
              <%- include('../includes/nav.ejs')  %>
                  <div class="album py-5 bg-light">
                    <div class="container">

                      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <% if(productos.length >0){%>
                          <% productos.forEach(datos =>{%>
                              <div class="col">
                                <div class="card">
                                  <img src="<%=datos.imgUrl%>" class="card-img-top" alt=".not found.">
                                    <div class="card-body">
                                      <h5 class="card-title"><%=datos.title%></h5>
                                      <p class="card-text"><%=datos.price%> € </p>
                                      <p class="card-text"><%=datos.description%></p>
                                      <a href="/add-cart/<%= datos.id %>" class="btn btn-primary">Add to cart</a>
                                    </div>
                                </div>
                              </div>
                          <% }) %>
                        <%} else{%>
                          <div class="alert alert-warning mt-5" role="alert">NO Hay productos </div>
                        <% }%>

                      </div>
                    </div>
                  </div>
                </body>
              </html>
           ```

      4. Ejemplo de editar productos pasamos el id por la url

         - `<a href="/admin/edit-product/<%= datos.id %>" class="btn btn-success">Edit</a>`
         - para coger este dato en el routing usamos
           - `router.get("/edit-product/:id", adminController.getEditProducts);`
         - Para recogerlo en el controller
           - `const id_prod = req.params.id;`
         - añadimos un nuevo método en classProduct para uscar por id y usamos la función `find()`
           - ```javascript
              static getProductById(id, cb) {
                Product.getAllProducts((products) => {
                  const product = products.find((p) => p.id === id);
                  cb(product);
                });
              }
             ```
         - el controler pasa los datos a una nueva vista
           - ```javascript
             module.exports.getEditProducts = (req, res, next) => {
               const id_prod = req.params.id;
               Product.getProductById(id_prod, (prod) => {
                 res.render("admin/edit-product", {
                   pageTitle: "edit product",
                   product: prod,
                 });
               });
             };
             ```
         - Esta vista contiene un formulario dnd pintamos los datos y envia la confirmacion del cambio y mediante un `input:hidden` enviamos tb el id

           - ```html
             <%- include('../includes/head.ejs')%>

             <body>
               <%- include('../includes/nav.ejs')%>

               <div class="container mt-5">
                 <form method="POST" action="/admin/edit-product">
                   <div class="row mb-3">
                     <label for="title" class="col-sm-2 col-form-label"
                       >Title</label
                     >
                     <div class="col-sm-10">
                       <input
                         name="title"
                         type="text"
                         class="form-control"
                         id="title"
                         value="<%= product.title %>"
                       />
                     </div>
                   </div>
                   <div class="row mb-3">
                     <label for="price" class="col-sm-2 col-form-label"
                       >Price</label
                     >
                     <div class="col-sm-10">
                       <input
                         name="price"
                         type="number"
                         class="form-control"
                         id="price"
                         value="<%= product.price %>"
                       />
                     </div>
                   </div>
                   <div class="row mb-3">
                     <label for="imgUrl" class="col-sm-2 col-form-label"
                       >imgUrl</label
                     >
                     <div class="col-sm-10">
                       <input
                         name="imgUrl"
                         type="text"
                         class="form-control"
                         id="imgUrl"
                         value="<%= product.imgUrl %>"
                       />
                     </div>
                   </div>
                   <div class="row mb-3">
                     <label for="description" class="col-sm-2 col-form-label"
                       >Description</label
                     >
                     <div class="col-sm-10">
                       <textarea
                         name="description"
                         id="description"
                         cols="30"
                         rows="10"
                       >
             <%= product.title %></textarea
                       >
                     </div>
                   </div>
                   <input
                     type="hidden"
                     name="prod_id"
                     value="<%= product.id %>"
                   />
                   <button type="submit" class="btn btn-primary">Editar</button>
                 </form>
               </div>
             </body>
             ```

         - Recopilamos toda la info en el controller y se lo pasamos al método para editarlo

           - usamos `findIndex()` para modificarlo

             - ```javascript
               module.exports.postEditProducts = (req, res, next) => {
                 const new_prod = {
                   title: req.body.title,
                   price: req.body.price,
                   imgUrl: req.body.imgUrl,
                   description: req.body.description,
                   id: req.body.prod_id,
                 };

                 Product.editProduct(new_prod);
                 res.redirect("/");
               };
               ```

             - ```javascript
                    static editProduct(prod) {
                      Product.getAllProducts((products) => {

                        const product_index = products.findIndex((p) => p.id === prod.id);
                        products[product_index] = prod;

                        fs.writeFile(path_to_bbdd, JSON.stringify(products), (err) => {
                          console.log(err);
                        });
                      });
                    }
               ```

      5. Ejemplo de eliminar un prodcuto, usamos `filter()`

         - ```javascript
              static deleteProduct(prod_id) {
                Product.getAllProducts((products) => {
                  const products_updated = products.filter((p) => p.id !== prod_id);
                  products = products_updated;

                  fs.writeFile(path_to_bbdd, JSON.stringify(products), (err) => {
                    console.log(err);
                  });
                });
              }
           ```

   8. Añadimos la funcionalidad del carrito
      1.

# T-9 BBDD y NodeJS

## SQL

Las características principales de una bbdd SQL son:

- Los datos siguen un esquema
- Tenemos lo que llamamos database
- Es database contiene tablas
  - En estas tablas es donde se almacena los datos
    - cada fila de la tabla es un registro
    - cada registro contiene diferentes campos(columnas)
- Todos los datos que se guardan en las tablas tiene que encajar en ese esquema
- Se establecen relaciones entre los datos
  - one-to-one
  - one-to-many
  - many-to-many
- Las tablas se pueden relacionar entre si  
  ![not found](img/img-28.png)

## noSQL

El gestor de bbdd NoSQL más conocido puede ser MongoDB.
La principal característica es:

- Los datos no siguen un esquema concreto
- Los datos no tiene relaciones, almacenando junta toda la información necesaria
  - Esto ocasiona que haya nformación duplicada lo que nos obliga a q si esa info cambia tenerla que actualizar en diferentes colecciones
  - ![not found](img/img-30.png)

Se compone de:

- Database - shop -
  - collections (tablas)
    - documents (registros) nomenclatura JavaScript Object

![not found](img/img-29.png)

## SQL

### Instalando MySQL - KDE neon
d
CON KDE-NEON Y UBUNTU ME DA PROBLEMAS MYSQL ASÍ Q MEJOR INSTALARÉ MARIADB

---

### INSTALAR MariaDB

source : https://downloads.mariadb.org/mariadb/repositories/#distro=Ubuntu&distro_release=focal--ubuntu_focal&mirror=netcologne&version=10.6

Here are the commands to run to install MariaDB 10.6 from the MariaDB repository on your Ubuntu system:
```
sudo apt-get install software-properties-common
sudo apt-key adv --fetch-keys 'https://mariadb.org/mariadb_release_signing_key.asc'
sudo add-apt-repository 'deb [arch=amd64,arm64,ppc64el] https://mirror.netcologne.de/mariadb/repo/10.6/ubuntu focal main'

```

Once the key is imported and the repository added you can install MariaDB 10.6 from the MariaDB repository with:

1. sudo apt update
2. sudo apt install mariadb-server

---

#### Configuraciones MARIADB

1. `sudo mysql_secure_installation`
   1. me preguntará si quiero añadir un complemento para passwords
      1. Press ENTER here if you don’t want to set up the validate password plugin.
   2. ahora nos pedirá una contraseña para `root`
2. Remove anonymous users? (Press y|Y for Yes, any other key for No) :
   1. yes
3. Disallow root login remotely? (Press y|Y for Yes, any other key for No) :
   1. yes
4. Remove test database and access to it? (Press y|Y for Yes, any other key for No) :
   1. yes
5. Reload privilege tables now? (Press y|Y for Yes, any other key for No) :
   1. yes
6. damos una contraseña a root
   1. `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';`
   2. `flush privileges;`

---

### creación de un nuevo usuario mysql

1. nos conectamos como root
   1. `sudo mariadb`
2. creación del nuevo user
   1. `CREATE USER 'newUser'@'%' IDENTIFIED BY 'paswordUser';`
3. damos privilegios al nuevo user
   1. `GRANT ALL PRIVILEGES ON *.* TO 'david'@'%' WITH GRANT OPTION;`
4. `FLUSH PRIVILEGES;`

---

### INSTALAR **Dbeaver** - GUI TOOL

En lugar de instalar mySQL workbench podemos usar una interfaz gráfica que funciona con varios gestores de bbdd (mariaDB,mysql,...) Dbeaver, es totalmente compatible con linux cosa q workbenh no

```
sudo snap install dbeaver-ce
```

O bajarlo el rpm del sitio eb e instalarlo

```
sudo rpm -ivh dbeaver-<version>.rpm

```

Puede que nos bajems el rpm y lo queramos instalar manuealmente.
Cuando los descomprimamos tendremos:

![not found](img/img-53.png)

Este árbol de directorios simula el que tenemos en local `/usr/...` así que lo único que debemos hacer es copiar cada una de esas carpetas donde corresponda en local.

para ejecutarlo `dbeaver &`

1.  instalar gnome-keyring
1.  `sudo apt install gnome-keyring` **IMPORTANTE**
1.  Conocer el puerto donde se conecta mysql server
1.  `SHOW GLOBAL VARIABLES LIKE 'PORT'`

---

### INSTALAR mysql

1. `sudo apt install mysql-server`
2. Si salta un error
   1. `sudo rm /etc/apt/preferences.d/50-neon-mariadb`
   2. volver al comando 1
3. comprobamos que el servicio funciona correctamente
   1. `sudo service mysql status`
4. Instalar MySQL workbench community
   1. `sudo apt update`
   2. `sudo apt install snapd`
   3. `sudo snap install mysql-workbench-community`
5. Dar permisos de conexión source : https://snapcraft.io/install/mysql-workbench-community/kde-neon
   1. `snap connect mysql-workbench-community:password-manager-service `
   2. `snap connect mysql-workbench-community:ssh-keys`
   3. `snap connect mysql-workbench-community:cups-control`
6. instalar gnome-keyring
   1. `sudo apt install gnome-keyring` **IMPORTANTE**
7. Conocer el puerto donde se conecta mysql server
   1. `SHOW GLOBAL VARIABLES LIKE 'PORT' `

### Errores msql

1. sql masked

Puede ser que cuando arranquemos el servidor mysql nos aparezca el mensaje de

```
loaded: masked (Reason: Unit mysql.service is masked.)
```

Para `unmask` el servicio basta con

```
systemctl unmask mysql.service
```

2. el prompt no reconoce el comando mysql

```
ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/run/mysqld/mysqld.sock' (2)
```

### Desinstalar mysql

Lo mejor es desinstalar mysql y volverlo a instalar. Para ello:

SI YA TENGO INSTALADO MYSQL PARA PODERLO DESINSTALR :

1. sudo -i
2. service mysql stop
3. killall -KILL mysql mysqld_safe mysqld
4. apt-get --yes purge mysql-server mysql-client
5. apt-get --yes autoremove --purge
6. apt-get autoclean
7. deluser --remove-home mysql
8. delgroup mysql
9. rm ~/.mysql_history
10. rm -rf /etc/apparmor.d/abstractions/mysql /etc/apparmor.d/cache/usr.sbin.mysqld /etc/mysql /var/lib/mysql /var/log/mysql* /var/log/upstart/mysql.log* /var/run/mysqld
11. updatedb
12. exit

Este comando muestra todo lo q queda que esté relacionado con mysql, si queremos eliminarlo lo hacemos individualmente. Lo habitual es q quede cosas como modulos de php (eso lo dejamos)

` dpkg -l | grep mysql`
w

### Usando workbench

1. creación de un schema (database)

   - ![not found](img/img-31.png)

   2. le damos nombre a la database

      - ![not found](img/img-32.png)

   3. vemos como nos aparece en la pestañas schemas
      - ![not found](img/img-33.png)

### Conectar nuestra app a la base de datos SQL

1. Instalamos el paqueta `mysql2` como dependencia de producción tb sirve para mariadb o podemos usar el específico

   1. ```
        npm install mysql2 --save
        npm install mariadb --save

      ```

2. Generar el código que nos permitirá conectar con el servidor mysql generando un objeto conexión, que nos permitirá ejecutar queries

   1. Generaremos un tipo de conexión llamada `pool conexions`
   2. Para cada query realizada se tiene que realizar una nueva conexión, por eso crearemos una conexión del tipo pool(contiene varias conexiones) y la exportamos como una `promise`
   3. ```javascript
      const mysql = require("mysql2");

      const pool = mysql.createPool({
        host: "localhost",
        user: "david",
        database: "node-app", // nuestro schema
        password: "dmv1104",
      });

      module.exports = pool.promise();
      ```

   4. Este código lo creamos en el archivo `database.js` dentro del directorio util
      1. ![not found](img/img-34.png)
   5. Finalmente lo importamos a nuestro archivo `app.js`
      1. y mediante el método `execute()`ejecutamos queries con la sintaxis de sql
      2. ```javascript
         //-----IMPORT DB
         const db = require("./util/database");
         //------------ FIN IMPORTS ----------------
         db.execute("select * from products");
         ```
   6. Creo la tabla en nuestra bbdd
      1. ![not found](img/img-35.png)
      2. Entramos algunos datos
   7. Como el objeto `db`es una promesa dispongo de los métodos `then()` y `catch()`
      1. Si la consulta es exitosa devuelve los datos en then()
         ```javascript
         db.execute("select * from products")
           .then((result) => {
             console.log(result);
           })
           .catch((err) => {
             console.log(err);
           });
         ```
      2. Los dastos resultantes es un array que contiene a su vez un array con los registros en forma de objeto y el segundo array contiene objetos que corresponden a la difinición de cada uno de los campos de la tabla (id,price,..)
         1. reultado de la consulta:
            ```javascript
                [
                  [
                    BinaryRow {
                      id: 1,
                      title: 'book-1',
                      price: 10.99,
                      description: 'my first book added',
                      imgUrl: 'https://static2planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/70/original/portada_el-senor-de-los-anillos-iii-el-retorno-del-rey_j-r-r-tolkien_201505211337.jpg'
                    },
                    BinaryRow {
                      id: 2,
                      title: 'book-2',
                      price: 20.99,
                      description: 'my secnd book added',
                      imgUrl: 'https://static2planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/70/original/portada_el-senor-de-los-anillos-iii-el-retorno-del-rey_j-r-r-tolkien_201505211337.jpg'
                    }
                  ],
                  [
                    ColumnDefinition {...}
                  ]
                ]
            ```

### Adaptando nuestra app a la conexión con bbdd

Para ello modificaremos nuestro modelo para que en lugar de guardarlo en un archivo lo haga en la bbdd.

Recordemos que no trabajaremos con callbacks sino con promesas. Será una promesa lo que devolverán los métodos.

1. fetchAll() -> obtener todos los productos

   1. El modelo ProductClass
      - ```javascript
          //----import pool object
            const bd = require("../util/database");
          //-----
          static fetchAll() {
            return  bd.execute('SELECT * FROM products');
          }
        ```
   2. El controlador shop

      - para obtener los datos usamos el `destructuring` en arrays, simplemente extraemos los datos del array devuelto por la consulta, este array contiene dos arrays anidados, uno con los resultados de la consulta (rows) y otro con información de los campos de la tabla (fieldData)

      ```javascript
      module.exports.getIndex = (req, res, next) => {
        Product.fetchAll()

          .then(([rows, fieldData]) => {
            res.render("shop/index", {
              items: rows,
              pageTitle: "Shop_ejs",
              path: "/",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      };
      ```

2. save() -> para guardar productos en la bbdd
   - modificación del modelo
     ```javascript
       save() {
         return db.execute(
           "INSERT INTO products (title,price,imgUrl, description) VALUES (?,?,?,?)",
           [this.title, this.price, this.imgUrl, this.description]
         );
       }
     ```
   - modificamos el controllador admin
     ```javascript
     module.exports.postAddProduct = (req, res, next) => {
       const productInfo = req.body;
       const product = new Product(
         productInfo.title,
         productInfo.description,
         productInfo.price,
         productInfo.imgUrl
       );
       product
         .save()
         .then(() => {
           res.redirect("/");
         })
         .catch((err) => {
           console.log(err);
         });
     };
     ```

Hasta ahora hemos utilizado consultas sql muy simples pero a medida que la app se vuelve más grande las consultas se van comolicando así que para facilitar esto usaremos un modulo de nodeJS `sequelize`

# T-10 Sequelize

Es un ORM 'object relational mapping Library', lo que hace es mapear la bbdd en objetos JS, que tienen métodos para ayudarnos en el manejo de las consultas sql.
Básicamente crearemos objetos con sus atributos y sequelize los mapeará en forma de tabla ejecutando internamente una consulta sql.

Sequelize funciona con promesas.

![not found](img/img-36.png)

Sequelize nos permitirá:

1. Definir nuestros modelos (por ejemplo User) lo que sería la tabla
2. Instanciar objetos en base a ese modelo (sería cada registro de la tabla)
3. Ejecutar métodos sobre el modelo User (lo que sería las queries)
4. Nos permitirá crear asociaciónes entre modelos

![not found](img/img-37.png)

Para instalarlo en nuestro proyecto

```npm
npm install sequelize --save
```

Es importante recordar que sequelize necesita para funcionar el conector/driver a la bbdd, nosotros usamos mysql2 que también unciona con mariaDB.

Apartir de aquí tenemos que usar sequelize en nuestro modelo y como conexión a la bbdd.

source : https://sequelize.org/master/manual/getting-started.html

## conectar sequelize a nuestra bbdd

1.  ya no usaremos el siguiente código

    1. ```javascript
       const mysql = require("mysql2");
       const pool = mysql.createPool({
         host: "localhost",
         user: "david",
         database: "node-app",
         password: "dmv1104",
       });

       module.exports = pool.promise();
       ```

2.  en su lugar haremos lo siguiente

    1. ```javascript
       // importo sequelize q en realidad es una clase
       const Sequelize = require("sequelize");

       // instancio un objeto sequelize con los datos necesrios para relaizar la conexión a bbdd
       const sequelize = new Sequelize("node-app", "david", "dmv1104", {
         dialect: "mariadb",
         host: "localhost",
       });

       // por default hace una pool conection

       //exportamos
       module.exports = sequelize;
       ```

## crear modelo con sequelize

Necesitaremos dos cosas:

1. importar sequelize
   1. `const Sequelize = require("sequelize");`
2. importar nuestro archivo de conexión con la bbdd
   1. `const sequelize = require("../util/database");`
      1. En este archivo no solo genera la conexión con la bbdd si no que genera todo un entorno de sequelize que os permite crear un nuevo modelo

### Creación de product model

Definimos los atributos que tendrá nuestro modelo, campos de la tabla y características como primary_key, campos not null,...

1.  ```javascript
    const Product = sequelize.define("product", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primayKey: true,
      },
      title: Sequelize.STRING, // si solo queremos definir una característica
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });

    module.exports = Product;
    ```

### Creación de User model

Creamos este nuevo modelo para imitar la funcionalidad de login y dar un ejemplo de asociaciones/ relaciones con sequelize.

```javascript
const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
```

### usando el modelo de sequelize

Una vez definido el modelo sequelize puede crear esa tabla en nuestra bbdd, para ello en nuestro archivo app.js usamos el método `sync()` del obeto sequelize exportado en el archivo de `utils/database`. Este método revisa los modelos creados en sequelize y lo sincroniza con la bbdd si ya encontrase la tabla en la bbdd no la sobreescribe.

Si hemos modificado algo de las tablas, un campo por ejemplo, al hacer sync como la tabla ya está creada no la sobreescribe con los nuevos cambios, para forzar estos tenemos q añadir `{force:true}` borrará los datos qye ya tengamos almacenados en las tablas.

```javascript
//-----IMPORT DB
const sequelize_db = require("./util/database");
//------------ FIN IMPORTS ----------------

sequelize_db
  .sync({ force: true })
  .then((result) => {
    console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
```

```javascript
//-----IMPORT DB
const sequelize_db = require("./util/database");
//------------ FIN IMPORTS ----------------

sequelize_db
  .sync()
  .then((result) => {
    console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
```

Cuando arranquemos nuestra app nos creará la tabla en la bbdd, tiene dos particularidades la tabla la pone en plural, productos, y añade dos campos, createdAt y udatedAt.

![not found](img/img-38.png)

## Reescribiendo los controladores

### admin controller

#### Crear un nuevo producto

```javascript
module.exports.postAddProduct = (req, res, next) => {
  const title = req.body.title,
    imgUrl = req.body.imgUrl,
    price = req.body.price,
    description = req.body.description;

  Product.create({
    title: title,
    imgUrl: imgUrl,
    price: price,
    description: description,
  })
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
```

#### obtener todos los productos de la bbdd

Usando el método `findAll()`

```javascript
module.exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/index", {
        items: products,
        pageTitle: "Shop_ejs",
        path: "/",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
```

#### obtener un producto por su primary_key

Usamos el método `findByPK`

```javascript
module.exports.getProduct = (req, res, next) => {
  Product.findByPk(req.params.productId)
    .then((product) => {
      res.render("shop/product-detail", {
        product: product,
        pageTitle: "product detail",
        path: "/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
```

Podemos usar el método `findAll()` con condiciones `where` tenemos que tener en cuenta que al usar este método nos devuelve un array.

```javascript
Product.findAll({
  where: {
    id: req.params.productId,
  },
})
  .then((products) => {
    res.render("shop/product-detail", {
      product: products[0],
      pageTitle: "product detail",
      path: "/products",
    });
  })
  .catch((err) => {
    console.log(err);
  });
```

#### update a product

podemos hacerlo de dos maneras, usando el método `update`

```javascript
module.exports.postEditProduct = (req, res, next) => {
  //Product.editProduct(req.body);
  Product.update(
    {
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      imgUrl: req.body.imgUrl,
    },
    { where: { id: req.body.id } }
  );
  res.redirect("/admin/products");
};
```

o bien obtener el producto `findByPk` modificarlo y guardar los cambios con el método `save()` con este mñetodo si el artículo no existe lo creará.

```javascript
module.exports.postEditProduct = (req, res, next) => {
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;
  const updatedImgUrl = req.body.imgUrl;

  Product.findByPk(req.body.id)
    .then((product) => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDescription;
      product.imgUrl = updatedImgUrl;

      return product.save(); // el return aquí me permite añadir el then siguiente y si hubiese un error en save() sería manejado por el catch
    })
    .then((result) => {
      console.log("updted product");
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};
```

#### delete a product

Para ello usamos el método `destroy()`

```javascript
module.exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.prodId;
  Product.findByPk(prodId)
    .then((product) => {
      return product.destroy();
    })
    .then((result) => {
      console.log(result);
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};
```

## relaciones o asociaciones con sequelize

source : https://sequelize.org/master/manual/assocs.html

Sequelize soporta las relaciones básicas:

1. **one-to-one**
2. **One-to-Many**
3. **Many-to-Many**

En sequelize para poder hacer estas relaciones usamos

1. **.hasOne()**
2. **.hasMany()**
3. **.belongsTo()**
4. **.belongsToMany()**

### Opciones de los métodos

Podemos añadir opciones a la llamada de los métodos pasando un segundo parámetro.

#### onDelete and onUpdate

Por defecto en una relación one-to-one / one-to-Many:

1. `on delete` está como `set Null`,
   lo que significa que si se borra un registro de la tabla madre la foreign key se setea como Null.
2. `on update` está como `cascade`,
   lo que significa que si se actualiza un registro de la tabla madre la tb se actualiza en la taba hija

En una relación many-to-many:

1. `on delete` está como `cascade`
2. `on update` está como `cascade`

Las posibles opciones son `RESTRICT`, `CASCADE`, `NO ACTION`, `SET DEFAULT` and `SET NULL`

RESTRICT=> restringido, no permite borrar/actualizar un registro q una foreign_key
Esto se puede cambiar de la siguiente manera:

```javascript
Foo.hasOne(Bar, {
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});
Bar.belongsTo(Foo);
```

#### Customizing the foreign key

Podemos cambiar los nombres de la foreign keys

```javascript
// Option 1
Foo.hasOne(Bar, {
  foreignKey: "myFooId",
});
Bar.belongsTo(Foo);

// Option 2
Foo.hasOne(Bar, {
  foreignKey: {
    name: "myFooId",
  },
});
Bar.belongsTo(Foo);

// Option 3
Foo.hasOne(Bar);
Bar.belongsTo(Foo, {
  foreignKey: "myFooId",
});
```

#### Asociación obligatoria u opcional

Por defecto en sequelize todas las foreignKey pueden ser null, lo que permite q una entidad A pueda existir sin requerir la entidad B.

Esto se puede cambiar, que una entidad no pueda existir sin otra entidad, para ello debemos especicar un segundo parámetro a las llamadas de los métodos.

```javascript
Foo.hasOne(Bar, {
  foreignKey: {
    allowNull: false,
  },
});
```

### one-to-one

Una relación de este tipo se establece entre dos entidades, A y B, cuando un elemento de la entidad A solo puede estar unido a un elemento de la entidad B y viceversa, por ejemplo conjunto de humanos del planeta y conjunto de los cerebros humanos del planeta (:P).

La cosa se leería así:

1.  cada humano tiene un cerebro
2.  cada cerebro pertenece a un humano

Para escribir este tipo de relación con sequelize usamos:

```javascript
human.hasOne(brain);
brain.belongsTo(human);
```

Esta relación se resume en que un único registro de la tabla A está unido únicamente a un registro de la tabla B.

Para poder unir ambas tablas se debe usar una `foreign_key`, en una relación one-to-one la foreign_key puede ir en una u otra tabla. La foreignKey es la primary key de la tabla madre. La manera de escribir los métodos establece en qué tabla se escribe la foreing_key. Por ejemplo:

```javascript
human.hasOne(brain);
brain.belongsTo(human);
```

La foreign_key se escribe en la tabla brain, lo marca el método hasOne().

A la entidad/modelo situada a la izquierda del punto se le llama entidad **source**/**origen** y la que está a la derecha entidad/modelo **target**/**objetivo**

Cuando usamos .hasOne() la entidad origen (human) gana los siguientes métodos especiales, son del tipo **promesas**:

1. human.getBrain()
2. human.setBrain()
3. human.createBrain()

Cuando usamos .belongsTo()

1. brain.getHuman()
2. brain.setHuman()
3. brain.createHuman()

### one-to-Many

Una relación de este tipo se establece entre dos entidades, A y B cuando un elemento de la unidad A puede estar ligado a varios elementos de la entidad B pero un elemento de la entidad B solo puede estar unido a un único elemento de la entidad A, por ejemplo un libro (A) y sus páginas (B):

La cosa se leería así:

1.  un libro tiene varias páginas
2.  todas estas páginas pertenecen a un único libro

Un source(libro) lo conectamos con múltiples targets(páginas) y todos estos targets(páginas) se conectan con una única fuente(libro).

Teniendo esto claro sólo hay un lugar donde la foreign key puede ir y es en cada uno de los registros target, es decir book_id será la foreign_key de los distintos registros de la tabla páginas, ya que si fuera al revés tendrámos múltiples foreign_keys (correspondientes a cada página) para colocarlas en un único registro (libro)

Para escribir este tipo de relación con sequelize usamos:

```javascript
book.hasMany(page);
page.belongsTo(book);
```

Esta relación se resume en que un único registro de la tabla A está unido a múltiples resgistros de la tabla B pero un registro de la tabla B solo está unido a un registro de la tabla A

Cuando usamos .hasMany() la entidad origen (book) gana los siguientes métodos especiales:

1. book.getPages()
2. book.countPages()
3. book.hasPage()
4. book.hasPages()
5. book.setPages()
6. book.addPage()
7. book.addPages()
8. book.removePage()
9. book.removePages()
10. book.createPage()

Cuando usamos .belongsTo()

1. page.getBook()
2. page.setBook()
3. page.createBook()
4.

### Many-to-Many

Una relación de este tipo se establece entre dos entidades, A y B cuando un elemento de la unidad A puede estar ligado a varios elementos de la entidad B y viceversa, por ejemplo un producto (A) y carrito de compra (B):

La cosa se leería así:

1.  un producto puede pertenecer a varios carritos de compra
2.  un carrito de compra puede tener varios productos

o actor (A) y movie(B)

La cosa se leería así:

1.  un actor puede participar en varias peliculas
2.  en una pelicula pueden participar varios actores

Para escribir este tipo de relación con sequelize usamos:

```javascript
movie.belongsToMany(actor, { through: ActorMovies });
actor.belongsToMany(movie, { through: ActorMovies });
```

Cuando usamos `belongsToMany` nos bliga a especificar el nombre (String) de la tabla auxiliar, también se le puede pasar un modelo ya hecho.

Este tipo de relaciones se implementan en la bbdd creando una tabla llamada `tabla asociativa` o tb **join table** o **through table**, que en código de arriba hay que especificar el nombre de esta tabla, ActorMovies, la cual está formada por dos foreign_keys (movie_id y actor_id) y la primary_key de esta tabla está formada por la unión de las dos foreign_key.
Esta tabla aux es necesaria xq a diferencia de las otras dos relaciones, en un many-to-many tendríamos que tener multiples foreign_keys an ambas tablas lo q no es posible por lo q generamos una tabla aux donde cada registro esrtá formado por movie_id y actor_id, esta combinación siempre será diferente para una movie_id (por ejmplo id:1) tendremos diferentes actor_id(por ejemplo id:1,2,3) así la primary_key resultante sería 1-1, 1-2, 1-3,... enlazando una pelicula con varios actores o al revés ese mismo actor con otras movies 2-3, 3-3,4-3, ...

```javascript
const Movie = sequelize.define("Movie", { name: DataTypes.STRING });
const Actor = sequelize.define("Actor", { name: DataTypes.STRING });

Movie.belongsToMany(Actor, { through: "ActorMovies" });
Actor.belongsToMany(Movie, { through: "ActorMovies" });
```

la consulta sql resultante sería:

```sql
CREATE TABLE IF NOT EXISTS "ActorMovies" (
  "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  "MovieId" INTEGER REFERENCES "Movies" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  "ActorId" INTEGER REFERENCES "Actors" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  PRIMARY KEY ("MovieId","ActorId")
);
```

Esta tabla auxiliar la crea automáticamene sequelize solo le tenemos que especificar un nombre, aunque también le podemos pasar un modelo ya hecho y sequealize añada las foreign keys y la primary key

```javascript
const Movie = sequelize.define("Movie", { name: DataTypes.STRING });
const Actor = sequelize.define("Actor", { name: DataTypes.STRING });
// aux table
const ActorMovies = sequelize.define("ActorMovies", {
  MovieId: {
    type: DataTypes.INTEGER,
    references: {
      model: Movie, // 'Movies' would also work
      key: "id",
    },
  },
  ActorId: {
    type: DataTypes.INTEGER,
    references: {
      model: Actor, // 'Actors' would also work
      key: "id",
    },
  },
});
Movie.belongsToMany(Actor, { through: ActorMovies });
Actor.belongsToMany(Movie, { through: ActorMovies });
```

```sql
CREATE TABLE IF NOT EXISTS "ActorMovies" (
  "MovieId" INTEGER NOT NULL REFERENCES "Movies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  "ActorId" INTEGER NOT NULL REFERENCES "Actors" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  UNIQUE ("MovieId", "ActorId"),     -- Note: Sequelize generated this UNIQUE constraint but
  PRIMARY KEY ("MovieId","ActorId")  -- it is irrelevant since it's also a PRIMARY KEY
);

```

Por defecto una relación many-to-many tiene:

1. `on delete` está como `cascade`
2. `on update` está como `cascade`

Cuando usamos .belongsToMany() la entidad origen gana los siguientes métodos especiales:

1. cart.getProducts()
2. cart.countProducts()
3. cart.hasProduct()
4. cart.hasProducts()
5. cart.setProducts()
6. cart.addProduct()
7. cart.addProducts()
8. cart.removeProduct()
9. cart.removeProducts()
10. cart.createProduct()

---

Vamos a comprobar como los diferentes modelos de nuestra app se relacionan entre sí

![not found](img/img-39.png)

Para construir estas relaciones hacemos:

1. Que un usuario puede crear un producto y que un producto solo puede ser creado por un usuario concreto, por defecto sequelize genera un nuevo campo en product que será `userId` la foreign_key y establece on delete / on update como cascada (si se borra/actualiza el usuario que ese producto tb se borre/actualice)
2. finalmente establecemos que un usuario puede crear variosproductos

```javascript
const sequelize_db = require("./util/database");
const User = require("./model/user");
const Product = require("./model/product");

Product.belongsTo(User);
User.hasMany(Product);

sequelize_db
  .sync({ force: true })
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
```

Con estos métodos podems modificar el nombre de la foreign_key y como queremos q actue onDelete y onUpdate.

```javascript
Product.belongsTo(User, {
  foreignKey: "usuario",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});
```

una vez actualizada las tablas con sus relaciones quitamos lo de (force:true) para q no nos borre las tablas cada vez q nos conectamos.

## creación de un user (simple)

Creamos un usuario, para ello después de llamar al método sync() buscamos en la bbdd si hay registrado un user (User.findByPk(1)) esta consulta nos devuelve o bien un user o bien null, en el siguiente then chequeamos con un if estas dos opciones así q si devuelve un user hacemos return si no lo creamos y lo devolvemos. Todo return dentro de un then() es interpretado como una nueva promesa así que lo podemos capturar en un nuevo then y es en este último then donde ponemos a escuchar nuestro servidor.

```javascript
sequelize_db
  .sync()
  .then((result) => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({
        name: "David",
        email: "dmverges@gmail.com",
      });
    }
    return user;
  })
  .then((user) => {
    app.listen(3000);
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  });
```

Tenemos q añadir un código más y es guardar nuestro user activo en cada una de las llamadas al servidor (request) para ello utilizamos el middleware app.use, que se ejecuta con cvada llamada al servidor y creamos en el objeto request una variable user que contendrá nuestro objeto user de sequelize.

```javascript
app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});
```

CUando arrancamos el servidor con npm start, este código de arriba no se ejecuta xq no ha habido una request al servidor así q no tenemos problemas de que devuelva un null, se ejecutará siempre el sync() por lo q en la primera request ya tendremos un user en nuestra bbdd.

Una vez hecho esto cuando creamos un objeto hay q darle el ide del usuario que lo crea.

```javascript
module.exports.postAddProduct = (req, res, next) => {
  const title = req.body.title,
    imgUrl = req.body.imgUrl,
    price = req.body.price,
    description = req.body.description;

  Product.create({
    title: title,
    imgUrl: imgUrl,
    price: price,
    description: description,
    userId: req.user.id, // aquí añado el userId
  })
    .then((result) => {
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};
```

Ahora bien hay una manera más elegante de hacer esto y es que cuando establecemos una relación entre objetos de sequelize se crean métodos especiales, y uno de ellos es q con el método Product.belongsTo(User) lo que decimos con esto es q un product depende de un user le da los objetos user un metodo para crear objetos del tipo productos (createProduct()), aprovechamos que guardamos el user en la request para crear productos asociados a ese usuario, de la siguiente manera:

```javascript
module.exports.postAddProduct = (req, res, next) => {
  const title = req.body.title,
    imgUrl = req.body.imgUrl,
    price = req.body.price,
    description = req.body.description;
  // con el objeto user del request creamos los productos
  req.user
    .createProduct({
      title: title,
      imgUrl: imgUrl,
      price: price,
      description: description,
    })
    .then((result) => {
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};
```

Otro método importante que nos genera sequelize es `getProducts()` para buscar productos desde el user concreto que los generó.

```javascript
module.exports.getEditProduct = (req, res, next) => {
  const prodId = req.params.prodId;

  req.user
    .getProducts({ where: { id: prodId } })
    .then((products) => {
      if (!products[0]) {
        return res.redirect("/");
      }

      res.render("admin/edit-product", {
        pageTitle: "Edi product - ejs",
        path: "/admin/edit-product",
        prodInfo: products[0],
      });
    })
    .catch((err) => console.log(err));
};
```

## Trabajando en el modelo de cart

Tenemos que tener en cuenta que un cart pertenece a un único user pero puede contener multiples productos y de cada producto puede pertenecer a más de uno cart. Así que:

```javascript
Product.belongsTo(User);
User.hasMany(Product);

User.hasOne(Cart);
//Cart.belongsTo(User) // se puede especificar xo es redundante

Cart.hasMany(Product);
Product.belongsToMany(Cart, { through: CartItem });
```

En la sentencia `Product.belongsToMany(Cart, { through: CartItem }); ` necesitamos una tabla auxiliar para poder hacer los emparejamientos entre el carro y todos los productos que contiene, mediante el atributo {through : CartItem} especificamos la tabla auxiliar que utilizaremos.

UNa vez hecho esto para cada usuario que se logea deberemos crearle un carrito:

```javascript
sequelize_db
  //.sync({ force: true })
  .sync()
  .then((result) => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({
        name: "David",
        email: "dmverges@gmail.com",
      });
    }
    return user;
  })
  .then((user) => {
    user
      .getCart()
      .then((cart) => {
        if (!cart) {
          user.createCart();
        }
        app.listen(3000);
      })
      .catch((err) => {
        console.log(err);
      });
    //return user.createCart();
  })
  .catch((err) => {
    console.log(err);
  });
```

## Eager Loading

source: https://sequelize.org/master/manual/eager-loading.html

El eager loading es lo equivalente a hacer una consulta con multiples joins y nos permite obtener información de otros modelos para conseguirlo utilizamos el `include`

```javascript
module.exports.getOrders = (req, res, next) => {
  req.user
    .getOrders({ include: { model: Product } })
    .then((orders) => {
      res.render("shop/orders", {
        pageTitle: "Orders",
        path: "/orders",
        orders: orders,
      });
    })
    .catch((err) => console.log(err));
};
```

# T-11 Usando MongoDB

Para trabajar con mongo usaremos mongoDB Atlas, es un servicio de bbdd en la nube.
Creamos nuestro proyecto y nuestro cluster. Una vez hecho esto tenemos que añadir usuarios que se podrán conectar a la bbdd cn el rol que queramos

![not found](img/img-40.png)

y también especificamos desde qué IP nos podremos conectar a la bbdd, nos da la opción de escoger nuestra IP local.

![not found](img/img-41.png)

Una vez hecho esto para conectar nuestra app a mongodb atlas necesitamos instalar el driver y la url de conexión

![not found](img/img-42.png)

Tener en cuenta que a mongodb Atlas le he puesto una IP pública de acceso pero cada vez que cierro el routter ésta cambia así que debo actualizarla cada vez.

## Instalamos MongoDB compass

```
sudo apt-get install libgconf-2-4
```

```
wget https://downloads.mongodb.com/compass/mongodb-compass_1.25.0_amd64.deb
```

```
sudo dpkg -i mongodb-compass_1.25.0_amd64.deb
```

![not found](img/img-44.png)

Arrancamos la app y nos permitirá conectarnos a mongodb Atlas mediante un string de conexión

![not found](img/img-45.png)

o a nuestro mongo local con `mongodb://127.0.0.1:27017`

## Conectar con mongodb Atlas

1. instalamos el driver de mongodb

```npm
npm install mongodb --save
```

2. creamos la conexción

```javascript
// archivo en la ruta ./util/database

// importo mongodb q en realidad es una clase
const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://david:dmv1104@node-app.j1vce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("connected");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

//exportamos
module.exports = mongoConnect;
```

![not found](img/img-43.png)

3. creamos la conexión en nuestro archivo principal de la app

```javascript
const mongoConnect = require("./util/database");

mongoConnect((client) => {
  console.log(client);
  app.listen(3000);
});
```

## Rehaciendo los modelos

En el controller de admin importamos el modelo product donde utilizamos sequelize para definir el modelo ahora con mongo.

Si implementamos la conexión a mongo desde cada modelo esto supondrá que cada vez que hagamos uso de estos modelos crearemos una nueva conexíon lo que no es muy eficiente.

Modificamos un poco el archivo de conexión:

```javascript
// importo mongodb q en realidad es una clase
const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://david:dmv1104@node-app.j1vce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
    .then((client) => {
      _db = client.db("node-app");
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "no database found";
};

//exportamos
module.exports.mongoConnect = mongoConnect;
module.exports.getDb = getDb;
```

Podemos modificar la bbdd de datos por defecto o bien cambiando la url
`"mongodb+srv://david:dmv1104@node-app.j1vce.mongodb.net/node-app?retryWrites=true&w=majority"`

o bien en el método

```javascript
_db = client.db("node-app");
```

con esta nueva aproximación exportamos dos métodos:

1. **mongoConnect**, mediante el cual establecemos la conexión cn la bbdd y se mantendrá funcionando
2. **getDb**, el cual nos permitirá recuperar en cualquier parte de nuestra app la bbdd a la q estamos conectados

Esto se puede hacer xq mongo gestiona varias interacciones simultáneas con la misma conexión a la bbdd mediante lo q se llama `connection pooling`, conexión varias queries.

Ahora en nuestro archivo app.js la conexión queda así:

```javascript
mongoConnect(() => {
  app.listen(3000);
});
```

Y en los archivos de los modelos cada vez que necesitemos acceso a la bbdd no tenemos que importar la conexión (mongoConnect) si no la función que nos recupera la bbdd (getDb)

### product model

Quedaría así:

```javascript
const getDb = require("../util/database").getDb;
const mongodb = require("mongodb");

class Product {
  constructor(title, price, description, imgUrl, userId) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imgUrl = imgUrl;
    this.userId = userId;
  }

  save() {
    const db = getDb();
    return db.collection("products").insertOne(this);
  }

  static fetchAll() {
    const db = getDb();
    return db.collection("products").find().toArray();
  }

  static getProductById(id) {
    const db = getDb();
    return db
      .collection("products")
      .find({ _id: new mongodb.ObjectId(id) })
      .next();
  }

  static editProduct(id, newTitle, newPrice, newDescription, newImgUrl) {
    const db = getDb();
    return db.collection("products").updateOne(
      { _id: new mongodb.ObjectId(id) },
      {
        $set: {
          title: newTitle,
          price: newPrice,
          description: newDescription,
          imgUrl: newImgUrl,
        },
      }
    );
  }

  static deletProduct(id) {
    const db = getDb();
    return db.collection("products").deleteOne({ _id: mongodb.ObjectId(id) });
  }
}

module.exports = Product;
```

#### Guardar un nuevo item

```javascript

  save() {
    const db = getDb();
    return db.collection("products").insertOne(this);
  }

```

en el controller

```javascript
//----Importamos la clase a modo de bbdd
const Product = require("../model/product");
//const User = require("../model/user");

module.exports.getAddProducts = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add-Product - ejs",
    path: "/admin/add-product",
  });
};

module.exports.postAddProduct = (req, res, next) => {
  const title = req.body.title,
    imgUrl = req.body.imgUrl,
    price = req.body.price,
    description = req.body.description;

  const product = new Product(title, price, description, imgUrl);

  product
    .save()
    .then((result) => {
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};
```

#### encontrar un elemento por ID

El método `find()` no devuelve una promesa si no que duelve un cursor. Esto es así xq en principio en una collection puede haber multitud de documents y no lo queremos cargar todos en memoria. Así que nos devuelve un cursor y le vamos pidiendo a este el siguiente (next()).

Para evitar que nos devuelva un cursor poque filtramos por id y estos son únicos podemos usar el método `finOne({_id:id})` así nos ahorramos el next()

Si sabemos que en esa collection hay pocos documentos (aprox 100) podemos transformar ese cursor en un array, entonces nos almacena todo los documents en el array.

`db.collection('product).find().toArray()`

para implementar el método para obtener un producto por id hay que tener en cuenta que el id de la bbdd es un `ObjectId` por lo que para compararlo hay q transformar el id string a ObjectId

Por eso después de usar find() hacemos .next() podríamos evitar llamar next() si hacemos findOne({\_id:})

```javascript
static getProductById(id) {
  const db = getDb();
  console.log(id);
  return db
    .collection("products")
    .find({ _id: new mongodb.ObjectId(id) })
    .next();
}
```

#### Modificar un item

Utilizo el método `updateOne()` y tengo que pasarle un campo mediante el que filtrar y con la variable `$set` especificar las modificaciones.

```javascript

static editProduct(id, newTitle, newPrice, newDescription, newImgUrl) {
  const db = getDb();
  return db.collection("products").updateOne(
    { _id: new mongodb.ObjectId(id) },
    {
      $set: {
        title: newTitle,
        price: newPrice,
        description: newDescription,
        imgUrl: newImgUrl,
      },
    }
  );
}
```

En la parte del controlador

```javascript
module.exports.postEditProduct = (req, res, next) => {
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;
  const updatedImgUrl = req.body.imgUrl;

  Product.editProduct(
    req.body.id,
    updatedTitle,
    updatedPrice,
    updatedDescription,
    updatedImgUrl
  )
    .then(() => {
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};
```

#### eliminar un item

Usando el método `deleteOne()` y pasándole un id como filtro elimino una única collection.

```javascript
static deletProduct(id) {
  const db = getDb();
  return db.collection("products").deleteOne({ _id: mongodb.ObjectId(id) });
}
```

en el controlador

```javascript
module.exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.prodId;
  Product.deletProduct(prodId)
    .then(() => {
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};
```

### Creando un modelo para users

Una vez creamos el modelo para usuarios, relacionamos el usuario con los productos que crea para ello incorporamos un nuevo campo en Product que será `userId`

```javascript
const getDb = require("../util/database").getDb;
const mongodb = require("mongodb");

class User {
  constructor(username, email, cart, _id) {
    this.username = username;
    this.email = email;
    this.cart = cart;
    this._id = _id;
  }

  save() {
    const db = getDb();
    db.collection("users").insertOne(this);
  }

  addToCart(product) {}

  static getUserById(userId) {
    const db = getDb();
    return db.collection("users").findOne({ _id: mongodb.ObjectId(userId) });
  }
}

module.exports = User;
```

Al modelo de user incorporo dos campos el `id` y el `cart`. Creo un middleware en nuestro archivo `app.js` de tal manera que en cada conexión recupero un user de la bbdd con toda su info (nombre,mail, \_id, carro) y creo un objeto user que carguo en una variable de la request para poder utilizar sus métodos en toda la aplicación, esto simularia un login automático:

```javascript
app.use((req, res, next) => {
  User.getUserById("603bda7a44321577317b79ce")
    .then((user) => {
      req.user = new User(user.username, user.email, user.cart, user._id);
      next();
    })
    .catch((err) => console.log(err));
});
```

Ahora añadimos un campo en el constructor de Product

```javascript
  constructor(title, price, description, imgUrl, userId) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imgUrl = imgUrl;
    this.userId = userId;
  }
```

### Cart model

Lo que haremos con mongo es crear un objeto cart dentro de la difinición de cada usuario, lo que se llama un documento embebido.

```javascript
  constructor(username, email, cart) {
  this.username = username;
  this.email = email;
  this.cart = cart; // { items:[ {itemId: _id, quantity: cantidad},... ]}
}
```

esta nueva variable será un objeto con un array items en su interior, con la siguiente estructura

```javascript
cart = {
  items: [
    { productId: ObjectId, quantity: 1 },
    { productId: ObjectId, quantity: 1 },
  ],
};
```

Para poder añadir tiems al cart necesitamos saber si ese producto se encuentra ya en el carro, para ello tendremos que hacer una búsqueda y comparar sus id's para ello debemos transformar el id a string de la siguiente manera:

```javascript
const cartProduct_index = this.cart.items.findIndex((prod) => {
  return prod.productId.toString() === product._id.toString();
});
```

con la función `findIndex()` nos dará el índice del array dnd se encuentra nuestro producto si no está devuelve un -1.

Cuando modificamos datos no es bueno trabajar directamente sobre los datos de la bbdd sino copiarlos y trabajar sobre estas copias.

```javascript
  addToCart(product) {
    const db = getDb();
    //creamos las variables q vamos a necesitar
    let updatedCartItems = [...this.cart.items],
      newQty,
      updatedCart;

    const cartProduct_index = this.cart.items.findIndex((prod) => {
      return prod.productId.toString() === product._id.toString();
    });

    if (cartProduct_index >= 0) {
      newQty = this.cart.items[cartProduct_index].quantity + 1;
      updatedCartItems[cartProduct_index].quantity = newQty;
    } else {
      updatedCartItems.push({
        productId: mongodb.ObjectId(product._id),
        quantity: 1,
      });
    }

    updatedCart = {
      items: updatedCartItems,
    };

    return db.collection("users").updateOne(
      { _id: mongodb.ObjectId(this._id) },
      {
        $set: {
          cart: updatedCart,
        },
      }
    );
  }
```

Ahora queremos obtener todos los productos que contiene nuestro carrito. Para ello utilizaré una sintaxi especial de mongoDB \$in, utilizando `find({_id:{$in: []}})` me permite buscar los productos que cumplan la condición, que su id se encunetre en el array que establezco con el parámetro \$in.

```javascript
  getCart() {

    const db = getDb();
  // obtengo en un array todos los ids de los productos que tengo en el cart
    const prodIds = this.cart.items.map((item) => item.productId);

    return db
      .collection("products")
      .find({ _id: { $in: prodIds } })
      .toArray()
      .then((products) => {
        return products.map((product) => {
          return {
            ...product,
            quantity: this.cart.items.find((i) => {
              return i.productId.toString() == product._id.toString();
            }).quantity,
          };
        });
      })
      .catch((err) => console.log(err));
  }
```

Eliminar produtos del carro

```javascript
  deleteProductById(prodId) {
    const db = getDb();
    let updatedCartItems = [...this.cart.items],
      newQty;

    const indexProduct = updatedCartItems.findIndex(
      (p) => p.productId.toString() === prodId.toString()
    );

    if (indexProduct >= 0) {
      newQty = updatedCartItems[indexProduct].quantity - 1;

      if (newQty <= 0) {
        updatedCartItems.splice(indexProduct, 1);
      } else {
        updatedCartItems[indexProduct].quantity = newQty;
      }

      return db
        .collection("users")
        .updateOne(
          { _id: mongodb.ObjectId(this._id) },
          { $set: { cart: { items: updatedCartItems } } }
        );
    }
  }
```

### order model

Haremos algo parecido a lo q hicimos con cart, embebiremos el document order en el modelo de user. Creamos un método `addOrder` en el modelo User donde reseteamos el cart del user y creamos en la bbdd una nueva collection, orders, pasando todo el contenido de cart y tb borramos en la bbdd el array items.

```javascript
addOrder() {
  const db = getDb();
  let order;

  return this.getCart()
    .then((products) => {
      order = {
        items: products,
        user: {
          _id: mongodb.ObjectId(this._id),
          name: this.username,
        },
      };
      return db.collection("orders").insertOne(order);
    })
    .then((result) => {
      this.cart = { items: [] };
      db.collection("users").updateOne(
        { _id: mongodb.ObjectId(this._id) },
        {
          $set: {
            cart: { items: [] },
          },
        }
      );
    })
    .catch((err) => console.log(err));
}
```

Cuando queremos recuperar las orders de un user. Cuando hacemos un find() y queremos buscar por un campo dentro de otro campo debemos usar comillar.

```javascript
getOrders() {
  const db = getDb();
  return db
    .collection("orders")
    .find({ "user._id": mongodb.ObjectId(this._id) })
    .toArray();
}
```

# T-12 Usando Mongoose

## Que es mongoose?

Mongoose es un ODM (Object-Document-Mapping Lirary) para mongoDB. Éste nos permitirá simplificar la sintaxi, por ejemplo cuando quereamos añadir datos a una collection podremos hacerlo de la siguiente manera:

![not found](img/img-46.png)

Básicamente nos permitirá trabajar con objetos javaScript y los covertirá en collections y documents. Y podremos ejectar queries directamente sobre instancias de esos objetos.

## Instalar mongoose

web oficial https://mongoosejs.com/

```javascript
npm install mongoose --save
```

## Trabajando con mongoose

### Conectar con nuestra bbdd

Mongoose ya tiene utilidad de gestión de la conexión, todo es transparente al usuario. Así que podemos borrar nuestro archivo de conexión database.js.

Así que en mi archivo app.js importo mongoose y genero la conexión con mongo Atlas

Tener en cuenta que en la URL suministrada por Atlas puedo cambiar la bbdd por defecto así que le pongo un nuevo nombre, `shop-mongoose`

```javascript
//-----IMPORT

const mongoose = require("mongoose");

//------establcemos la conexion

mongoose
  .connect(
    "mongodb+srv://david:dmv1104@node-app.j1vce.mongodb.net/shop-mongoose?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
```

### Product model

Para crear un modelo/schema con mongoose utilizamos la siguiente sintaxi. Cuando definimos los campos del modelo debemos especificar el tipo de dato(importante). Lo que parece contradictorio ya que mongoDB se caracteriza por no tener un esquema fijo, es decir los datos que almacenamos en cada documento dentro de una conllection pueden variar. Pero mongoose no restringe esta flexibilidad pero si necesita para funcionar que nuestros datos tengas un cierta estructura.

```javascript
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
```

Para poder usar este schema de mongoose debemos exportarlo de una manera especial, usando el método `model()`

#### CRUD con mongoose

##### Create

Ahora en el admin controller podemos crear nuevos productos y guardardarlos en la bbdd, cuando guardemos un schema(Product) por primera vez mongoose generará una collection con el mismo nombre pero en plural.

En el campo `userId` almacenamos todo el objeto user en lugar de solo el \_id pq mongoose trabaja mejor así, ya se encargará de coger el \_id.

```javascript
//----Importamos el schema/model creado con monogoose.
const Product = require("../model/product");
//--------------
module.exports.postAddProduct = (req, res, next) => {
  const title = req.body.title,
    imgUrl = req.body.imgUrl,
    price = req.body.price,
    description = req.body.description;
  // creamos el objeto usando sintaxi mongoose
  const product = new Product({
    title: title,
    price: price,
    description: description,
    imgUrl: imgUrl,
    userId: req.user,
  });
  //guardamos el bjeto usando método save suministrado por monogoose
  product
    .save()
    .then((result) => {
      console.log("added" + result);
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};
```

##### Read

Para poder ver los productos de la bbdd tenemos que modificar lo siguiente en el controller shop. Mongoose tb tiene un método find() pero no nos devuelve un cursor si no todos los datos de la collection en forma de array, sii sabemos que son muchos podemos convertirlo en cursor con `Product.find().cursor().next()` pero nosotros los obtendremos todos.

```javascript
module.exports.getProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      console.log(products);
      res.render("shop/product-list", {
        items: products,
        pageTitle: "All products",
        path: "/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
```

Si queremos buscar un poducto en concreto mongoose tiene un método `findById()` que le podeemos pasar el id en forma de string que mongoose se encarga de transformarlo a ObjectId() para poder compararlo.

##### Update

Para modificar un objeto, podemos usar el modo `findById()` lo que nos devuelve no es un objeto tipo JS sino un objeto de mongoose sobre el cual podemos llamar métodos como `save()`, si llamamos save() sobre un objeto existente en la bbdd lo que conseguimos es guardar los cambios del obeto(update)

```javascript
module.exports.postEditProduct = (req, res, next) => {
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;
  const updatedImgUrl = req.body.imgUrl;

  Product.findById(req.body.id)
    .then((product) => {
      // recuperamos el objeto tipo mongoose

      product.title = updatedTitle;
      product.price = updatedPrice;
      product.imgUrl = updatedImgUrl;
      product.description = updatedDescription;
      // llamamos al método save() sobre el mongoose object
      return product.save();
    })
    .then(() => {
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};
```

##### Delete

Para eliminar un documento podemos usar el método `findByIdAnDelete()`

```javascript
module.exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.prodId;
  Product.findByIdAndDelete(prodId)
    .then(() => {
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};
```

### User model

Creamos el modelo para User y este schema será un poco más complejo pq contiene un document embedido.

```javascript
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cart: {
    items: [
      {
        productId: { type: Schema.Types.ObjectId, required: true },
        quantity: { type: Number, required: true },
      },
    ],
  },
});

module.exports = mongoose.model("User", userSchema);
```

Una vez definido nuestro schema xa user creamos uno cuando se levante el servidor, con el condicional si no existe ninguno en la bbdd, ya q `finOne()` devuelve el primero que encuentre.

```javascript
mongoose
  .connect(
    "mongodb+srv://david:dmv1104@node-app.j1vce.mongodb.net/shop-mongoose?retryWrites=true&w=majority"
  )
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "David Martin",
          email: "dmverges@gmail.com",
          cart: {
            items: [],
          },
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
```

una vez lo tenemos almacenado en la bbdd podemos activar el middleware que permitirá guardar el objeto user (es un objeto de mongoose, por lo tanto con todos sus métodos) en cada request.

```javascript
app.use((req, res, next) => {
  User.findById("604935bbbb2da1de484b55b8")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});
```

### Establecer relaciones con mongoose

Cuando tenemos modelos que están relacionados como en nuestro caso Products y Users, en la definición del modelo podemos especificar un campo `ref` y el nombre del modelo el que indicamos en la sentencia `module.exports = mongoose.model("User", userSchema);` por ejemplo `(ref:'User')`. Entonces los modelos quedan de la siguiente manera:

```javascript
const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
```

```javascript
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
  },
});

module.exports = mongoose.model("User", userSchema);
```

### Obtener datos de modelos relacionados

Hay métodos que nos pueden ayudar a obtener los datos:

1. `select('field1 field2')`
2. `populate('fieldName')`

#### select()

Select en combinación con `fin()` permite obtener solo los campos especificados, por defecto siempre se devuele el \_id si lo queremos evitar especificamos `-_id`.

```javascript
Product.find()
  .select("title price -_id")
  .then((prdocts) => {
    console.log(products);
  })
  .catch((err) => console.log(err));
```

#### populate()

Ahora mismo nuestros productos guardados en la bbdd cuentan con un campo `userId` que es una referencia al modelo user. El campo tiene esta estructura definida en el modelo

```javascript
userId: {
  type: Schema.Types.ObjectId,
  ref: "User",
  required: true,
},
```

el producto almacenado en la bbdd tiene esta estructura:

```javascript
{
  _id: ObjectId(604c8c0f9afa3725d624425d),
  title: 'book-2',
  price: 3.99,
  description: '5eu4j455444',
  imgUrl: 'https://static2planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/70/original/portada_el-senor-de-los-anillos-iii-el-retorno-del-rey_j-r-r-tolkien_201505211337.jpg',
  userId: ObjectId(6049388ff1f3dae6be7e56a8),
  __v: 0
}
```

Podemos obtener los datos asociados al campo `userId` de product utilizando un método de mongoose llamado `populate('userId')` especificando el campo con referencia. Este método se utiliza en combinación con `find()`. Podemos añadir otro argumento, del tipo string, a populate('userId', 'field1', 'field2 field2.1 field2.3') este segundo argumento indica los campo que queremos obtener del modelo especificado (User) funciona como `select()`

```javascript
module.exports.getAdminProducts = (req, res, next) => {
  Product.find()
    .populate("userId")
    .then((products) => {
      console.log(products);
      res.render("admin/products", {
        items: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    })
    .catch((err) => console.log(err));
};
```

Los datos que nos devuelve son además de los datos del Product todos los datos referentes al usuario:

```javascript
{
    _id: 604c8c0f9afa3725d624425d,
    title: 'book-2',
    price: 3.99,
    description: '5eu4j455444',
    imgUrl: 'https://static2planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/70/original/portada_el-senor-de-los-anillos-iii-el-retorno-del-rey_j-r-r-tolkien_201505211337.jpg',
    userId: {
      cart: [Object],
      _id: 6049388ff1f3dae6be7e56a8,
      name: 'David Martin',
      email: 'dmverges@gmail.com',
      __v: 0
    },
    __v: 0
  }

```

No es necesario utilizar populate con find() podemos llamar al método pobre un modelo que sabemos que uno de sus campos está enlazado con otro modelo.

### Trabajando en el cart

#### Añadir productos al cart

Para añadir productos al cart esente en cada user teníamos un método en user, Con mongoose podemos añadir a los models nuestros propios métodos:

```javascript
userSchema.methods.addToCart = function (product) {
  let updatedCartItems = [...this.cart.items],
    newQty,
    updatedCart;

  const cartProduct_index = this.cart.items.findIndex((prod) => {
    return prod.productId.toString() === product._id.toString();
  });

  if (cartProduct_index >= 0) {
    newQty = this.cart.items[cartProduct_index].quantity + 1;
    updatedCartItems[cartProduct_index].quantity = newQty;
  } else {
    updatedCartItems.push({
      productId: product._id,
      quantity: 1,
    });
  }
  updatedCart = {
    items: updatedCartItems,
  };
  this.cart = updatedCart;
  return this.save();
};
```

Hay pequeñas diferencias con el anterior y es que los \_id los podemos usar directamente, no es necesario hacer `mongodb.ObjectId(product._id)` y que una vez modificado el cart solo tenemos que llamar al método `save()` no tenemos que hacer un update específicamente, ya que mongoose si detecta que ya existe ese registro, en nugar de guardar uno nuevo sobreescribirá el anterior.

#### Pintar productos del cart

Tenemos que tener en cuenta varias cosas, `populate()`por si mismo no devuelve nada tiene que estar asociado a un método de búsqueda como find() por ejemplo si ejecuto :

```javascript
const x = req.user.populate("cart.items.productId");

console.log(x);
```

me devuelve

```javascript
{
  cart: { items: [ [Object] ] },
  _id: 6049388ff1f3dae6be7e56a8,
  name: 'David Martin',
  email: 'dmverges@gmail.com',
  __v: 0
}
```

los datos del user sin más, como si hubiese hecho `req.user` Ahora bien si lo asocio a un find()

```javascript
Product.find()
  .populate("userId")
  .then((r) => {
    console.log(r);
  });
```

me devuelve los productos con los datos del user asociados

```javascript
  {
    _id: 604c8c0f9afa3725d624425d,
    title: 'book-2',
    price: 3.99,
    description: '5eu4j455444',
    imgUrl: 'https://static2planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/70/original/portada_el-senor-de-los-anillos-iii-el-retorno-del-rey_j-r-r-tolkien_201505211337.jpg',
    userId: {
      cart: [Object],
      _id: 6049388ff1f3dae6be7e56a8,
      name: 'David Martin',
      email: 'dmverges@gmail.com',
      __v: 0
    },
    __v: 0
  }
```

Si quisiera ejecutar un populate() directamente porque sé que el campo está enlazado con otro modelo entonces tengo que usar el método `execPopulate()`

```javascript
req.user
  .execPopulate("cart.items.productId")
  .then((userEnhanced) => {
    console.log(userEnhanced);
  })
  .catch((err) => console.log(err));
```

esto me devuelve

```javascript
{
  cart: { items: [ [Object] ] },
  _id: ObjectId(6049388ff1f3dae6be7e56a8),
  name: 'David Martin',
  email: 'dmverges@gmail.com',
  __v: 0
}
```

con la diferencia que cart.items contiene toda la info de los productos, para poder acceder a ella solo tengo q navegar por el objeto.

```javascript
req.user
  .execPopulate("cart.items.productId")
  .then((userEnhanced) => {
    console.log(userEnhanced.cart.items);
  })
  .catch((err) => console.log(err));
```

esto nos devuelve el array de los items junto con la info de los productos, si quisieramos solo cierta info del producto podemos añadir un segundo argumento al método

```javascript
  req.user
    //.populate("cart.items.productId")
    .execPopulate("cart.items.productId", "title")
    .then((datos) => {
      console.log(datos.cart.items);
```

#### Eliminar productos del cart

Para ello extenderemos la funcionalidad de nuestro model User añadiendo un método

```javascript
userSchema.methods.deleteProductById = function (prodId) {
  let updatedCartItems = [...this.cart.items],
    newQty;

  const indexProduct = updatedCartItems.findIndex(
    (p) => p.productId.toString() === prodId.toString()
  );

  if (indexProduct >= 0) {
    newQty = updatedCartItems[indexProduct].quantity - 1;

    if (newQty <= 0) {
      updatedCartItems.splice(indexProduct, 1);
    } else {
      updatedCartItems[indexProduct].quantity = newQty;
    }

    this.cart.items = updatedCartItems;
    return this.save();
  }
};
```

### order model

Creamos un nuevo modelo para orders

```javascript
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  products: [
    {
      product: { type: Object, require: true },
      quantity: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model("Order", orderSchema);
```

#### creando una orden

Siguiendo el esquema que hemos definido para una orden.

`_doc` es para que del objeto que obtengo de la bbdd solo coja los datos que hemos almacenado nosotros directamente como title, que no devuelva otros datos propios de la bbdd como info sobre la collection o document y cosas así

```javascript
module.exports.postOrder = (req, res, next) => {
  req.user
    .execPopulate("cart.items.productId")
    .then((user) => {
      const products = user.cart.items.map((item) => {
        return { quantity: item.quantity, product: { ...item.productId._doc } };
      });

      const order = new Order({
        user: {
          name: req.user.name,
          userId: req.user,
        },
        products: products,
      });
      return order.save();
    })
    .then((result) => {
      req.user.cart = {
        items: [],
      };
      return req.user.save();
    })
    .then((result) => {
      res.redirect("/orders");
    })
    .catch((err) => console.log(err));
};
```

#### obtener las orders

```javascript
module.exports.getOrders = (req, res, next) => {
  Order.find({ "user.userId": req.user._id })
    .then((orders) => {
      console.log(orders);
      res.render("shop/orders", {
        pageTitle: "Orders",
        path: "/orders",
        orders: orders,
      });
    })
    .catch((err) => console.log(err));
};
```

# T13 - Sessions and cookies

Las cookies son datos que almacenamos en el browser del user. Por ejemplo un usuario se logea en nuestra app, rellena el login form y hace una petición al server este, si la info es correcta devuelve una respuesta, por ejemplo lo redirige a otra página de la app pero además le manda una cookie via response header con info del user por ejemplo que el usuario está autenticado y lo almacena en el browser. En las subsiguientes peticiones del user enviar de veulta esa cookie con la info q vamos almacenando.

Lo bueno de las cookies es q son exclusivas de usuarios, se almacenan en el navegador de usuario que genera la petición.

![not found](img/img-47.png)

En esta sección solo nos centraremos en como trabajar con cookies, no haremos comprobacionesde las credenciales.

Cosas a tener en cuenta:

1. Cada petición al servidor se trata de manera independiente, incluso aunq vengan de la misma ip.
2. Cuando hago un `res.redirect()`esto crea una nueva request al servidor.

3.

```javascript
app.use((req, res, next) => {
  User.findById("6049388ff1f3dae6be7e56a8")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});
```

Este código se encunetra en mi archivo de entrada a la app, para cada request, lo primero que hacía antes de que se pudiera acceder a las routes
`app.use("/admin", adminRoutes.routes); app.use(shopRoutes); ` (recordemos que node se lee de arriba hacia abajo) es crear una variable `user` en la request. Pero si en un controller hacemos :

```javascript
req.isLogged = true;
res.redirect("/");
```

al hacer un redirect se crea una nueva request y la variable `isLogged` se pierde junto a la request inicial.

4. Para poder tranmitir información a toda la app en este puntp hay q hacer una cookie.

## creando una cookie

Para crear una cookie usamos:

```javascript
res.setHeader("set-cookie", "loggIn=true");
```

La cookie acepta como info pares clave-valor. Una vez creada para ese usuario el navegador la enviará para cada request.

Podemos encadenar varios pares clave-valor separados por ';'. Hay algunas keywords como:

1. `Expires` para fijar cuando se eliminará la cookie la fecha debe seguir un formato http date format. Si no se especifica este valor por defecto la cookie se borra al cerra el navegador.
   1. `res.setHeader('set-cookie','Expires=Expires=Thu, 31 Oct 2021 07:28:00 GMT');`
2. `Max-Age` hay que especificar un valor en segundos
   1. `res.setHeader('set-cookie','Max-Age=10');`
3. `Secure` para especificar que la cookie solo se cree en servidores seguros https `res.setHeader('set-cookie','Secure');`
4. `HttpOnly` permite definir que la info de la cookie solo se puede leer usando peticiones http no desde JS del cliente

![not found](img/img-48.png)

Ahora si generamos una nueva petición al servidor vemos como en la cabecera de la request manda la cookie

![not found](img/img-49.png)

El punto malo de las cookies es q el usuario puede manipular su contenido así que no debemos almacenar info importante en ellas. Para esos casos tenemos las sessions.

## creando sessiones

Hemos visto cómo las cookies se crean en el cliente, en cambio las sessions las creamos en el servidor, esta sessions se compartirá para todas las request del mismo usuario. La info de la session puede estar almacenada en ls bbdd o en memoria del servidor. Para ello cada vez que el user hace la request tiene q comunicarle al server cual es su sesión. Para poder hacer esto almacenaremos el ID de la sesión en una cookie pero encriptado.

Todo este proceso de creación de la cookie lo gestiona el package `express-session`.

Será la session la que contendrá info sensible del user.

![not found](img/img-50.png)

### **IMPLEMENTACIÓN DE UNA SESSION**

Para ello necesitaremos un paquete de terceros. Instalamos `express-sessions`

```javascript
npm install express-session --save
```

Configuramos el middleware para generar la session

```javascript
const session = require("express-session");

app.use(
  session({ secret: "my secret", resave: false, saveUninitialized: false })
);
```

Vamos a nuestro controller auth, ahora en la request tenemos un campo session donde podemos almacenar info. Esto creará una cookie automáticamente con el id de la session a la q pertenece.

```javascript
module.exports.postLogin = (req, res, next) => {
  req.session.isLogged = true;
  res.redirect("/");
};
```

![not found](img/img-51.png)

Con esta aproximación generamos a cada conexión con el servidor una session, propia de cada user. En esa session podemos almacenar info como en nuestro caso añadimos una variable `isLogged`, en cuanto guardamos datos en la session se generará una cookie en el navegador del user llamada `connect.sid` con el id session para buscarla en nuestro servidor y poder recuperar la info que contiene la session (isLogged), pero la cookie no contiene los datos, sólo tiene el id de session.

Cuando conectemos cn la bbdd sucederá igual, hasta q no guardemos datos en la session no se almacenará en la bbdd.

### **GUARDANDO LA SESSION EN LA BBDD**

Hasta ahora almacenábamos la session en memoria pero en producción, si se conectan muchos users pueden colapsar la memoria, por eso guardaremos la session en la bbdd.

Para ello requerimos instalar un nuevo paquete

1. #### **INSTALAR PACKAGE** `connect-mongodb-session`

   ```javascript
   npm install connect-mongodb-session --save
   ```

2. #### **IMPORTAMOS MONGODB-SESSION EN NUESTRO ARCHIVO APP.JS**

   En el archivo app importamos mongoDB-session y al requiere le pasamos el express-session

   ```javascript
   const session = require("express-session");
   const MongoDBStore = require("connect-mongodb-session")(session);
   ```

3. #### **CONFIGURAR SESSION Y GUARDADO EN BBDD**

   instanciamos mongodb-session para que se conecte con nuestra bbdd, tener en cuenta que nuestra uri a mongo atlas es: `mongodb+srv://david:dmv1104@node-app.j1vce.mongodb.net/shop-mongoose?retryWrites=true&w=majority` la última parte (?retryWrites=true&w=majority) hay que obviarla.

   ````javascript
    const MONGODB_URI ="mongodb+srv://david:dmv1104@node-app.j1vce.mongodb.net/shop-mongoose";

    const store = new MongoDBStore({
      uri: MONGODB_URI,
      collection: "sessions",
    });

    ```
    Una vez hecho esto para poder guardar la session en la bbdd debemos pasarle al middleware, con el q generamos la session, un nuevo argmento

    ```javascript
    app.use(
      session({
        secret: "my secret",
        resave: false,
        saveUninitialized: false,
        store: store,
      })
    );
    ```
   Una vez hecho esto cuando conectemos con el servidor se nos generará una session y cuando almacenemos info en la session, por ejemplo cuando le damos a loggin que guardamos una variable isLogged en req.session se nos genera la cookie y se guarda en la bbdd.
   ````

![not found](img/img-52.png)

En el controller auth al hacer posLogin para logearnos podemos buscar un user y guaradarlo en la variable session del request:

```javascript
module.exports.postLogin = (req, res, next) => {
  User.findById("6049388ff1f3dae6be7e56a8")
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};
```

### **ELIMINAR UNA SESSION**

1. Añadimos un botton de logout en el header

```html
<li class="main-header__item">
  <form action="/logout" method="POST">
    <button type="submit">Logout</button>
  </form>
</li>
```

2. añadimos en el controller de auth el postLogout

```javascript
module.exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
```

el método destroy de session le podemos pasar un callback para hacer algo después de eliminar la session, nuestro caso volver a `/ `.

Si queremos asegurarnos que la session se crea correctamente podemos llamar a al método `save()`

```javascript
req.session.save((error) => {
  console.log(error);
  res.redirect("/");
});
```




