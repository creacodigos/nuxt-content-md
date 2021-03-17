---
title: Javascript
description: Learning how to use @nuxt/content to create a blog
img: first-blog-post.jpg
alt: my first blog post
author:
  name: Jorge Santana
  bio: Full Stack Developer & PizzaBurger Maket
---
# chuleta JavaScript

## Búsquedas:
```js
array = ['perro','gato','pájaro',3,'5'];

// Devuelve True o False
console.log(array.includes('perro')); // true
console.log(array.includes('perr')); // false
console.log(array.includes('3')); // false
console.log(array.includes(3)); // true

// Devuelve coincidencia
console.log(array.find(element => element == 'perro')); // "perro"
console.log(array.find(element => element == 'perr')); // undefined
console.log(array.find(element => element == '5')); // "5"
console.log(array.find(element => element == 3)); // 3

// Devuelve posición de array
console.log(array.indexOf('perro')); // 0
console.log(array.indexOf('perr')); // -1
console.log(array.indexOf('3')); // -1
console.log(array.indexOf(3)); // 3

console.log(array.findIndex(element => element == 'perro')); // 0
console.log(array.findIndex(element => element == 'perr')); // -1
console.log(array.findIndex(element => element == '5')); // 4
console.log(array.findIndex(element => element == 3)); // 3
```
## .forEach() vs .map()
```js
var tasks = [ 
  { 
    'name'     : 'Write for Envato Tuts+', 
    'duration' : 120 
  },
  { 
    'name'     : 'Work out', 
    'duration' : 60 
  }, 
  { 
    'name'     : 'Procrastinate on Duolingo', 
    'duration' : 240 
  } 
];

var task_names = [];
 
tasks.forEach(function (task) { 
    task_names.push(task.name);     
});

// Usando map podemos escribir
var task_names = tasks.map(function (task, index, array) { 
    return task.name;  
});

```
# Desestructuración
```js
const req = {
  body: {
    name: 'joe',
    age: 40,
    otherKey: false,
    admin: false
  }
};

const { name, age } = req?.body;
const user = { name, age };

//console.log('req',req);
console.log('user',user);

/*
"user"
[object Object] {
  age: 40,
  name: "joe"
}
*/
```

# .forEach(), .map(), .reduce(), .filter()
https://code.tutsplus.com/es/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209
https://medium.com/@jmoran.losada/javascript-map-reduce-filter-find-foreach-c%C3%B3mo-utilizarlos-y-sus-diferencias-e0e078646d11

## .forEach()
Este método, similar al map(), ejecutará el callback indicado por cada elemento del arreglo. La mayor diferencia entre ambos, es que este método no retorna un nuevo arreglo y solo se limitará a recorrerlo.
```js
var myArray = [10, 20, 30];
myArray.forEach(number => calculateSomething(number);
```
## .map()
Este método nos permite iterar todos los elementos de un arreglo, retornando un nuevo arreglo, dada una determinada función o callback a ejecutar en cada elemento que lo compone.
```js
var myArray = [10, 20, 30];
var newArray = myArray.map(number => number + 1);
newArray;

// Prints [11, 21, 31]
```
```js
var myArray = [10, 20, 30];
myArray.map(function(number, index, arr) {
  console.log(number + 1, index, arr, this);
}, {name: 'Javascript'});
// Prints:
// 11 0 [10, 20, 30] {name: "Javascript"}
// 21 1 [10, 20, 30] {name: "Javascript"}
// 31 2 [10, 20, 30] {name: "Javascript"}
```
## .reduce()
Este método nos permite, dada una función, “reducirlo” o “transformar” los elementos de un arreglo en un nuevo y único valor
```js
var myArray = [10, 20, 30];
var total = myArray.reduce((accumulator, number) => {
 return accumulator + number;
});
total;
// Prints 60
```
```js
var myArray = [10, 20, 30];
var objectCreatedFromArray = myArray.reduce((accumulator, number, index, arr) => {
  accumulator[`number${index}`] = number;
  return accumulator;
}, {});
objectCreatedFromArray;
// Prints {number0: 10, number1: 20, number2: 30, number3: 40}
```
## .find()
Este método nos retornara el primer elemento que encuentre cumpliendo los requerimientos que proponga nuestro callback.
```js
var myArray = [{number: 10}, {number: 20}, {number: 30}, {number: 40}];
var singleValue = myArray.find(el => el.number === 30);
singleValue
// Prints {number: 30}
```
```js
var myArray = [{number: 10}, {number: 20}, {number: 30}, {number: 40}];
var singleValue = myArray.find(function(el, index, arr) {
  return el.number > 20 && el.number < this.defaultValue;
}, {defaultValue: 40});
singleValue
// Prints {number: 30}
```
## .filter()
Método con funcionamiento similar al de find(), retornara un nuevo arreglo con todos los elementos que encuentre cumpliendo los requerimientos que proponga nuestro callback.
```js
var myArray = [10, 20, 30, 40];
var filteredValues = myArray.filter(number => number > 20);
filteredValues
// Prints [30, 40]
```

