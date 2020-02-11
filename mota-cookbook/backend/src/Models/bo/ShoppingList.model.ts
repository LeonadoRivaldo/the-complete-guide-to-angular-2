import IShoppingListItem from './ShoppingListItem.model';

export interface IShoppingList {
  items: IShoppingListItem[];
  listName: string;
  totalPrice: number;
  totalItens: number;
  totalBoughtItems: number;
  boughtAllItems: boolean;
  uuid?: string;
}