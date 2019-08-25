'use strict'
// LocalStorage
window.addEventListener('load', function () {
    // comprobar si el local storage esta disponible, si el navegador es compatible.
    if (typeof (Storage) !== 'undefined') {
        console.log("LocalStorage está disponible.");
    } else {
        console.log("LocalStorage no está disponible, navegador incompatible.");
    }
    // Guardar datos en localStorage
    // localStorage.setItem(llave, valor)
    localStorage.setItem("titulo", "Curso de Symfony");
    var divPeliculas = document.querySelector("#peliculas");
    var divdatos = document.querySelector("#datos");
    // Recuperrar elemento 
    divPeliculas.innerHTML = localStorage.getItem("titulo");

    // Guardar objetos
    var usuario = {
        nombre: "Jose Mari Tome",
        email: "iremti2@gmail.com",
        web: "josemaritome.com"
    }
    // El localStorage no permite guardar un objeto de js
    // no permite guardar un objeto en formato nativo, para ello se usa JSON.stringify
    localStorage.setItem("usuario", JSON.stringify(usuario));

    // Recuperar un objeto, convertimos JSON.stringify a un objeto de js
    var userJs = JSON.parse(localStorage.getItem("usuario"));
    console.log(userJs);

    divdatos.append(" " + userJs.nombre + " " + userJs.email);

    // Borrar elementos del localStorage, al recargar el storage de cargan
    localStorage.removeItem("usuario.email");

    // Borrar sin posibilidad de recargar
    // localStorage.clear();


});
