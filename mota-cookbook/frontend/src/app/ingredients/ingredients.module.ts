import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { IngredientsRoutingModule } from './ingredients.routing.module';



import { IngredientsComponent } from '../ingredients/ingredients.component';
import { IngredientComponent } from './ingredient/ingredient.component';



@NgModule({
  declarations: [
    IngredientsComponent,
    IngredientComponent,
  ],
  imports: [
    IngredientsRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class IngredientsModule { }
