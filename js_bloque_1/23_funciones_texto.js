'use strict'
//Transformación de textos

var numero = 444;
var texto1 = "Hola Bienvenido amigo que tal amigo";
var texto2 = "Esto es todo";

var dato = numero.toString();
    dato = texto1.toUpperCase();
    dato = texto2.toLocaleLowerCase();

console.log(typeof dato);
console.log(dato);

// calcular longitud

var nombre = "gdsdsd";
var nombre = [
    "jlj","hnkjaf"
    
];

//length si es un numero da null, solo para cadenas.
console.log(nombre.length);

//concatenar
//var textoTotal = texto1+texto2;
var textoTotal = texto1.concat(" " + texto2);
console.log(textoTotal);

//Busquedas. Si el caracter no existe da -1
var busqueda = texto1.indexOf("amigo");
var busqueda = texto1.indexOf("es");
var busqueda1 = texto1.search("amigo");
var busqueda2 = texto1.lastIndexOf("a");

console.log("Está en la posición " + busqueda);
console.log("Está en la posición " + busqueda1);
console.log("Está en la posición " + busqueda2);
// Con g hacemos busqueda global o gi
var busqueda3 = texto1.match(/amigo/g);
console.log(busqueda3);
//substring
var busqueda4 = texto1.substring(13,17);
 console.log("Entre las palabras 13 y 14 está el texto -->" + busqueda4);

var busqueda5 = texto1.charAt(17);
 console.log(busqueda5);

//Busca al inicio de un string el texto devuelve true o false 
var busqueda6 = texto1.startsWith("Hola");
 console.log(busqueda6);

//Busca en el string el texto devuelve true o false 
var busqueda7 = texto1.includes("amigo");
 console.log(busqueda7);



