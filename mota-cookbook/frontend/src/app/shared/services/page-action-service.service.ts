import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PageState } from 'src/app/bo/models/menu.item.model';




@Injectable({
  providedIn: 'root'
})
export class PageActionServiceService {

  private subjectList = [
    'pageAddRecipe',
    'pageAddShoppingList',
    'pageAddMealPlanning',
    'pageAddIngredient',
  ];

  private pageAddRecipe = new Subject<any>();
  private pageAddShoppingList = new Subject<any>();
  private pageAddMealPlanning = new Subject<any>();
  private pageAddIngredient = new Subject<any>();


  pageRecipeAdded$ = this.pageAddRecipe.asObservable();
  pageShoppingListAdded$ = this.pageAddRecipe.asObservable();
  pageMealPlanningAdded$ = this.pageAddMealPlanning.asObservable();
  pageIngredientAdded$ = this.pageAddIngredient.asObservable();

  constructor() {
  }

  addItem( item: PageState ): void {
    switch (item) {
      case 'recipes-list':
        this.pageAddRecipe.next(true);
        break;
      case 'shopping-list':
        this.pageAddShoppingList.next(true);
        break;
      case 'meal-planning':
        break;
      case 'ingredients':
        break;
      default:
        break;
    }
  }


}
