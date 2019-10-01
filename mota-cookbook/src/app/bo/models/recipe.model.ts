import RecipeIngredient from './recipe-ingredient.model';
import * as uuid from 'uuid';
import { from } from 'rxjs';
export interface RecipeStep {
  uuid: string;
  done: boolean;
  order: number;
  description: string;
  ingredient: RecipeIngredient;
}

export interface IRecipe {
  uuid: string;
  ingredients: RecipeIngredient[];
  name: string;
  description: string;
  recipeSteps: RecipeStep[];
}

export class Recipe implements IRecipe {
  name: string;
  description: string;
  imagePath = '../../../assets/imgs/children-recipe-pic1-smaller.gif';
  ingredients: RecipeIngredient[] = [];
  recipeSteps: RecipeStep[] = [];
  uuid: string;

  constructor( name: string, ingredients: RecipeIngredient[],  recipeSteps: RecipeStep[], _uuid?: string ) {
    this.name = name;
    this.ingredients = ingredients;
    this.recipeSteps = recipeSteps;

    this.uuid = _uuid || uuid.v4();

  }
}


// TODO: have to create a IRecipelistItem
