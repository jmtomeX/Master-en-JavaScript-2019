'use strict'
//Funciones de flecha =>
/*
La expresión de función flecha tiene una sintaxis más corta que una expresión de función convencional y no vincula sus propios this, arguments, super, o new.target. Las funciones flecha siempre son anónimas. Estas funciones son funciones no relacionadas con métodos y no pueden ser usadas como constructores.
Los paréntesis son opcionales cuando sólo dispone de un argumento:
*/
var pelicula = function (nombre) {
    return "La película es " + nombre;
}

function sumame(num1, num2, sumaYMuesta, sumaPorDos) {
    var sumar = num1 + num2;

    sumaYMuesta(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(12, 211,
    (dato) => {
        console.log("La suma es:", dato)
    },
    (dato) => {
        console.log("La suma por 2 es: ", (dato * 2));
    }
);


var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
