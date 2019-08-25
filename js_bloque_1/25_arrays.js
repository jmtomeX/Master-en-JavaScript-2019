'use strict'

/*Arrays*/
var nombres = ["Jose Mari tome", "jose antonio", "pedro picapiedra"];
var lenguajes = new Array("PHP", "java", "python", "C", "Pascal");

/*
var elemento = parseInt(prompt("Que elemento del array quieres??", 0));
if(elemento >= nombres.length) {
   alert("Introduce el número correcto menor que " + nombres.length);
} else {
       alert("El usuario seleccionado es " + nombres[elemento]);    
   }*/

//console.log(nombres, lenguajes);

document.write("<ul>");
for (var i = 0; i < nombres.length; i++) {
    document.write("<li>" + nombres[i] + "</li>");
}

// Bucle for in
document.write("<h2>" + "Bucle for in" + "</h2>");
for (let lenguaje in lenguajes) {
    document.write("<li>" + lenguajes[lenguaje] + "</li><br>");

}

console.log(nombres.length);
document.write("<h1>Lenguajes de programación</h1>");

// bucle forEach
lenguajes.forEach((elemento, index, arr) => {
    document.write("<li>" + elemento + " --> " + index + " --> " + arr + "</li>");
});

// BUSQUEDAS en Arrays

// si da undefined es que no está
var busqueda = lenguajes.find(function(lenguaje) {
    return lenguaje == "PHP7";
});
console.log("La busqueda ha dado como resultado " + busqueda);

// código reducido con la función de flecha
 var busquedaReducida = lenguajes.find(lenguaje => lenguaje == "java");
console.log("La busqueda reducida ha dado como resultado " + busquedaReducida);

// findIndex devuelve le indice 
 var busquedaInd = lenguajes.findIndex(lenguaje => lenguaje == "java");
console.log("El elemento se encuentra en le indice " + busquedaInd);

// 
var precios = [10,20,30,40,50];
// comprobar si existen elementos  mayores o iguales a 20, devuelve un boleano
var busquedaValor = precios.some(precio => precio >=20);
console.log(busquedaValor);

document.write("</ul>");
