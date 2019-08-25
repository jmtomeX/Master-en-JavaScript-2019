/*
Ruta carpeta
/d/"Desarrollo Aplicaciones WEB 2018"/"Udemy Cursos"/"Master en JavaScript Aprender JS -  jQuery - Angular 8 - NodeJS"/"ejercicios js"/ejercicios/poo_bloque_4_Typescript/js

*/

// string
let cadena: string = "jose mari";
console.log(cadena);

//number
let numero: number = 122;
console.log(numero);

//boleano
let verdadero_falso: boolean = true;
console.log(verdadero_falso);

//any 'cualquiera'
let cualquiera: any = "hola";

console.log(verdadero_falso + " " + cualquiera);

// Arrays
var lenguajes: Array<string> = ["PHP", "JS", "CSS"];
lenguajes.forEach((lenguaje, index) => {
  console.log((index+1) + ". " + lenguaje);  
});

let years: number[] = [12,32,43,54];
console.log(years);

// Multiple tipos de datos

let cadenas_varias: string | number = "cadena 1";
cadenas_varias = 23;
console.log(cadenas_varias);

// crear tipo de datos
type alfanumerico = string | number;
// string
let codigo: alfanumerico = "esto es una cadena";
console.log(codigo);

