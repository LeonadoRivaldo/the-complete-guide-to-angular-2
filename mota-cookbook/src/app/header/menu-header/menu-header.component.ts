import { Component, OnInit, HostListener } from '@angular/core';
import Menu from 'src/app/bo/models/menu.component.model';
import { MENU_HEADER } from './menu.mock';
import { PageStateService } from 'src/app/shared/services/page-state.service';


@Component({
  selector: 'mcb-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {

  showMenu: boolean;
  menuOut: boolean;
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

  @HostListener('window:click', ['$event.target'])
  tooglePane(target) {

    if ( this.showMenu ) {
      console.log('MenuHeaderComponent:@HostListener:tooglePane => implement it later!');
    }
    // TODO : continue
  }

  toogleMenu() {

    if (!this.showMenu) {
      this.showMenu = true;
    } else {
      this.menuOut = true;
      setTimeout(() => {
        this.menuOut = false;
        this.showMenu = false;
      }, 500);
    }
  }


}
