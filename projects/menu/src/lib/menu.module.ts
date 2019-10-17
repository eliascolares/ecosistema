import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    NgMaterialMultilevelMenuModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
