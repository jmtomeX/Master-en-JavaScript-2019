'use strict'
// promise.all es una propiedad que nos permite evaluar varias promesas, si todas la promesas
// se ejecutan con exito nos devuelve un array con las promesas, si ocurre un error
// devuelve el error de la promesa que se rechazo

let promesa1 = new Promise((resolve, reject) => {
    resolve("Primera promesa resuelta.")
});

let promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Segunda promesa resuelta.");
    }, 500);
});

let promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Tercera promesa resuelta.");
    }, 1000);
});

let promesa4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Cuarta promesa resuelta.");
    }, 1500);
});

Promise.all([promesa1, promesa2, promesa3, promesa4])
    .then((values) => {
        console.log("Los valores son ", values);
    })
    .catch((error) => {
        console.log("Ocurrio un error", error);
    });
