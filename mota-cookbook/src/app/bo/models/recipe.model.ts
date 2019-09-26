import RecipeIngredient from './recipe-ingredient.model';

export interface RecipeStep {
  order: number;
  description: string;
  ingredient: RecipeIngredient;
}

export interface IRecipe {
  ingredients: RecipeIngredient[];
  name: string;
  description: string;
  recipeSteps: RecipeStep[];
}

export class Recipe implements IRecipe {
  ingredients: RecipeIngredient[];
  name: string;
  description: string;
  recipeSteps: RecipeStep[];


}
