import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/bo/models/recipe.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeDetailService {

  // Observable string sources
  private selectedRecipe = new Subject<Recipe>();

  // Observable string streams
  recipeIsSelected$ = this.selectedRecipe.asObservable();

  selectRecipe( recipe: Recipe ) {
    this.selectedRecipe.next( recipe );
  }

  constructor() {
  }
}
