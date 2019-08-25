'use strict'
/*
1. Pida 6 número por pantalla y los meta en un array
2. Mostrar el array entero en el cuerpo de la página y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuántos elementos tiene el array
6. Hacer una busqueda de un valor metido por el usuario, que nos diga si lo encuentra y su indice (se valora el uso de funciones)
  */

function mostrarArray(elementos, textoCustom = "") {
    // mostramos el contenido del array
    document.write("<h1>Contenido del array " + textoCustom + "</h1>");
    elementos.forEach((elemento, index) => {
        document.write("<strong>" + elemento + "</strong><br>");
    });

}



//var numerosArray = new Array(6);
// for (var i = 0; i < 6; i++) {
// numerosArray[i] = parseInt(prompt("Añade el número " + (i + 1), 0));}
var numerosArray = [];
for (var i = 0; i < 6; i++) {
    numerosArray.push(parseInt(prompt("Añade el número " + (i + 1), 0)));
}

mostrarArray(numerosArray);

console.log("Estos son lo números " + numerosArray);

// para que ordene númericamente hacemos una función del callback, 
// si no lo mostraría alfabeticamente, tendría en cuenta la primera cifra.
numerosArray.sort(function (a, b) {
    return a - b
});
mostrarArray(numerosArray, "ordenado");

numerosArray.reverse();
mostrarArray(numerosArray, "al reverso");

document.write("El array tiene " + numerosArray.length + " elementos.");


var busqueda = prompt("Qué número desea buscar?");
var numBuscar = numerosArray.find(numero => numero == busqueda);
// Equivalente a la función arrow =>
/*var numBuscar = numerosArray.find(function (numero) {
   return numero == busqueda;
});*/

var buscadoPosicion = numerosArray.findIndex(numero => numero == busqueda);
if (numBuscar == busqueda) {
    document.write("<h2>El número " + busqueda + " existe, la posición es " + buscadoPosicion + "</h2>");
} else {
    document.write("<h2>El número  " + busqueda + "  no existe</h2>");
}
