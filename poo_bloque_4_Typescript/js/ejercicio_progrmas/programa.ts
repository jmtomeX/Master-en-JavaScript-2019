// Decorador

/*function arranque(lanzar: string) {
    return function(target: Function) {
        target.prototype.lanzamiento = function(): void {
            alert(lanzar)
        }
    }
}

@arranque("Lanzamiento de la aplicación.")*/

// Módulo interno

module Tienda {
    export class Ropa {
        constructor(public titulo:string) {
            alert(titulo);
        }
    }
    export class Informatica {
        constructor(public titulo: string) {
            alert("Tienda de tecnologías " + titulo);
        }
    }
}

// importamos las clases del módulo interno 
import Informatica = Tienda.Informatica;
let cargar_Informatica = new Informatica("Super Tienda");

class Programa {
    private nombre: string;
    private version: number;
   
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre:string) {
         this.nombre = nombre;
    }
    getVersion() {
        return this.version;
    }
    setVersion(version:number) {
         this.version = version;
    }
}

class EditorVideo extends Programa {
    public timeLine:number;
    
    setTimeLine(timeLine:number) {
        this.timeLine = timeLine;
    } 
    getTimeLine() {
        return this.timeLine;
    }
    
    getAllData():string {
        return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeLine();
    }
}

//var programa1 = new Programa();
//programa1.arranque();
    
var editor = new EditorVideo();
editor.setNombre("Premiere");
editor.setVersion(8);
editor.setTimeLine(4000);

console.log(editor.getAllData());

// Lógica del formulario

var programas = [];

function guardar() {
    // recogemos el nombre del input, le indicamos que el elemento del DOM es de un tipo concreto, en este caso input
    var nombre: string = (<HTMLInputElement>document.getElementById("nombre").value.toString());
    
    var programa = new Programa();
    programa.setNombre(nombre);
    
    var version =(<HTMLInputElement>document.getElementById("version").value);
    programa.setVersion(version);
    
    // Tenemos disponible el objeto programa
    programas.push(programa);
    
    var list = "";
    
    for(var i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + " versión " + programas[i].getVersion() "</li>";
    }
    
    var listado = <HTMLElement> document.getElementById("listado");
    listado.innerHTML = list;
    
    (<HTMLInputElement>document.getElementById("nombre").value = "");
    (<HTMLInputElement>document.getElementById("version").value = "");
}

