import { Component, OnInit, HostListener } from '@angular/core';
import Menu from 'src/app/bo/models/menu.component.model';
import { MENU_HEADER } from './menu.mock';
import { PageStateService } from 'src/app/shared/services/page-state.service';
import { NavigationService } from 'src/app/shared/services/navigation.service';
import { PageState } from 'src/app/bo/models/menu.item.model';



@Component({
  selector: 'mcb-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {

  showMenu: boolean;
  menuOut: boolean;
  menu: Menu;
  pageState: PageState;

  constructor(
    public readonly pageStateService: PageStateService,
    private readonly navService: NavigationService,
  ) {
    pageStateService.pageStateChange$.subscribe(
      (state: PageState) => {
        this.pageState = state;
      }
    );
  }

  ngOnInit() {
    this.menu = new Menu(MENU_HEADER);
   // this.startState();
  }

  navigate($event: Event, link: string) {
    let state = link;

    $event.preventDefault();

    if ( state === '/' ) {
      state = 'home';
    }

    this.pageStateService.changePageState(state);
    this.pageStateService.setPageTitle(this.menu.items.find((i) => i.link === link ).label );
    this.navService.nagivate([link]);
  }

  isActive( link: string ) {
    return this.pageState === link;
  }

  @HostListener('window:click', ['$event.target'])
  tooglePane(target: HTMLElement) {
    // const menu = this.$findElement.findParent(target, 'nav-menu', 'mcb-menu-header');
    // const menuContainer = this.$findElement.findParent(target, 'menu-container', 'mcb-menu-header');
    /* const forbidden = target.classList.contains('btn-ico')
                      || target.classList.contains('menu-btn')
                      || target.classList.contains('menu-container');

    if ( forbidden || menuContainer ) {
      return;
    }


    if ( this.showMenu && !menu ) {
      this.toogleMenu();
    }
    */
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
