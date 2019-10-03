import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListDetailsComponent } from './shopping-list-details/shopping-list-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingListDetailsComponent,
  ],
  exports: [
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingListDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ShoppingModule { }
