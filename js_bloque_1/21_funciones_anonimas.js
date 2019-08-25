'use strict'
//Funciones anonimas
//Es una función que no tiene nombre, se utiliza en callbacks que son  funciones que se ejecutan dentro de otras funciones.

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
    function (dato) {
        console.log("La suma por 2 es: ", (dato * 2));
    }
);
