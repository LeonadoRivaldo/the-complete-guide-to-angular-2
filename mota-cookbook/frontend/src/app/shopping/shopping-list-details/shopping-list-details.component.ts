import { Component, OnInit } from '@angular/core';
import { ShoppingListDetailService } from './shopping-list-detail.service';
import ShoppingListItem from 'src/app/bo/models/shopping-list-item.model';
import { ShoppingList } from 'src/app/bo/models/shopping-list.model';
import ListItem from 'src/app/shared/components/list-item/list-item.compenent.model';

@Component({
  selector: 'mcb-shopping-list-details',
  templateUrl: './shopping-list-details.component.html',
  styleUrls: ['./shopping-list-details.component.scss']
})
export class ShoppingListDetailsComponent implements OnInit {

  list: ShoppingList;

  constructor(private shoppingListDetailService: ShoppingListDetailService) {
    shoppingListDetailService.shoppingListIsSelected$.subscribe(
      (list) => {
        this.list = list;
      }
    );
  }

  ngOnInit() {
  }

  parseToListItemList() {
    return this.list.items.map(item => {
      const { name, uuid, bought } = item;
      const subtitle = `${item.quantity} item(s) in stock it's unit price is ${item.price}€ and the stock price is ${item.totalPrice()}€ `;

      const listitem: ListItem = new ListItem(name, subtitle, {type: 'IMG', value: ''});
      listitem.uuid = uuid;
      listitem.selected = bought;

      return listitem;
    });
  }

  boughtItem(item: ListItem) {
    this.list.items.forEach((listItem) => {
      if ( listItem.uuid === item.uuid ) {
        listItem.bought = !listItem.bought;
      }
    });
  }


}
