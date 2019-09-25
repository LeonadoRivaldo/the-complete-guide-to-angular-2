import { EventEmitter } from '@angular/core';

export default interface IGroceriesItem {

  name: string;
  quantity: number;

  noStock?: boolean;
  price?: number;
  lowStock?: EventEmitter<string>;
}


