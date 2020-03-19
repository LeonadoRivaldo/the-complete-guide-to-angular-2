import { Component, OnInit, OnDestroy } from '@angular/core';
import ListItem, { IListITem } from 'src/app/shared/components/list-item/list-item.compenent.model';
import ShoppingListItem from 'src/app/bo/models/shopping-list-item.model';
import { Icon } from 'src/app/bo/models/icon.model';
import { IShoppingList, ShoppingList } from 'src/app/bo/models/shopping-list.model';
import { ShoppingListDetailService } from '../shopping-list-details/shopping-list-detail.service';
import { IListItemController, ItemType } from 'src/app/bo/models/list.model';
import { Subscription } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { PageActionServiceService } from 'src/app/shared/services/page-action-service.service';

@Component({
  selector: 'mcb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements IListItemController<ShoppingList> , OnInit, OnDestroy {
  list: ShoppingList[];
  item: ShoppingList;
  items: IListITem[];
  addItem$: Subscription;
  editItem$: Subscription;
  selectItem$: Subscription;
  removeItem$: Subscription;

  constructor(
    private shoppingListDetailService: ShoppingListDetailService,
    private readonly pageActionServiceService: PageActionServiceService
  ) {}


  ngOnDestroy(): void {
    this.clearSubscriptions();
  }

  ngOnInit() {
    const list: ShoppingListItem[] = [
      new ShoppingListItem('Apple', 3, 1),
      new ShoppingListItem('Greapes', 2, 1),
      new ShoppingListItem('Peachs', 1, 1),
      new ShoppingListItem('Meat', 1, 10),
      new ShoppingListItem('Bananas', 12, 1)
    ];
    this.list = [
      new ShoppingList('Fruits', list )
    ];
    this.items = this.bluidItems();
  }

  /** CLASS METHODS */
  addItem(newItem: ItemType): void {
    console.log({newItem});
    if (newItem === 'shopping-list') {
      alert('ADD NEW SHOPPING LIST');
    }
  }
  editItem(item: ShoppingList): void {
    throw new Error("Method not implemented.");
  }
  selectItem(item: ShoppingList): void {
    console.log({item});
    this.item = item;
  }
  removeItem(item: ShoppingList): void {
    throw new Error("Method not implemented.");
  }
  selectedItem(item: IListITem): void {
    if (!item.uuid) {
      return;
    }

    this.shoppingListDetailService.selectShoppingList( this.list.find( l => l.uuid === item.uuid ) );
  }
  bluidItems(): IListITem[] {
    return this.list.map((list) => {
      const { listName, uuid } = list;
      const desc = `${list.totalItens} item(s) on the list and it's total price is ${list.totalPrice}€`;
      const icon: Icon = { type: 'ICON' , value: 'fas fa-shopping-basket' };
      const obj = new ListItem(listName, desc, icon, uuid);
      return obj;
    });
  }

  clearSubscriptions(): void {
    try {
      this.selectItem$.unsubscribe();
      this.addItem$.unsubscribe();
      this.editItem$.unsubscribe();
      this.editItem$.unsubscribe();
      this.removeItem$.unsubscribe();
    } catch (error) {
      console.log('clearSubscriptions @ some of this are not implemented');
    }
  }
  createSubscriptions(): void {
    if ( !this.selectItem$) {
      this.selectItem$ = this.shoppingListDetailService.shoppingListIsSelected$.subscribe(this.selectItem);
    }
    if ( !this.addItem$ ) {
      this.addItem$ = this.pageActionServiceService.pageAddItem$.subscribe(() => console.log('aqui'));
    }
  }

}
