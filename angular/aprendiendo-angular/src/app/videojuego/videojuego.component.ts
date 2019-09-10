// HOOKS del cilco de vida de un componente en angualar
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';


@Component({
selector: 'videojuego',
templateUrl: './videojuego.component.html' 


})


export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    // propiedades
    public titulo: string;
    public listado: string;
    
    constructor() {
        this.titulo = "Componente de videojuegos";
        this.listado = "Listado de los juegos más populares"
          console.log("Se ha cargado el componente");  
    }
    
    ngOnInit() {
        //console.log("Oninit ejecutado¡¡¡");
    }
    
    // Se ejecuta cada vez que se realiza un cambio en el componente o en la aplicación
    ngDoCheck() {
        //console.log("Método DoCheck ejecutado")
    }
    
    // hace que se ejecute algo antes de eliminar un componente
    ngOnDestroy() {
         //console.log("Método OnDestroy ejecutado")
    }
    
    cambiarTitulo() {
        this.titulo = "Nuevo titulo del componente";
    }
}