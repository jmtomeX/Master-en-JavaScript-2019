/*
Ruta carpeta
/d/"Desarrollo Aplicaciones WEB 2018"/"Udemy Cursos"/"Master en JavaScript Aprender JS -  jQuery - Angular 8 - NodeJS"/"ejercicios js"/ejercicios/poo_bloque_4_Typescript/js
*/

// Interface

interface CamisetaBase {
    setColor(color);
    getColor();
}
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
class Camiseta implements CamisetaBase {

// propiedades (caracteristicas del objeto)
private color:string;
private modelo:string;
private marca:string;
private talla:string;
private precio:number;
    
// Métodos (funciones o acciones del objeto)
    public setColor(color) {
        this.color = color;
    } 
    
    public getColor() {
        return this.color;
    }
    
        public setMarca(marca) {
        this.marca = marca;
    } 
    
    public getMarca() {
        return this.marca;
    }
    
constructor(color:string,modelo:string,talla:string,marca:string,precio:number) {
        this.color = color,
        this.modelo = modelo;
        this.talla = talla;
        this.marca = marca;
        this.precio = precio;
        }
}


// Clase hija

class Sudadera extends Camiseta {
    public capucha:boolean;
    
    setCapucha(capucha:boolean){
        this.capucha = capucha;
    } 
    getCapucha(){
        return this.capucha;
    }
}

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