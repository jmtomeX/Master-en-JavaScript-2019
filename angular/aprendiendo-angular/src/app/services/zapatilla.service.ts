import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService {
    public zapatillas: Array<Zapatilla>;

    constructor() {
        this.zapatillas = [
            new Zapatilla('Reebook Classic', 80, 'Reebok', 'Blancas', true),
            new Zapatilla('Reebook Spartan', 100, 'Reebok', 'Rojas', false),
            new Zapatilla('Adidas MAx', 110, 'Adidas', 'Negras', true),
            new Zapatilla('Acsics Blind', 80, 'Acsics', 'Azules', false),
            new Zapatilla('Adidas Airmax', 180, 'Adidas', 'Blancas', true),
            new Zapatilla('Bamba SuperStart', 18, 'Bamba', 'Blancas', true)
        ];
    }
    getTexto() {
        return "Recibido desde un servicio";
    }

    getZapatillas(): Array<Zapatilla> {
        return this.zapatillas;
    }
}