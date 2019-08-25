'use estrict'
window.addEventListener('load', () => {
    // Los callbacks también se utilizan para “avisar” cuando una función termina de hacer algo:
    function foo(callback) {
        console.log("hello")
        callback();
    }

    foo(function () {
        console.log("finished")
    });

    // Un ejemplo muy común de callback es como función escuchadora de un // evento.
    var boton = document.querySelector("#boton");

    function showAlert() {
        alert('Alerta');
    }
    boton.addEventListener('click', showAlert);

    // En este ejemplo, showAlert es un callback. También podemos escribir el callback como función anónima:
    var boton1 = document.querySelector("#boton1");

    boton1.addEventListener('click', function () {
        alert('Alerta de otro botón');
    });

    /*A través de callbacks, podemos invertir la dependencia a nivel de conocimiento y hacer que una función no tenga conocimiento de la otra función que ejecuta.
    Veamos un ejemplo con una cuenta atrás:*/

    var seconds = 20;
    var contador = document.querySelector("#temp");

    var cont = function startCountDown(contador) {
        setInterval(function () {
            seconds--;
            showSeconds();
        }, 200);
    }

    function showSeconds() {
        if (seconds >= 0) {
            contador.innerHTML = "<h1>" + seconds + "</h1>";
        } else {
            contador.innerHTML = "<h1> Se acabo el tiempo </h1>" + Date();
            clearInterval(cont);
        }

    }
    cont();
});
