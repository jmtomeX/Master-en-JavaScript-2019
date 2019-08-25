    'use strict'
    window.addEventListener('DOMContentLoaded', () => {
        //Timers
        //setInterval lo que hace es establecer el intervalo, en el primer parametro
        //va la funcion de call back, y en el segundo parametro que se desea establecer en milisegundos
        function intervalo(encabezado) {
            if (encabezado.style.color == "black") {
                encabezado.style.color = "white";
            } else {
                encabezado.style.color = "black";
            }
        }
        var encabezado = document.querySelector("h1");

        // solo se ejecuta una vez en el tiempo establecido
        // var tiempo = setTimeout(function () {


        var tiempo = setInterval(function () {
            console.log("Set interval");
            intervalo(encabezado);
        }, 1000);

        var stop = document.querySelector("#stop");

        stop.addEventListener("click", () => {
            console.log("Se detuvo");
            clearInterval(tiempo);
            encabezado.style.color = "red";
        });

        var start = document.querySelector("#start");

        start.addEventListener("click", () => {
            console.log("Inicia");
            tiempo = setInterval(function () {
                intervalo(encabezado);
            }, 1000);
        });
    });
