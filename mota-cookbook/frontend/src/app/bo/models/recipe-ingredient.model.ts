import IGroceriesItem from './groceries.model';
import { EventEmitter } from '@angular/core';
import * as uuid from 'uuid';

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

  get obtained(): boolean {
    return this.bought;
  }

  set obtained(obtained: boolean) {
    this.bought = obtained;
  }

  // tslint:disable-next-line: variable-name
  constructor( name: string, quantity: number, _uuid: string = uuid.v4() ) {
    this.name = name;
    this.quantity = quantity;
    this.uuid = _uuid;
  }

}

