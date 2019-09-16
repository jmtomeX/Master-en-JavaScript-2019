// Importar modulos del router de angular
// este modulo permite trabajar con el router, es un modulo interno
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar los componentes
import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';

// Array de rutas, aquí es donde se dan de alta y configuran las rutas
const appRoutes: Routes = [
    // ruta principal
    {path: '', component: HomeComponent},
    // ruta alternativa para que no se quede marcado el .active
    {path: 'home', component: HomeComponent},
    {path: 'zapatillas', component: ZapatillasComponent},
    {path: 'videojuegos', component: VideojuegoComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'cursos/:nombre/:followers', component: CursosComponent},
    // ruta 404, se le pone en último lugar para que no de errores
    {path:  '**', component: HomeComponent}

];

// exportar el módulo
// el servicio del router
export const appRoutingProviders:any = [];
// aquí se carga toda la configuranción de nuestra ruta y se le da de alta, 
// exportamos el servicio y el módulo
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
