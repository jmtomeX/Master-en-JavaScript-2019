'use strict'
//Utilizando un bucle, mostrar la suma y la media de los números inroducidos hasta introducir un número y ahí el resultado
var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("Introduce números hasta que metas un 0.", 0));
    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        suma += numero;
        contador++;
    }
    console.log(suma);
    console.log(contador);
    console.log("El número introducido es " + numero);
} while(numero != 0)
alert("La suma total es " + suma);
alert("La media es " + (suma/contador));
