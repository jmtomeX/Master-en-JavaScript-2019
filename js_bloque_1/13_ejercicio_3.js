'use strict'
//Hacer un programa que nos muestre los numeros entre los números que inserte el usuario

var num1 = parseInt(prompt("Introduce el primer número", 0));
var num2 = parseInt(prompt("Introduce el segundo número", 0));
document.write("<h1>De" + num1 + " a " + num2 + "</h1>");
num1 = num1+1;
num2 = num2-1;
for (var i = num1; i <= num2; i++) {

    document.write(i + "<br/>");

}
