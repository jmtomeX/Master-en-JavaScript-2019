'use strict'

let promesa1 = new Promise((resolve, reject) => {
    resolve("Primera promesa resuelta.");
});

let promesa2 = new Promise((resolve, reject) => {
    resolve("Segunda promesa resuelta.");
});

let promesa3 = new Promise((resolve, reject) => {
     // Promesa rechazada
    reject("Tercera promesa Error.");

});

promesa1
    .then(
        response => {
            console.log(response);
            return promesa2;
        }
    )
    .then(valorSegundaPromesa => {
        console.log(valorSegundaPromesa);
        return promesa3;
    })

    .then(valorTerceraPromesa => {
        console.log(valorTerceraPromesa);
    })
    .catch(
        error => {
            console.log("Error. ", error);
            // en el caso de que falle la primera entraría en el error de la segunda
            // lo recibe el siguuiente .then
            throw error;
        }
    )

// se le puede pasar como segundo parámetro al then
//.catch(error => console.log("error"));
// .then(response => console.log(response), error => console.log("error"))
