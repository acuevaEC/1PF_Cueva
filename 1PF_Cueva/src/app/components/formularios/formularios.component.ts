import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

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
  identificacionControl = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    this.numericValidator(),
  ]);

  formularioRegistro = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    email: this.emailControl,
    identificacion: this.identificacionControl,
  });

  numericValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let val = control.value;
      if (val === null || val === '') return null;
      if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) return { 'invalidNumber': true };

      return null;
    };
  }
  constructor(private dialogRef: DialogRef){
  }
  guardar(): void{
    console.log(this.formularioRegistro.value);
    this.dialogRef.close(this.formularioRegistro.value);
  }
}

