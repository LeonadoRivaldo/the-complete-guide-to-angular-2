import IGroceriesItem from './groceries.model';
import { EventEmitter } from '@angular/core';

export default class RecipeIngredient implements IGroceriesItem {
  name: string;
  quantity: number;
  noStock?: boolean;
  price?: number;
  lowStock?: EventEmitter<string>;
}