## Varios:
Cortar string:
```js
texto = "texto palabras";
console.log(texto.slice(0,4)); // text
console.log(texto.substr(0,4)); // text
```
Quitar decimales:
```js
const decimal = 3.1435;

// con doble bitwise NOT operator
console.log(~~decimal); // 3

// con bitwise OR operator
console.log(decimal | 0); // 3
```
Función array único array.unique();
```js
Array.prototype.unique=function(a){
    return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});
```

```js
function regexYoutubeID (url){
    var regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
    if(url.match(regex))
        return url.match(regex)[1];
    return url;
}
```
```js
function revisarSalir(activo = true){
    var bPreguntar = true;

    if(activo)
        window.onbeforeunload = preguntarAntesDeSalir;
    else
    {
        window.onbeforeunload = "";
        bPreguntar = false;
    }

    function preguntarAntesDeSalir () {

        var respuesta;

        if (bPreguntar) {

            respuesta = confirm ( '¿Quieres salir del sitio web?' );

            if (respuesta) {
                window.onunload = function () {
                    return true;
                }
            } else {
                return false;
            }
        }
    }

}
```
Quitar HTML
```js
function stripHtml(html){
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}
```
Contar Duplicados en ARRAY
```js
function contar_duplicados_array(array){

    /*
     Reordena array
     Cuenta los repetidos
     Devuelve objeto con valor: conteo
     */

    array.sort();

    let current = null;
    let cnt = 0;
    let datos_obj = {};

    for (let i = 0; i < array.length; i++) {
        if (array[i] != current) {
            if (cnt > 0) {
                // console.log(current + ':' + cnt);
                datos_obj[current] = cnt;
            }
            current = array[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }

    if (cnt > 0) {
        // console.log(current + ':' + cnt);
        datos_obj[current] = cnt;
    }

    return datos_obj;

}
function ordenar_objeto(objeto,order = 'ASC'){

    let sortable = [];

    for (var dato in objeto) {
        sortable.push([dato, objeto[dato]]);
    }

    sortable.sort(function(a, b) {
        return a[1] - b[1];
    });

    if(order.toLowerCase() == 'desc')
        sortable.reverse();

    return sortable;
}
function contar_duplicados_objeto(objeto,parametro){

    /*
    Recorre objeto json y agrupa en array el parámetro definido
    Reordena array
    Cuenta los repetidos
    Devuelve objeto con valor: conteo
    */

    let array = [];

    objeto.forEach(function(contenido) {
        array.push(contenido[parametro]);
    });

    array.sort();

    let current = null;
    let cnt = 0;
    let datos_obj = {};

    for (let i = 0; i < array.length; i++) {
        if (array[i] != current) {
            if (cnt > 0) {
                // console.log(current + ':' + cnt);
                datos_obj[current] = cnt;
            }
            current = array[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }

    if (cnt > 0) {
        // console.log(current + ':' + cnt);
        datos_obj[current] = cnt;
    }

    return datos_obj;
}
function get_extension(url){

    url = url.split('?')[0];
    let ext = url.split('.').pop().toLowerCase();

    return ext;
}
function verificar_extension(ext){

    let extensiones_excluidas = ['gif', 'mov', 'avi', 'mp4', 'mkv', 'flv', 'wmv', 'mp3g', 'webm', 'ogv', 'ogg', 'mpg', 'mpeg'];
    let extensiones_permitidas = ['jpg', 'jpeg', 'png', 'aspx'];

    ext = ext.split('?')[0];

    if(extensiones_permitidas.indexOf(ext.toLowerCase()) != -1)
        return true;
    else
        return false;

    if(extensiones_excluidas.indexOf(ext.toLowerCase()) != -1)
        return false;

    return true;
}
```

Buscar en Array multidimensional
// https://stackoverflow.com/questions/5181493/how-to-find-a-value-in-a-multidimensional-object-array-in-javascript
```js
  var traducciones = [
        {"texto": "Media List--en", "traduccion": "Media List"},
        {"texto": "Logout--en", "traduccion": "Logout"},
        {"texto": "Error Log--en", "traduccion": "EN Error Log EN"},
        {"texto": "Media Users--en", "traduccion": "Media Users"},
        {"texto": "1234", "traduccion": "Performance"},
        {"texto": "Performance--en", "traduccion": "Performance"}
    ];
    
/*
  var traduccion = traducciones.filter(function (traduccion) { return traduccion.texto == "Error Log--en" });
  
  if(typeof traduccion[0] !== "undefined")
      console.log(traduccion[0]['traduccion']);

      console.log(traducciones.filter(traduccion => traduccion.texto == "Error Log--en")[0]['traduccion']);
*/
    function buscar(array, buscar, campo, campo_ver)
    {

        var busqueda = array.filter(function (busqueda) { 
                // busqueda[campo] -> cuando campo es parámetro a llamar si es variable
                // busqueda.campo -> llama al objeto campo
                return busqueda[campo] == buscar ;
            });

        if(typeof busqueda[0] !== "undefined")
            return busqueda[0]['traduccion'];
        else
            return buscar;

    }
  
  console.log('funcion filter: '+ buscar(traducciones, "Error Log--en", "texto", "traduccion"));
```
