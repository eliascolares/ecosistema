import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    NgMaterialMultilevelMenuModule,
    RouterModule
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
