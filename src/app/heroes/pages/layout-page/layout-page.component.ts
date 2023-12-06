import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [`.spacer{
    flex: 1 1 auto;
    color: blue;
  }`
  ]
})
export class LayoutPageComponent {
  public sideBarItems = [
    { label: 'listado', icon: 'label', url: '.list'},
    { label: 'anadir', icon: 'add', url: './new-hero'},
    { label: 'Buscar', icon: 'search', url: './search'}
  ]
}
