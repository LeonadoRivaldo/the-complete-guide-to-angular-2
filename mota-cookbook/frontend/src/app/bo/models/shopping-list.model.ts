import ShoppingListItem from './shopping-list-item.model';
import * as uuid from 'uuid';

export interface IShoppingList {
  items: ShoppingListItem[];
  listName: string;
  totalPrice: number;
  totalItens: number;
  totalBoughtItems: number;
  boughtAllItems: boolean;
  uuid?: string;

  getItem(itemName: string): ShoppingListItem;


}


export class ShoppingList implements IShoppingList {
  uuid?: string;
  listName: string;
  items: ShoppingListItem[];

  // tslint:disable-next-line: variable-name
  constructor( listName: string, list: ShoppingListItem[], _uuid?: string ) {
    this.listName = listName;
    this.items = list;
    this.uuid = _uuid || uuid.v4();
  }

  getItem(itemName: string): ShoppingListItem {
    throw new Error('Method not implemented.');
  }
  get totalPrice(): number {
    if ( this.items.length === 0 ) {
      return 0;
    } else {
      let total = 0;
      this.items.forEach( i => total += i.totalPrice() );
      return total;
    }
  }
  get totalItens(): number {
    return this.items.length;
  }
  get totalBoughtItems(): number {
    return this.items.filter( i => i.bought ).length;
  }
  get boughtAllItems(): boolean {
    return this.totalBoughtItems === this.totalItens;
  }

}
