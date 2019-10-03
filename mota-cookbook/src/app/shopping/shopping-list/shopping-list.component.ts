import { Component, OnInit } from '@angular/core';
import ListItem, { IListITem } from 'src/app/shared/components/list-item/list-item.compenent.model';
import ShoppingListItem from 'src/app/bo/models/shopping-list-item.model';
import { Icon } from 'src/app/bo/models/icon.model';
import { IShoppingList, ShoppingList } from 'src/app/bo/models/shopping-list.model';
import { ShoppingListDetailService } from '../shopping-list-details/shopping-list-detail.service';

@Component({
  selector: 'mcb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  selected: ShoppingList;
  lists: IShoppingList[];

  constructor(private shoppingListDetailService: ShoppingListDetailService) {
    shoppingListDetailService.shoppingListIsSelected$.subscribe(
      (list) => {
        this.selected = list;
      }
    );
  }

  ngOnInit() {
    const list: ShoppingListItem[] = [
      new ShoppingListItem('Apple', 3, 1),
      new ShoppingListItem('Greapes', 2, 1),
      new ShoppingListItem('Peachs', 1, 1),
      new ShoppingListItem('Bananas', 12, 1)
    ];
    this.lists = [
      new ShoppingList('Fruits', list )
    ];


  }

  isSelected( uuid: string ): boolean {
    return this.selected ? this.selected.uuid === uuid : false ;
  }

  get listItems(): IListITem[] {
    return this.lists.map((list) => {
      const { listName, uuid } = list;
      const desc = `${list.totalItens()} item(s) on the list and it's total price is ${list.totalPrice()}€`;
      const icon: Icon = { type: 'ICON' , value: '<i class="fas fa-shopping-basket"></i>' };
      const obj = new ListItem(listName, desc, icon, uuid);
      return obj;
    });
  }


  details(listItem: IListITem): void {
    if (!listItem.uuid) {
      return;
    }

    this.shoppingListDetailService.selectShoppingList( this.lists.find( l => l.uuid === listItem.uuid ) );
  }


}
