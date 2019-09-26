import { Component, OnInit } from '@angular/core';
import Menu from 'src/app/bo/models/menu.component.model';
import { MENU_HEADER } from './menu.mock';
import { PageStateService } from 'src/app/shared/services/page-state.service';


@Component({
  selector: 'mcb-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {

  menu: Menu;

  constructor(private pageStateService: PageStateService) { }

  ngOnInit() {
    this.menu = new Menu(MENU_HEADER);
  }

  navigate($event: Event, link: string) {
    $event.preventDefault();
    this.pageStateService.state = link;
  }

  isActive( link: string ) {
    return this.pageStateService.state === link;
  }


}
