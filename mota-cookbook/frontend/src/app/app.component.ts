import { Component } from '@angular/core';
import { PageStateService } from './shared/services/page-state.service';
import { PageActionServiceService } from './shared/services/page-action-service.service';
import { PageState } from './bo/models/menu.item.model';

const newBtnLabels = {
  'recipes-list': 'recipe',
  'shopping-list': 'shopping list',
  ingredients: 'ingredient',
  'meal-planning': 'meal plan'
};



@Component({
  selector: 'mcb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageState: PageState = 'home';
  title: string;


  constructor(
    private pageStateService: PageStateService,
    private pageActionServiceService: PageActionServiceService
  ) {
    pageStateService.pageTileChange$.subscribe(
      (title) => {
        setTimeout(() => this.title = title);
      }
    );

    pageStateService.pageStateChange$.subscribe(
      (state: PageState) => {
        setTimeout(() => this.setPageState(state));
      }
    );
  }


  get addBtnLabel(): string {
    const stateLabel = newBtnLabels[this.pageState];
    return `New ${stateLabel ? stateLabel : ''}`;
  }
  get isRecipesList() {
    return this.pageState === 'recipes-list';
  }
  get isShoppingList() {
    return this.pageState === 'shopping-list';
  }
  get isIngrentsStock() {
    return this.pageState === 'ingredients';
  }
  get isMealPlanning() {
    return this.pageState === 'meal-planning';
  }
  get isHome() {
    return this.pageState === 'home';
  }


  /** METHODS */
  public readonly actionAdd = () => this.pageActionServiceService.addItem(this.pageState);


  /** INTERNAL METHODS */
  private readonly setPageState = (state: PageState) => this.pageState = state;
}
