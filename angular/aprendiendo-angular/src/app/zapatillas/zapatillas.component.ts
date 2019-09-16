import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';
@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    styleUrls: ['./zapatillas.component.css'],
    // inyectar como un servicio del componente
    providers: [ZapatillaService]
})

export class ZapatillasComponent implements OnInit {
    public titulo: string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public mi_marca: string;

    // inyectar como dependencia dentro de una propiedad, los servicios tienen guión bajo delante
    constructor(private _zapatillaService: ZapatillaService) {
        this.color = 'yellow';
        this.mi_marca = 'Fila';
        // hay que inicializar marcas para poder usar el push en getMarcas
        this.marcas = new Array();
    }

    // nada más cargar se ejecuta
    ngOnInit() {

        this.zapatillas = this._zapatillaService.getZapatillas();
        this.getMarcas();
        alert(this._zapatillaService.getTexto());

    }

    getMarcas() {
        this.zapatillas.forEach((zapatilla, index) => {
            // si no encuetra la marca la añde 
            if (this.marcas.indexOf(zapatilla.marca) < 0) {
                this.marcas.push(zapatilla.marca);
            }
        });
        console.log(this.marcas);
    }

    getMarca() {
        alert(this.mi_marca);
    }

    addMarca() {
        this.marcas.push(this.mi_marca)
    }
    borrarMarca(indice) {
        //delete this.marcas[indice];
        this.marcas.splice(indice, 1)
    }

    onBlur() {
        console.log("Ha salido del input");
    }
    mostrarPalabra() {
        alert(this.mi_marca);
    }
}