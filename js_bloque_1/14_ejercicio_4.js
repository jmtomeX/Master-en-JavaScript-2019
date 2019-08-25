'use strict'
/*Mostrar todos los números inmpares que hay entre los que meta el usuario*/

var num1 = parseInt(prompt("Introduce el primer número", 0));
var num2 = parseInt(prompt("Introduce el segundo número", 0));

while(num1 < num2){
    num1++;
    
    if(num1%2 != 0){
       document.write("El número " + num1 +  " es impar.  <br>");
       }
}