import { Component, OnInit, ContentChild } from '@angular/core';
import { MenuHeaderComponent } from './menu-header/menu-header.component';

@Component({
  selector: 'mcb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'TEMP';
  @ContentChild('menu', { static: false }) menu: MenuHeaderComponent;

  constructor() { }

  ngOnInit() {
  }

}
