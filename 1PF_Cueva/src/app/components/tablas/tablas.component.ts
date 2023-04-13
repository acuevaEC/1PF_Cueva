import { Component } from '@angular/core';

interface Estudiante {
  id: number;
  nombre: string;
  apellido: string,
  ci: string;
  email: string;
}

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent {

  estudiantes: Estudiante[]=[
    {
      id: 1,
      nombre: 'Andres',
      apellido:'Cueva',
      ci:'1722303245',
      email:'andres.cueva.c@gmail.com'
    },
    {
      id: 2,
      nombre: 'Pablo',
      apellido:'Cueva',
      ci:'1714000659',
      email:'pb.cueva@gmail.com'
    },
    {
      id: 3,
      nombre: 'Daniela',
      apellido:'Rios',
      ci:'1578258629',
      email:'daniela.r.ec@gmail.com'
    },
  ]
  displayedColumns: string[]=['id','nombre','apellido','ci','email'];
}

