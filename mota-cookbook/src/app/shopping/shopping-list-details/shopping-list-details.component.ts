import { Component, OnInit } from '@angular/core';
import { ShoppingListDetailService } from './shopping-list-detail.service';
import ShoppingListItem from 'src/app/bo/models/shopping-list-item.model';
import { ShoppingList } from 'src/app/bo/models/shopping-list.model';

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

}
