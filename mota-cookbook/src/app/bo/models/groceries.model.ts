import { EventEmitter } from '@angular/core';

export default interface IGroceriesItem {

  name: string;
  quantity: number;

  uuid?: string;
  bought?: boolean;
  noStock?: boolean;
  price?: number;
  lowStock?: EventEmitter<string>;
  obtained?: boolean;

  totalPrice?(): number;
  checkStock(): void;
}


