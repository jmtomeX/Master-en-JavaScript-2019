'use strict'
// Uso del BOM
// Browser object model
function getBom() {
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.innerHeight);
    console.log(window.innerWidth);

    document.write(screen.width + "<br>");
    document.write(screen.height + "<br>");

    console.log(window.location);
}

// Nos redirije a la web
function redirect(url) {
    window.location.href = url;
}

//redirect("https://www.google.com/");

// Abrir una venteana nueva, se le pueden añadir 3 parámetros
function abrirVentana(url) {
    window.open(url, "", "width = 400, height = 300");  
}
// lo llamariamos desde la consola o un evento --> abrirVentana("https://www.google.com/");

getBom();
