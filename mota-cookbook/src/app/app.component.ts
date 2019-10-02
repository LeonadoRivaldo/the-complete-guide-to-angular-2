import { Component, OnInit } from '@angular/core';
import { PageStateService } from './shared/services/page-state.service';
import { TouchSequence } from 'selenium-webdriver';

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


  constructor(private pageStateService: PageStateService) {
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

  ngOnInit() {}

}
