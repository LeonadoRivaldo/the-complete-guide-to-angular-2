import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes  = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'recipes-list',
    loadChildren: './recipes/recipes.module#RecipesModule',
  },
  {
    path: 'shopping-list',
    loadChildren: './shopping/shopping.module#ShoppingModule',
  },
  {
    path: 'ingredients',
    loadChildren: './ingredients/ingredients.module#IngredientsModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
