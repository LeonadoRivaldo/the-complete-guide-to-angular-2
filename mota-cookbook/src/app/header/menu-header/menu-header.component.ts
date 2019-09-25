import { Component, OnInit } from '@angular/core';
import Menu from 'src/app/bo/models/menu.component.model';
import { MENU_HEADER } from './menu.mock';


@Component({
  selector: 'mcb-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {

  menu: Menu;

  constructor() { }

  ngOnInit() {
    this.menu = new Menu(MENU_HEADER);
  }

}
