import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuHeaderComponent } from './header/menu-header/menu-header.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeDetailFormComponent } from './recipes/recipe-detail/recipe-detail-form/recipe-detail-form.component';
import { RecipeDetailViewComponent } from './recipes/recipe-detail/recipe-detail-view/recipe-detail-view.component';
import { RecipesListItemComponent } from './recipes/recipes-list/recipes-list-item/recipes-list-item.component';
import { ShoppingListItemComponent } from './shopping/shopping-list/shopping-list-item/shopping-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuHeaderComponent,
    ShoppingComponent,
    RecipesComponent,
    ShoppingListComponent,
    RecipesListComponent,
    RecipeDetailComponent,
    RecipeDetailFormComponent,
    RecipeDetailViewComponent,
    RecipesListItemComponent,
    ShoppingListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
