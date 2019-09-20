// importar los módulos de las pipes
import { Pipe, PipeTransform } from '@angular/core';

// decorador
@Pipe({
    name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform {
    // dato | calculadora: otroDato
    // param1       param2
    transform(value:any, value_two:any){
        let operation = `
        Suma: ${value + value_two} -
        Resta: ${value - value_two} -
        Multiplicaion: ${value * value_two} -
        Division: ${value / value_two} 
        `
        return operation;
    }

}