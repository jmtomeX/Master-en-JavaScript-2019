'use strict'
/*Mostrar todos los números divisores introducidos en un prompt*/

var num = parseInt(prompt("Mete un número", 1));
 document.write("<h1> " + num +"</h1> <br>");
for(var i = 0; i <= num; i++){
    if(num%i == 0){
       document.write(" Divisor " + i +" <br>");
       }
    
}