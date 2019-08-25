'use strict'
/*
Calculadora 
-pida dos números
-Si metemos mal que nos vuelva a pedir
-Muestre en el cuerpo de la página, en una alerta y por consola el resultado de sumar, restar, multiplicar y dividir esa dos cifras
*/

var numero1 = parseInt(prompt("Introduce el primer número"), );

while (numero1 < 0 || isNaN(numero1)  ) {
   
    numero1 = parseInt(prompt("Introduce el primer número correcto"), );
}
var numero2 = parseInt(prompt("Introduce el segundo número"), );
while (numero2 < 0 || isNaN(numero2)) {
  
    numero2 = parseInt(prompt("Introduce el segundo número correcto"), );
}


var resultado = "La suma es " + (numero1+numero2) + "<br/>"+
"La resta es " + (numero1-numero2) + "<br/>" +
 "La multiplicación es " + (numero1*numero2) + "<br/>" +
 "La división es " + (numero1/numero2) + "<br/>";

var resultadoCMD = "La suma es " + (numero1+numero2) + " \n"+
"La resta es " + (numero1-numero2) + " \n" +
 "La multiplicación es " + (numero1*numero2) + " \n" +
 "La división es " + (numero1/numero2) + " \n";

document.write("El número 1 es " + numero1 + " y el número 2 es " + numero2 + "<br/>");
document.write(resultado);
alert(resultadoCMD);