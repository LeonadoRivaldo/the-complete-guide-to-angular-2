import IMenuItem from './menu.item.model';

interface IMenu {
  items: IMenuItem[];
  orderBy(prop: string): IMenuItem[];
  orderByOrder(): IMenuItem[];
}

export default class Menu implements IMenu {
  // tslint:disable-next-line: variable-name
  private _items: IMenuItem[];

  constructor(items: IMenuItem[]) {
    this.items = items;
  }


  orderBy(prop: string): IMenuItem[] {
    return this._items.sort((a, b) => a[prop] - b[prop]);
  }

  orderByOrder(): IMenuItem[] {
    return this.orderBy('order');
  }

  get items(): IMenuItem[] {
    return this.orderByOrder();
  }

  set items(items: IMenuItem[]) {
    this._items = items;
  }


}
