// para poder injectar en otras clases 
import { Injectable } from '@angular/core';

// permiten hacer peticiones ajax a servicios externo y modificar las cabezeras de esas peticiones
import { HttpClient, HttpHeaders } from '@angular/common/http';

// recoge la información que devuelve el apirest
// rxjs es una libreria que se instala al crear el proyecto
import { Observable } from 'rxjs/Observable';


// decorador
@Injectable()
export class PeticionesService {
    public url: string;

    // inyectamos el servicio http para poder usar el servicio para las peticiones
    constructor(public _http: HttpClient) {
        this.url = "https://reqres.in/"
    }
    // devuelve un observalbe de cualquier tipo
    getUser(UserId): Observable<any> {
        // usamos httpClient
        return this._http.get(this.url + "api/users/" + UserId);
    }

    addUser(user): Observable<any> {
        // convertir un objeto js a un json.string
        let params = JSON.stringify(user);
        // tipo de cabecera
        let headers = new HttpHeaders().set('Content-type', 'application/json');

        return this._http.post(this.url + 'api/users', params, { headers: headers })
    }
}