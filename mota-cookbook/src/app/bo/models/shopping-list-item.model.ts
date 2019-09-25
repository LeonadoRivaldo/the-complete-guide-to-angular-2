import IGroceriesItem from './groceries.model';
import { EventEmitter } from '@angular/core';

export default class ShoppingListItem implements IGroceriesItem {
  lowStock: EventEmitter<string>;
  price: number;
  name: string;
  quantity: number;
  noStock: boolean;
}




