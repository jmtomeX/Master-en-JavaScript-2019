'use strict'
// Ocultar el div fetch
document.querySelector("#fetch").style.display = "none";
/*
El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a 
cada uno de sus elementos.
Sintaxis ----------------------------------------------------------------
var nuevo_array = arr.map(function callback(currentValue, index, array) {
    // Elemento devuelto de nuevo_array
}[, thisArg])
-------------------------------------------------------------------------
Parámetros

callback Función que producirá un elemento del nuevo array, recibe tres argumentos:

currentValue El elemento actual del array que se está procesando.
index El índice del elemento actual dentro del array.
array El array sobre el que se llama map.
thisArg (Opcional) Valor a usar como this al ejecutar callback. 
*/

// funcion map
function doble(e) {
    return e * 2;
}
var arreglo = [1, 2, 3, 4, 5];
var resultado = arreglo.map(doble);
console.log(resultado); // [2, 4, 6, 8, 10];


var palabras = ["uno", "dos", "tres"];
var mayusculas = palabras.map((p) => {
    return p.toUpperCase();
});

console.log(mayusculas);

// Este ejemplo muestra como usar map en String para obtener un arreglo de bytes en codifcación ASCII //representando el valor de los caracteres:

var map = Array.prototype.map;
var valores = map.call('Hello World', (char) => {
    return char.charCodeAt(0);
});
console.log(valores);

// invertir una cadena
var str = '12345';
var invert = [].map.call(str, function (x) {
    return x;
}).reverse().join('');
console.log(invert);

// Usando map genérico con querySelectorAll
// Este ejemplo muestra como iterar sobre una colección de objetos obtenidos por querySelectorAll. En este caso // obtenemos todas las opciones seleccionadas en pantalla y se imprimen en la consola:
 var botonEnviar = document.querySelector("#btnEnviar");

botonEnviar.addEventListener('click', function () {
    var elems = document.querySelectorAll('select option:checked');
    var values = [].map.call(elems, function (obj) {
        return obj.value;
    });
    console.log(values);
});
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map
