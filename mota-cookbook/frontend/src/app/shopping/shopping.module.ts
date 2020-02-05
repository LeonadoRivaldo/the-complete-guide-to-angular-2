import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListDetailsComponent } from './shopping-list-details/shopping-list-details.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingRoutingModule } from './shopping.routing.module';

@NgModule({
  declarations: [
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingListDetailsComponent,
  ],
  imports: [
    ShoppingRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class ShoppingModule { }
