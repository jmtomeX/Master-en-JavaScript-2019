'use strict'
var num = 34;
var texto1 = "Esto es una prueba";
var texto2 = "Es algo largo el camino";
document.write(texto2 + "<br>");

/*Remplaza texto*/
var busqueda = texto2.replace("largo","como que muy largo");

document.write(busqueda + "<br>");

/*Corta a partir de la posición indicada*/
var busqueda = texto2.slice(14);
document.write(busqueda + "<br>");

var busqueda = texto2.slice(14,17);
document.write(busqueda + "<br>");

/*Separa en una array el texto, le indicamos el separador*/

var busqueda = texto2.split(" ");
console.log(busqueda);
/*Para separar con espacios en ambos lados --> */
var pruebaSplit ="1,2, 3,4 ,5".split(/\s*,\s*/);
console.log(pruebaSplit);

/* Método trim quita espacios por delante y detras*/
busqueda = "         <--Espacios Es algo largo el camino";
console.log(busqueda);
busqueda = busqueda.replace("<--Espacios","")
busqueda = busqueda.trim();
console.log(busqueda);









