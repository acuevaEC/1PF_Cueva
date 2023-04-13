import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { TablasModule } from '../tablas/tablas.module';
import { FormulariosModule } from '../formularios/formularios.module';






@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    TablasModule,
    FormulariosModule,
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule {
  
 }
