import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// para poder usar los elementos de los formulario hay que cargar el paquete FormsModule
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// mis módulos de angular
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
@NgModule({
  declarations: [
    AppComponent,
      VideojuegoComponent,
      ZapatillasComponent,
      CursosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
