import { Pipe, PipeTransform } from '@angular/core';
import {Estudiante} from 'src/app/components/tablas/tablas.component'


@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: Estudiante, ...args: unknown[]): unknown {
    

    const newValue = ` ${value.apellido.toUpperCase()} ${value.nombre}`;
    
    return newValue;
  }

}
