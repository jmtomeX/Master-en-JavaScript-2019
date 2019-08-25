'use strict'

var edad = 75;
var imprime = "";

switch (edad) {
    case 18:
        imprime = "Acabas de cumplir la mayoría de edad";
        break;
    case 25:
        imprime = "Ya aeres un adulto";
        break;
    case 40:
        imprime = "Crisis de los cuarenta";
        break;
    case 75:
        imprime = "Eres ya un anciano";
        break;
    default:
        imprime = "Edad no encontrada";
        break;
}
console.log(imprime);
