import { Injectable } from '@angular/core';
import ShoppingListItem from 'src/app/bo/models/shopping-list-item.model';
import { Subject } from 'rxjs';
import { ShoppingList } from 'src/app/bo/models/shopping-list.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListDetailService {

  // Observable string sources
  private selectedShoppingList = new Subject<ShoppingList>();

  // Observable string streams
  shoppingListIsSelected$ = this.selectedShoppingList.asObservable();

  selectShoppingList( list: ShoppingList ) {
    this.selectedShoppingList.next( list );
  }

  constructor() {
  }
}
