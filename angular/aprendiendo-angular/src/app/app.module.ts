import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// para poder usar los elementos de los formulario hay que cargar el paquete FormsModule
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// importamos el módulo de rutas
import {routing, appRoutingProviders} from './app.routing';
// para poder trabajar con las peticiones ajax ha que importar el módulo
import { HttpClientModule } from '@angular/common/http';

// mis módulos de angular
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { fromEventPattern } from 'rxjs';

// pipe 
import { CalculadoraPipe} from './pipes/calculadora.pipe'
@NgModule({
  declarations: [
    AppComponent,
      VideojuegoComponent,
      ZapatillasComponent,
      CursosComponent,
      HomeComponent,
      ExternoComponent,
      CalculadoraPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // el routing es un módulo
    routing,
    // para trabajar con ajax
    HttpClientModule
  ],
  providers: [
    // appRoutingProviders es un servicio
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
