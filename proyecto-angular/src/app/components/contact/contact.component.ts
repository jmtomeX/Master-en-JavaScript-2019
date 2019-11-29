import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // propiedad (ancho) para pasarle al componente hijo slider
public widthSlider: number;
public withToSlider: any;
public captions:boolean;
public autor: any;
  constructor() { 
    this.captions = true;
  }

  ngOnInit() {
 
  }
cargarSlider() {
this.withToSlider = this.widthSlider;
}
resetSlider() {
this.withToSlider = false;
}

getAutorFather(event) {
  this.autor = event;
}
  }
