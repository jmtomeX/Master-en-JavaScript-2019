'use strict'
/*
Tabla de múltiplicar de un número introducido por pantalla
*/
var numero = parseInt(prompt("¿De que número quiéres la tabla?"),)
while(isNaN(numero)){
     numero = parseInt(prompt("¿De que número quiéres la tabla?, indica un valor válido"),)
}
document.write("<h1>Tabla de " + numero + "</h1>");
   for(var i = 1; i <= 10; i++){
    document.write(numero + " x " + i + " = " + (numero * i) + "<br/>");

   }


  for(var j =1; j <= 12; j++){
      document.write("<h1>Tabla del " + j + "</h1>");
    for(var i = 1; i <= 10; i++){
    document.write(i + " x " + j + " = " + (i * j) + "<br/>");
   }  
  } 

