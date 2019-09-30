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
  name: string;
  description: string;
  imagePath = '../../../assets/imgs/children-recipe-pic1-smaller.gif';
  ingredients: RecipeIngredient[] = [];
  recipeSteps: RecipeStep[] = [];

  constructor( name: string, ingredients: RecipeIngredient[],  recipeSteps: RecipeStep[] ) {
    this.name = name;
    this.ingredients = ingredients;
    this.recipeSteps = recipeSteps;
  }
}
