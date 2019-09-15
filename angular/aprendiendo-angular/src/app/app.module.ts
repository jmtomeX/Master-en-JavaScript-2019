import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// para poder usar los elementos de los formulario hay que cargar el paquete FormsModule
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// importamos el módulo de rutas
import {routing, appRoutingProviders} from './app.routing';
// mis módulos de angular
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
      VideojuegoComponent,
      ZapatillasComponent,
      CursosComponent,
      HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // el routing es un módulo
    routing
  ],
  providers: [
    // appRoutingProviders es un servicio
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
