import IGroceriesItem from './groceries.model';
import { EventEmitter } from '@angular/core';
import * as uuid from 'uuid';

export default class ShoppingListItem implements IGroceriesItem {

  name: string;
  quantity: number;
  price: number;
  lowStock: EventEmitter<string>;
  noStock: boolean;
  uuid?: string;
  bought?: boolean;


  // tslint:disable-next-line: variable-name
  constructor(name: string, quantity: number, price: number, _uuid?: string) {
    this.name  = name;
    this.quantity = quantity;
    this.price = price;
    this.uuid = _uuid || uuid.v4();
  }

  /**
   * item price * quantity
   *
   * @returns number
   */
  totalPrice(): number {
    return this.price * this.quantity;
  }

  checkStock(): void {
    throw new Error('Method not implemented.');
  }

}




