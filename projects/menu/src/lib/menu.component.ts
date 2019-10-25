import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faAngleDown, faBell, faCog, faTh } from '@fortawesome/free-solid-svg-icons';
import { MenuInterface } from './menu.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-ecosistema-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() alterarIdioma = new EventEmitter();
  @Output() alterarTema = new EventEmitter();
  @Output() logout = new EventEmitter();
  @Input() params: MenuInterface;

  formConfigs: FormGroup;

  public defaultImage = '../../../../assets/images/image_loading.gif';
  faAngleDown = faAngleDown;
  faBell = faBell;
  faCog = faCog;
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

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formConfigs = this.formBuilder.group({
      language: [''],
      theme: [''],
    });

    this.atualizaForm();
  }

  atualizaForm(): void {
    this.formConfigs.get('language').setValue(this.params.idioma);
    this.formConfigs.get('theme').setValue(this.params.tema);
  }

  onLogout(): void {
    this.logout.emit(true);
  }

  selectItem(sidenav: any): void {
    if (sidenav._opened) {
      sidenav.toggle();
    }
  }

  changeLanguage(e: Event): void {
    this.alterarIdioma.emit(e);
  }

  changeTheme(e: Event): void {
    this.alterarTema.emit(e);
  }
}
