'use strict'
var div_fecha = document.querySelector("#fechas");

var fecha = new Date();
var year = fecha.getFullYear();
var month = fecha.getMonth() + 1;
var day = fecha.getDate();
var hour = fecha.getHours() + ":" + fecha.getMinutes();;

var textoHora = `
El año es: ${year}
El mes es: ${month}
El día es: ${day}
La hora es: ${hour}
`

console.log(textoHora);
console.log(fecha);
div_fecha.innerHTML = textoHora;

// Para sacar un número aleatorio lo multiplicamos por tanto decimales como queramos obtener
console.log(Math.ceil(Math.random()*10000));