import { EventEmitter } from '@angular/core';

export default interface IGroceriesItem {

  name: string;
  quantity: number;

  uuid?: string;
  bought?: boolean;
  noStock?: boolean;
  price?: number;
  lowStock?: EventEmitter<string>;

  totalPrice?(): number;
  checkStock(): void;
}


