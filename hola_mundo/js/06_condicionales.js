'use strict'
//condicionales

//if
var edad1 = 3;
var edad2 = 12;

if (edad1 > edad2) {
    console.log("edad uno es mayor que edad dos");
} else {
    console.log("edad uno es inferior");
}

var edad = 75;
var nombre = "David Pérez";

if (edad >= 18) {
    document.write(nombre + "  es mayor de edad tiene " + edad + " años </br>" );
    
    if(edad <= 33){
         document.write("Todavía eres milenial");
       
       }else if(edad >= 70){
           document.write("Eres anciano");
           
       }else{
           document.write("Ya  no eres milenial");
       }
     
} else {
    document.write(nombre + " no es mayor de edad tiene " + edad + " años");
}

//Negación
var year = 2028;
if(year != 2016){
   console.log("El año no es 2020 es " + year);
   }

if(year >= 2000 && year <= 2020 ){
   console.log("Estamos en la era actual" );
   }else{
        console.log("Estamos en la era post moderna" );
   }
//OR
if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El año acaba en ocho");
}else{
    console.log("Año no registrado");
}

