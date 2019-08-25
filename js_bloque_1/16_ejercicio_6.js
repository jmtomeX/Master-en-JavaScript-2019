'use strict'

/*Si un número es par o impar
ventana prompt
Si no es válido que nos pida el número
*/

var numero = parseInt(prompt("Introduce un número"), 0);
while (isNaN(numero)) {
    numero = parseInt(prompt("Introduce un número correcto"), 0);
}

if (numero % 2 == 0) {
    alert("Es un número par");

} else {
    alert("Es impar");
}
