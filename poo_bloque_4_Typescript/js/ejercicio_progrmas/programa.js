// Decorador
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
/*function arranque(lanzar: string) {
    return function(target: Function) {
        target.prototype.lanzamiento = function(): void {
            alert(lanzar)
        }
    }
}

@arranque("Lanzamiento de la aplicación.")*/
// Módulo interno
var Tienda;
(function (Tienda) {
    var Ropa = /** @class */ (function () {
        function Ropa(titulo) {
            this.titulo = titulo;
            alert(titulo);
        }
        return Ropa;
    }());
    Tienda.Ropa = Ropa;
    var Informatica = /** @class */ (function () {
        function Informatica(titulo) {
            this.titulo = titulo;
            alert("Tienda de tecnologías " + titulo);
        }
        return Informatica;
    }());
    Tienda.Informatica = Informatica;
})(Tienda || (Tienda = {}));
// importamos las clases del módulo interno 
var Informatica = Tienda.Informatica;
var cargar_Informatica = new Informatica("Super Tienda");
var Programa = /** @class */ (function () {
    function Programa() {
    }
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    return Programa;
}());
var EditorVideo = /** @class */ (function (_super) {
    __extends(EditorVideo, _super);
    function EditorVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorVideo.prototype.setTimeLine = function (timeLine) {
        this.timeLine = timeLine;
    };
    EditorVideo.prototype.getTimeLine = function () {
        return this.timeLine;
    };
    EditorVideo.prototype.getAllData = function () {
        return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeLine();
    };
    return EditorVideo;
}(Programa));
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
    var nombre = document.getElementById("nombre").value.toString();
    var programa = new Programa();
    programa.setNombre(nombre);
    var version = document.getElementById("version").value;
    programa.setVersion(version);
    // Tenemos disponible el objeto programa
    programas.push(programa);
    var list = "";
    for (var i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + " versión " + programas[i].getVersion();
        "</li>";
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
    document.getElementById("nombre").value = "";
    ;
    document.getElementById("version").value = "";
    ;
}
