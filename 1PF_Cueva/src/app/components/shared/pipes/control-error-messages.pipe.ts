import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'controlErrorMessages'
})
export class ControlErrorMessagesPipe implements PipeTransform {

  transform(error: any, ...args: unknown[]): unknown {
    
    if (!error) return '';

    let defaultMsg = 'Error desconocido';
    const opciones: Record<string, string> = {
      required: 'Este campo es requerido',
      minlength: `Este campo debe tener al menos ${error.value.requiredLength} caracteres`, //${error.value.requiredLength}
      email: 'El valor debe ser un e-mail valido',
      invalidNumber: 'El valor solo puede ser numérico'
    }

    if (opciones[error.key]) {
      defaultMsg = opciones[error.key]
    }
    return defaultMsg;
  }

}
