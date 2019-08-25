'use strict'

// Eventos del ratón

// load sirve para cargar la página html sin necesidad de que la llamada al script esté al final
// una vez cargada toda.
window.addEventListener('load', function () {


    var boton1 = document.querySelector("#boton1");
    var boton = document.querySelector("#boton");
    var boton = document.querySelector("#botonEvento");

    boton.style.padding = "20px";
    boton.style.border = "3px solid #ccc";

    boton1.style.padding = "10px";
    boton1.style.border = "1px solid #ccc";

    function cambiarColor() {
        var bg = boton1.style.background;
        if (bg == "green") {
            boton1.style.background = "red";
        } else if (bg == "red") {
            boton1.style.background = "blue";
        } else {
            boton1.style.background = "green";
        }
        return true;
    }

    // Evento click
    botonEvento.addEventListener('click', function () {
        cambiarColor();
        this.style.border = "10px solid black";
    });

    // Mouse Over
    boton.addEventListener('mouseover', function () {
        boton.style.background = "#fc0d0d";
        boton.style.color = "#000";
    });

    // Mouse Out
    boton.addEventListener('mouseout', function () {
        boton.style.background = "#000";
        boton.style.color = "#FFF";

    });
    // Focus

    var input = document.querySelector("#campoNombre");
    input.addEventListener('focus', function () {
        console.log("[focus] Estás dentro del input");

    });
    // Blur 

    var input = document.querySelector("#campoNombre");
    input.addEventListener('blur', function () {
        console.log("[blur] Estás fuera del input");

    });

    // Keydown
    var input = document.querySelector("#campoNombre");
    input.addEventListener('keydown', function (event) {
        console.log("[keydown] Pulsando está tecla", String.fromCharCode(event.keyCode));

    });

    // keypress
    var input = document.querySelector("#campoNombre");
    input.addEventListener('keypress', function (event) {
        console.log("[keypress] Tecla presionada ", String.fromCharCode(event.keyCode));

    });
    // keyup
    var input = document.querySelector("#campoNombre");
    input.addEventListener('keyup', (event) => {
        console.log("[keyup] Tecla soltada", String.fromCharCode(event.keyCode));
    });

}); // load
