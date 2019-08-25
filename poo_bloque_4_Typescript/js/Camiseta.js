/*
Ruta carpeta
/d/"Desarrollo Aplicaciones WEB 2018"/"Udemy Cursos"/"Master en JavaScript Aprender JS -  jQuery - Angular 8 - NodeJS"/"ejercicios js"/ejercicios/poo_bloque_4_Typescript/js
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
Los decoradores son experimentales en ts
// Decorador
function estampar(logo: string) {
    return function(target: Function) {
        target.prototype.estampacion = function():void {
            console.log("Camiseta estampada con el logo de: " + logo);
        }
    }
}
*/
// Clase (molde del objeto)
//@estampar('House of the end')
var Camiseta = /** @class */ (function () {
    function Camiseta(color, modelo, talla, marca, precio) {
        this.color = color,
            this.modelo = modelo;
        this.talla = talla;
        this.marca = marca;
        this.precio = precio;
    }
    // Métodos (funciones o acciones del objeto)
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Camiseta.prototype.getMarca = function () {
        return this.marca;
    };
    return Camiseta;
}());
// Clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var sudaderaNike = new Sudadera("Gris", "Extasis", "L", "Nike", 56);
sudaderaNike.setCapucha(true);
sudaderaNike.setColor("Naranja");
console.log(sudaderaNike);
var camisetaAdidas = new Camiseta("rojo", "open", "L", "adidas", 34);
camisetaAdidas.setColor("Pistacho");
console.log(camisetaAdidas);
console.log("Color " + camisetaAdidas.getColor());
camisetaAdidas.setColor("Amarillo");
console.log("Color 2 " + camisetaAdidas.getColor());
var camisetaNike = new Camiseta("verde", "life", "M", "nike", 32);
//camisetaAdidas.estampacion();
console.log(camisetaNike);
console.log("Marca " + camisetaNike.getMarca());
var camisetaInvierno = new Camiseta("Blanco", "blow", "M", "Oblicuos", 32);
console.log("camisetaInvierno marca -> " + camisetaInvierno.getMarca());
