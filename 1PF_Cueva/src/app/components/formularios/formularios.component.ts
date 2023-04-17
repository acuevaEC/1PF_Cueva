import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Estudiante } from '../tablas/tablas.component';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css'],
})
export class FormulariosComponent {
  nombreControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  emailControl = new FormControl('', [
    Validators.email,
    Validators.minLength(3),
    Validators.required,
  ]);
  apellidoControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  ciControl = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    this.numericValidator(),
  ]);

  formularioRegistro = new FormGroup({
    
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    email: this.emailControl,
    ci: this.ciControl,
  });

  numericValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let val = control.value;
      if (val === null || val === '') return null;
      if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/))
        return { invalidNumber: true };

      return null;
    };
  }



  constructor(private dialogRef: MatDialogRef<FormulariosComponent>) {}

  guardar(): void {
    if(this.formularioRegistro.valid){
      this.dialogRef.close(this.formularioRegistro.value);
    }
    else{
      console.log(this.formularioRegistro)
      alert("formulario incompleto");
    }
   
  }


}

