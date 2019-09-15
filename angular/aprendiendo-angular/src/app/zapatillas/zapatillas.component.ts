import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    styleUrls: ['./zapatillas.component.css']
})

export class ZapatillasComponent implements OnInit {
    public titulo: string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public mi_marca: string;

    constructor() {
        this.color = 'yellow';
        this.mi_marca = 'Fila';
        // hay que inicializar marcas para poder usar el push en getMarcas
        this.marcas = new Array();
        this.zapatillas = [
            new Zapatilla('Reebook Classic', 80, 'Reebok', 'Blancas', true),
            new Zapatilla('Reebook Spartan', 100, 'Reebok', 'Rojas', false),
            new Zapatilla('Adidas MAx', 110, 'Adidas', 'Negras', true),
            new Zapatilla('Acsics Blind', 80, 'Acsics', 'Azules', false),
            new Zapatilla('Adidas Airmax', 180, 'Adidas', 'Blancas', true),
            new Zapatilla('Bamba SuperStart', 18, 'Bamba', 'Blancas', true)
        ]
    }

    // nada más cargar se cargan se ejecuta
    ngOnInit() {
        console.log(this.zapatillas);
        this.getMarcas();

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