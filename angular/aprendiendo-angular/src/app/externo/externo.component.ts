import { Component, OnInit } from '@angular/core';
// cargamos el servicio 
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css', '../contacto/contacto.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;
  public fecha: any;
  public fechaActual: any;

  // añadir nuevos usuarios, se encuentra el servicio en services/peticiones.service
  public new_user: any;
  public usuario_guardado;

  constructor(private _peticionesService: PeticionesService) {
    this.userId = 1;
    this.new_user = {
      "name": "",
      "job": ""
    };
  }

  ngOnInit() {
    this.cargaUsuario();
    this.fecha = new Date(2019, 0, 12);
    this.fechaActual = new Date();
  } 

  onSubmit(form) {
    // llama al servicio de peticiones y a el método que se ha creado
    this._peticionesService.addUser(this.new_user).subscribe(
      response => {
        this.usuario_guardado = response;
        
        // vaciamos el formulario
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  cargaUsuario() {
    // para que pueda mostrar el mensaje de ...cargando
    this.user = false;
    // el método suscribe para suscribirse y recoge la información que devuelva
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

