'use strict'

// Parámetros REST y SPREAD

//REST
function listadoFrutas(fruta1,fruta2, ...resto_de_frutas){
    console.log("Fruta 1 " + fruta1);
    console.log("Fruta 2 " + fruta2);
    console.log(resto_de_frutas);
    
}

var frutas = ["fresas","mandarinas","platanos"];
listadoFrutas(...frutas,"Naranja ","Pera", "sandia", "melón");
