import IGroceriesItem from './groceries.model';
import { EventEmitter } from '@angular/core';

export default class RecipeIngredient implements IGroceriesItem {
  name: string;
  quantity: number;
  noStock?: boolean;
  price?: number;
  lowStock?: EventEmitter<string>;
  uuid?: string;
  bought?: boolean;
  totalPrice?(): number {
    throw new Error('Method not implemented.');
  }
  checkStock(): void {
    throw new Error('Method not implemented.');
  }

}

