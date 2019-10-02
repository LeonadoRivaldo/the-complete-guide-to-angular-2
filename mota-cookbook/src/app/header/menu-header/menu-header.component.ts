import { Component, OnInit, HostListener } from '@angular/core';
import Menu from 'src/app/bo/models/menu.component.model';
import { MENU_HEADER } from './menu.mock';
import { PageStateService } from 'src/app/shared/services/page-state.service';
import { TouchSequence } from 'selenium-webdriver';


@Component({
  selector: 'mcb-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {

  showMenu: boolean;
  menuOut: boolean;
  menu: Menu;
  pageState: string;

  constructor(private pageStateService: PageStateService) {
    pageStateService.pageStateChange$.subscribe(
      (state) => {
        this.pageState = state;
      }
    );
  }

  ngOnInit() {
    this.menu = new Menu(MENU_HEADER);
    this.startState();
  }

  navigate($event: Event, link: string) {
    $event.preventDefault();
    this.pageStateService.changePageState(link);
    this.pageStateService.setPageTitle( this.menu.items.find((i) => i.link === link ).label );
  }

  isActive( link: string ) {
    return this.pageState === link;
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

  private startState() {
    const item = this.menu.items.find(i => i.link === 'recipes-list');
    this.pageStateService.changePageState(item.link);
    this.pageStateService.setPageTitle( item.label );
  }

}
