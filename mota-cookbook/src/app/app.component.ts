import { Component, OnInit } from '@angular/core';
import { PageStateService } from './shared/services/page-state.service';

@Component({
  selector: 'mcb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private pageStateService: PageStateService) { }

  private get pageState(): string {
    return this.pageStateService.state;
  }

  get recipes(): boolean {
    return this.pageState === 'recipes-list';
  }

  get shoppingList(): boolean {
    return this.pageState === 'shopping-list';
  }

  ngOnInit() {}

}
