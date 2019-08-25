'use strict'
//let y var 

//prueba con var
var numero = 40;
    console.log(numero);
if(true){
   var numero = 50;
   console.log(numero);//valor 50
   }

console.log(numero);//valor 50

//prueba con let

var texto ="Curso js";
console.log(texto);

if(texto){
   let texto = "Curso laravel 5";
    console.log(texto);
   }
console.log(texto);