import { Component, OnInit } from '@angular/core';
// cargamos el servicio 
import { PeticionesService } from '../services/peticiones.service'
@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;
  public fecha:any;
  public fechaActual:any;
  constructor(private _peticionesService: PeticionesService) {
    this.userId = 1;
  }

  ngOnInit() {
    this.cargaUsuario();
    this.fecha = new Date(2019,0,12);
    this.fechaActual = new Date();
  }

  cargaUsuario() {
    // para que pueda mostrar el mensaje de ...cargando
    this.user = false;
     // el método suscribe para suscribirse y recoger 
    // tiene 2 funciones de callback
    this._peticionesService.getUser(this.userId).subscribe(
    result => {
      console.log(result);
      // data es donde se encuentra el objeto
      this.user = result.data;
    },
    error => {
      // cualquier error
      console.log(<any>error);
    }
  );
  }

}
