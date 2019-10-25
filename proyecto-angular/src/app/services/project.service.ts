//
import { Injectable } from '@angular/core';
// hacer peticiones ajax
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/project';
import { Global } from './global';

@Injectable()
// definir servicio
export class ProjectService {
    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }
    // servicio de prueba
    testService() {
        return 'Probando el serviciio de angular'
    }

    //guardar proyecto en la base de datos
    saveProject(project: Project): Observable<any> {
        // pasamos el proyecto a formato json
        let params = JSON.stringify(project);
        // establecer las cabezeras, para que la aplicación viaje en formato json ( , 'application/json')
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        // hacemos la petición por POST, el método save-project está en backend_nodejs\routes\project.js
        return this._http.post(this.url + 'save-project', params, { headers: headers });
    }
}