'use strict'
//Un programa que pida 2 números y nos diga cual es el mayor el menor y si son iguales
//Si los números son menores o iguales a cero o no son un número nos lo vuelvan a pedir

var num1;
var num2;

//isNAN  sigue ejecutando el bucle si no es un número devuelce true
while (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) {

    num1 = parseInt(prompt("Introduce el primer número", 0));
 
    num2 = parseInt(prompt("Introduce el segundo número", 0));
   
}

if (num1 == num2) {
    alert("Los números son iguales" + " Número 1 --> " + num1 + " y Numero 2 es --> " + num2);
} else if (num1 < num2) {
    alert("El numero 2 es mayor" + " Número 1 --> " + num1 + " y Numero 2 es --> " + num2);
} else if (num1 > num2) {
    alert("El número 1 es mayor" + " Número 1 --> " + num1 + " y Numero 2 es --> " + num2);
} else {
    alert("Introduce números correctos");
}
