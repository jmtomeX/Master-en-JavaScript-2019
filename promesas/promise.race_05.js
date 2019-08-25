'use strict'
// promise.all es una propiedad que nos permite evaluar varias promesas, si todas la promesas
// se ejecutan con exito nos devuelve un array con las promesas, si ocurre un error
// devuelve el error de la promesa que se rechazo

let promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Segunda promesa resuelta.");
    }, 1000);
});

let promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Tercera promesa.");
    }, 500);
});

let promesa4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Cuarta promesa resuelta.");
    }, 1500);
});

// .race([]) es una propiedad que nos permite obtener la primera promesa resuelta o rechaza en un array de promesas
// Devuelve la promesa que se ejecuta más rápido en le orden
Promise.race([promesa2, promesa3, promesa4])
    .then((values) => {
        console.log("Los valores son ", values);
    })
    .catch((error) => {
        console.log("Ocurrio un error", error);
    });
// Theseus Extension log