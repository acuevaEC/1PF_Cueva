import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA,MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormulariosComponent } from '../formularios/formularios.component';
import {FormControl} from '@angular/forms';

export interface Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  ci: string;
  email: string;
  fechaRegistro: Date;
}

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css'],
})


export class TablasComponent {
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  estudiantes: Estudiante[] = [
    {
      id: 1,
      nombre: 'Andres',
      apellido: 'Cueva',
      ci: '1722303245',
      email: 'andres.cueva.c@gmail.com',
      fechaRegistro: new Date(),
    },
    {
      id: 2,
      nombre: 'Pablo',
      apellido: 'Cueva',
      ci: '1714000659',
      email: 'pb.cueva@gmail.com',
      fechaRegistro: new Date(),
    },
    {
      id: 3,
      nombre: 'Daniela',
      apellido: 'Rios',
      ci: '1578258629',
      email: 'daniela.r.ec@gmail.com',
      fechaRegistro: new Date(),
    },
  ];

  dataSource = new MatTableDataSource(this.estudiantes);

  displayedColumns: string[] = ['id', 'nombreCompleto', 'ci', 'email', 'fechaRegistro', 'eliminar','editar'];

  aplicarFiltro(ev: Event): void {

    const inputValue = (ev.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLowerCase();

  }

  constructor(private matDialog: MatDialog) {}

  eliminarAlumno(rowid: number) {
    if (rowid > -1) {
      this.matDialog.getDialogById(rowid.toString());
      this.dataSource.data.splice(rowid,1);
      this.dataSource._updateChangeSubscription();
      console.log(rowid.toString())
    }
  }

  editarAlumno(alumnoParaEditar: Estudiante): void {

    const dialog = this.matDialog.open(FormulariosComponent, {
  
     data: {
        alumnoParaEditar
      }
  
    })
  
    dialog.afterClosed().subscribe((dataDelAlumnoEditado) => {
  
     if (dataDelAlumnoEditado) {
  
      this.dataSource.data = this.dataSource.data.map(
  
       (alumnoActual) => alumnoActual.id === alumnoParaEditar.id
  
        ? ({ ...alumnoActual, ...dataDelAlumnoEditado})
  
        : alumnoActual,
  
      );
  
     }
  
    })
  
   }

abrirEstudiante():void{

  const dialog= this.matDialog.open(FormulariosComponent);

dialog.afterClosed().subscribe((valor) => {
  if (valor) {
    this.dataSource.data=[...this.dataSource.data,{...valor, fechaRegistro:new Date(), id:this.dataSource.data.length+1} ];
    //console.log(this.dataSource.data);
  }
})
 
}




 
}
