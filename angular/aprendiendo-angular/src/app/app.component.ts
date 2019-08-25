import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Master en JavaScript y Angular';
  public mostrar_videojuegos: boolean = true;
  
  ocultarVideoJuegos(value) {
      this.mostrar_videojuegos = value;
  } 

}
