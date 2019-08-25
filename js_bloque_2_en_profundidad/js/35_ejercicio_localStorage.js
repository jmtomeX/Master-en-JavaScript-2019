'use strict'

var formulario = document.querySelector("#formPeliculas");

formulario.addEventListener('submit', function () {
    console.log("entra");
    var titulo = document.querySelector('#addPelicula').value;
    if (titulo.length > 0) {
        localStorage.setItem(titulo, titulo);
    } else {
        alert("Ingresa un titulo");
    }
});
var ul = document.querySelector("#peliculas")
for (var i in localStorage) {
    console.log(localStorage[i]);
    if (typeof localStorage[i] === 'string') {
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}

var formulario = document.querySelector("#formBorrarPeliculas");

formulario.addEventListener('submit', function () {
    console.log("entra");
    var titulo = document.querySelector('#borrarPelicula').value;
    if (titulo.length > 0) {
        localStorage.removeItem(titulo, titulo);
    } else {
        alert("Ingresa un titulo");
    }
});
