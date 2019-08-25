'use strict'
window.addEventListener('load', function () {

    // Timers

    // se ejecuta en el tiempo establecido
    var encabezado = document.querySelector("h1");

    function intervalo() {
        var tiempo = setInterval(function () {

                // solo se ejecuta una vez en el tiempo establecido
                // var tiempo = setTimeout(function () {

                console.log("Set Interval ejecutando");
                if (encabezado.style.color == "black") {
                    encabezado.style.color = "white";

                } else {
                    encabezado.style.color = "black";
                }
            },
            1000); // 3 segundos de intervalo
        return tiempo;

    }

    var tiempo = intervalo();

    var start = document.querySelector("#start");
    start.addEventListener("click", function () {
        alert("Has iniciado el interbalo con bucle");
        intervalo();
    });

    var stop = document.querySelector("#stop");
    stop.addEventListener("click", function () {
        alert("Has parado el interbalo con bucle");
        clearInterval(tiempo);
        encabezado.style.color = "black";
    });

}); // load