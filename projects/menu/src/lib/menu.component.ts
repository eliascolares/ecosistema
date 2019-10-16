import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menuItems: [];
  @Input() logoUrl: string;
  @Input() name: string;

  config = {
    paddingAtStart: true,
    classname: 'my-custom-class',
    listBackgroundColor: 'transparent',
    fontColor: '#ffffff',
    backgroundColor: '#3d3d3d',
    selectedListFontColor: '#40b000',
    interfaceWithRoute: true
  };

  constructor() { }

  ngOnInit() {
  }

  onLogout(): void {
    console.log('Logout');
  }

  selectItem(sidenav: any): void {
    if (sidenav._opened) {
      sidenav.toggle();
    }
  }

}
