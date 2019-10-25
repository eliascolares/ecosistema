import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    NgMaterialMultilevelMenuModule,
    RouterModule,
    FontAwesomeModule,
    LazyLoadImageModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
