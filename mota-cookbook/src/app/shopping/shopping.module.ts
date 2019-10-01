import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './shopping-list/shopping-list-item/shopping-list-item.component';
import { ShoppingListDetailsComponent } from './shopping-list-details/shopping-list-details.component';
import { ShoppingListDetailsViewComponent } from './shopping-list-details/shopping-list-details-view/shopping-list-details-view.component';
import { ShoppingListDetailsFormComponent } from './shopping-list-details/shopping-list-details-form/shopping-list-details-form.component';

@NgModule({
  declarations: [
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    ShoppingListDetailsComponent,
    ShoppingListDetailsViewComponent,
    ShoppingListDetailsFormComponent,
  ],
  exports: [
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    ShoppingListDetailsComponent,
    ShoppingListDetailsViewComponent,
    ShoppingListDetailsFormComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ShoppingModule { }
