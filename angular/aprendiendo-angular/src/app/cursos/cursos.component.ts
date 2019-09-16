import { Component, OnInit } from '@angular/core';
// para poder recoger parámetros de la url, hay que cargar varios componentes del router
import { Router, ActivatedRoute, Params } from '@angular/router'
@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre: string;
  public followers: number;
  constructor(
    // servicios 
    private _route: ActivatedRoute,
    private _router: Router) { }

  // Método que se ejecuta nada más cargar el componente
  ngOnInit() {
    // Recoger el parámetro por la url
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      console.log(this.nombre);
      // array asociativo js
      //this.nombre = params['nombre'];
      
      // para convertirlo a number se le pone un + delante
      this.followers = +params.followers;
      // devuelve un string
      console.log(typeof this.followers);
      
      if(this.nombre == 'ninguno') {
        this._router.navigate(['/home'])
      }
    });
  }

  redirigir() {
    this._router.navigate(['/zapatillas']);
  }
}
