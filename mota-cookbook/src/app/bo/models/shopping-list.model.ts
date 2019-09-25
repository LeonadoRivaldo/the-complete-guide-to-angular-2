import ShoppingListItem from './shopping-list-item.model';

export interface IShoppingList {
  list: ShoppingListItem[];
  listName: string;
  totalPrice: number;
  totalItens: number;

  getItem(itemName: string): ShoppingListItem;


}
