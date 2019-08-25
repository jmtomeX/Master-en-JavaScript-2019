'use strict'

var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran Torino"];

var cine = [categorias, peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][1]);

//añadir un elemento al array
var elemento;
while (elemento != "fin") {
    elemento = prompt("Añade una pelicula");
    peliculas.push(elemento);

    /*if(elemento != "fin") {
        peliculas.push(elemento);
      }*/
}

// eliminamos el último elemento del array en vez de usar un if
// peliculas.pop();

// Buscar el indice y borrarlo
var indice = peliculas.indexOf("fin");
// -1 significa que no lo ha encontrado
if (indice > -1) {
    // splice borra el indice
    peliculas.splice(indice);
}
console.log(peliculas);

// ordenar un array sort
peliculas.sort();
console.log(peliculas);

// dar la vuelta al array
peliculas.reverse();
console.log(peliculas);

// convertir un array a String
var peliculas_String = peliculas.join();
document.write(peliculas_String);

// convertir un String a array
var cadena = "cadena 1, cadena 2, cadena 3";
var cadena_array = cadena.split();
console.log(cadena_array);
