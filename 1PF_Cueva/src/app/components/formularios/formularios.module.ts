import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulariosComponent } from './formularios.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { PipesModule } from '../shared/pipes/pipes.module';
import { DirectivesModule } from '../shared/directives/directives.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    FormulariosComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    PipesModule,
    DirectivesModule,
    MatDialogModule,
    
    
  ],
  exports: [
    FormulariosComponent
  ]
})
export class FormulariosModule { }
