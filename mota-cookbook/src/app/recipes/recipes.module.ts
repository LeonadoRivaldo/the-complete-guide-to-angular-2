import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeDetailFormComponent } from './recipe-detail/recipe-detail-form/recipe-detail-form.component';
import { RecipeDetailViewComponent } from './recipe-detail/recipe-detail-view/recipe-detail-view.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipeDetailComponent,
    RecipeDetailFormComponent,
    RecipeDetailViewComponent
  ],
  exports: [
    RecipesComponent,
    RecipesListComponent,
    RecipeDetailComponent,
    RecipeDetailFormComponent,
    RecipeDetailViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class RecipesModule { }