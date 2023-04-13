import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablasComponent } from './tablas.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DirectivesModule } from '../shared/directives/directives.module';
import { FormulariosModule } from "../formularios/formularios.module";
import { AbmAlumnosModule } from './abm-alumnos/abm-alumnos.module';




@NgModule({
    declarations: [
        TablasComponent,
    ],
    exports: [
        TablasComponent,
    ],
    imports: [
        CommonModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        SharedModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        DirectivesModule,
        FormulariosModule,
        AbmAlumnosModule
    ]
})
export class TablasModule { }
