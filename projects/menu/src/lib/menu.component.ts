import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faAngleDown, faBell, faTh } from '@fortawesome/free-solid-svg-icons';
import { MenuInterface } from './menu.interface';

@Component({
  selector: 'lib-ecosistema-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss']
})
export class MenuComponent {

  @Output() logout = new EventEmitter();
  @Input() params: MenuInterface;

  faAngleDown = faAngleDown;
  faBell = faBell;
  faTh = faTh;

  config = {
    paddingAtStart: true,
    classname: 'my-custom-class',
    listBackgroundColor: 'transparent',
    fontColor: '#ffffff',
    backgroundColor: '#3d3d3d',
    selectedListFontColor: '#40b000',
    interfaceWithRoute: true
  };

  onLogout(): void {
    this.logout.emit(true);
  }

  selectItem(sidenav: any): void {
    if (sidenav._opened) {
      sidenav.toggle();
    }
  }

}
