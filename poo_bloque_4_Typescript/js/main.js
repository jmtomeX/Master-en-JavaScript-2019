/*
Ruta carpeta
/d/"Desarrollo Aplicaciones WEB 2018"/"Udemy Cursos"/"Master en JavaScript Aprender JS -  jQuery - Angular 8 - NodeJS"/"ejercicios js"/ejercicios/poo_bloque_4_Typescript/js
*/
var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicación JS cargada");
    }
    Main.prototype.getCamiseta = function () {
        return new Camiseta("Purpura", "StyleF", "S", "Logical", 21);
    };
    return Main;
}());
var main = new Main();
