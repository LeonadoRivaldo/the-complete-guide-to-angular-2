import { IListITem } from 'src/app/shared/components/list-item/list-item.compenent.model';
import { Subscription } from 'rxjs';
import { OnInit, OnDestroy } from '@angular/core';


export interface IListItemController<T> extends OnInit, OnDestroy {
  /** props */
  list: T[];
  item: T;
  items: IListITem[];
  addItem$: Subscription;
  editItem$: Subscription;
  selectItem$: Subscription;
  removeItem$: Subscription;


  /** methods */
  bluidItems(): IListITem[];
  addItem(newItem: boolean): void;
  editItem(item: T): void;
  selectItem(item: T): void;
  removeItem(item: T): void;
  selectedItem(item: IListITem): void;
  clearSubscriptions(): void;
  createSubscriptions(): void;
}
