import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageActionServiceService {

  private pageAddRecipe = new Subject<any>();
  private pageAddShoppingList = new Subject<any>();

  pageRecipeAdded$ = this.pageAddRecipe.asObservable();
  pageShoppingListAdded$ = this.pageAddRecipe.asObservable();


  constructor() {}

  addItem( item: string ) {
    if ( item === 'recipe' ) {
      this.pageAddRecipe.next(true);
    } else if ( item === 'shopping-list' ) {
      this.pageAddShoppingList.next(true);
    }

  }


}
