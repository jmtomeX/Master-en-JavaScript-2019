'use strict'
//Uso del DOM
function cambiaColor(color, colorText = "") {
    caja.style.background = color;
    caja.style.color = colorText;

}

// Conseguir elementos con un ID único
// innerHTML da el código que hay en el div
// var caja = document.getElementById("micaja")/*.innerHTML*/;
// en vez de usar getElementById usar querySelector
var caja = document.querySelector("#micaja");
// cambiamos el texto de la caja
caja.innerHTML = "Texto en la caja desde js";

caja.style.background = "black";
caja.style.padding = "20px";
caja.style.color = "white";
// añadir una clase
caja.className = "hola";

console.log(caja);

// Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName("div");
console.log(todosLosDivs);

// devuelve el texto del div
// var contenidoEnTexto = todosLosDivs[2].textContent;

var contenidoEnTexto = todosLosDivs[2];
var elemento0 = todosLosDivs[0];
elemento0.innerHTML = "Cambiamos el texto del div 0"
contenidoEnTexto.style.background = "grey";
contenidoEnTexto.style.padding = "20px";
contenidoEnTexto.style.color = "white";
contenidoEnTexto.style.width = "200px";
contenidoEnTexto.style.height = "200px";


for (var valor in todosLosDivs) {
    // comprobamos si es un texto, si lo es añadimos 
    if (typeof todosLosDivs[valor].textContent == 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        // append() añade el contenido al final del elemento/capa que nosotros le especifiquemos.
        parrafo.append(texto);
        // prepend() funciona exactamente igual, pero el contenido se añade al principio del elemento/capa que nosotros le especifiquemos
        document.querySelector("#miSeccion").append(parrafo);

    }
    var cajaSeccion = document.querySelector("#miSeccion");
    cajaSeccion.style.background = "black";
    cajaSeccion.style.color = "white";
    cajaSeccion.style.padding = "20px";
    cajaSeccion.style.margin = "20px";
    
    
}
// Añadimos una línea hr al final
var seccion = document.querySelector("#miSeccion");
var hr = document.createElement("hr");
seccion.append(hr);

// cambia el texto del div
contenidoEnTexto.innerHTML = "Otro texto para le segundo div";

// Conseguir elementos por su clase

var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName("amarillo");
console.log(divsRojos);

divsAmarillos[0].style.background = "yellow";

for(var div in divsRojos) {
    if(divsRojos[div].className == "rojo") {
       divsRojos[div].style.background = "red";
       }
    }
// Query selector
var id = document.querySelector(".encabezado");
console.log(id);

