import { Component, OnInit } from '@angular/core';
import { PageStateService } from './shared/services/page-state.service';
import { TouchSequence } from 'selenium-webdriver';
import { PageActionServiceService } from './shared/services/page-action-service.service';

@Component({
  selector: 'mcb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pageState: string;
  title: string;
  recipes = false;
  shoppingList = false;


  constructor(private pageStateService: PageStateService, private pageActionServiceService: PageActionServiceService) {
    pageStateService.pageTileChange$.subscribe(
      (title) => {
        setTimeout(() => this.title = title);
      }
    );

    pageStateService.pageStateChange$.subscribe(
      (state) => {
        setTimeout(() => this.setPageState(state));
      }
    );
  }

  private setPageState(state) {
    this.pageState = state;
    this.shoppingList = state === 'shopping-list';
    this.recipes = state === 'recipes-list';
  }


  get addBtnLabel(): string {
    let label = 'New ';
    if ( this.shoppingList ) {
      label += 'shopping list';
    } else if ( this.recipes ) {
      label += 'recipe';
    }
    return label;
  }

  actionAdd() {
    let item = '';
    if ( this.shoppingList ) {
      item = 'shopping-list';
    } else if ( this.recipes ) {
      item = 'recipe';
    }
    this.pageActionServiceService.addItem( item );
  }

  ngOnInit() {}

}
