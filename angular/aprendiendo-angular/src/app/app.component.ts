import { Component } from '@angular/core';

// cargar el archivo configuración.ts para poder usar sus variables del objeto json
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Master en JavaScript y Angular';
  public descripcion: string;
  public mostrar_videojuegos: boolean = false;
  public config;

  // accedemos al objeto json Configuración
  constructor() {
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }
  
  ocultarVideoJuegos(value) {
   this.mostrar_videojuegos = value; 
  } 

}
