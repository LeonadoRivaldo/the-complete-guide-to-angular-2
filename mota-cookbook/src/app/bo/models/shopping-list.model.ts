import ShoppingListItem from './shopping-list-item.model';
import * as uuid from 'uuid';

export interface IShoppingList {
  items: ShoppingListItem[];
  listName: string;
  uuid?: string;

  getItem(itemName: string): ShoppingListItem;
  totalPrice(): number;
  totalItens(): number;
  boughtItems(): number;
  boughtAll(): boolean;

}


export class ShoppingList implements IShoppingList {
  uuid?: string;
  listName: string;
  items: ShoppingListItem[];

  // tslint:disable-next-line: variable-name
  constructor( listName: string, list: ShoppingListItem[], _uuid?: string ) {

    console.log( list );

    this.listName = listName;
    this.items = list;
    this.uuid = _uuid || uuid.v4();
  }

  getItem(itemName: string): ShoppingListItem {
    throw new Error('Method not implemented.');
  }
  totalPrice(): number {
    if ( this.items.length === 0 ) {
      return 0;
    } else {
      let total = 0;
      this.items.forEach( i => total += i.totalPrice() );
      return total;
    }
  }
  totalItens(): number {
    return this.items.length;
  }
  boughtItems(): number {
    return this.items.filter( i => i.bought ).length;
  }
  boughtAll(): boolean {
    return this.boughtItems() === this.totalItens();
  }

}
