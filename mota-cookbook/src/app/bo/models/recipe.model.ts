import RecipeIngredient from './recipe-ingredient.model';
import * as uuid from 'uuid';
export interface IRecipeStep {
  uuid?: string;
  done?: boolean;
  order: number;
  description: string;



}

export class RecipeStep implements IRecipeStep {
  uuid?: string;
  done?: boolean;
  order: number;
  description: string;

  // tslint:disable-next-line: variable-name
  constructor( description: string, order: number, _uuid: string = uuid.v4() ) {
    this.description = description;
    this.order = order;
    this.uuid = _uuid;
  }

}

export interface IRecipe {
  uuid: string;
  ingredients: RecipeIngredient[];
  name: string;
  description: string;
  recipeSteps: RecipeStep[];
  totalDoneSteps: number;
  totalSteps: number;
  allStepsDone: boolean;

  totalIngredientsObtained: number;
  totalIngredients: number;
  haveAllIngredients: boolean;
}

export class Recipe implements IRecipe {
  name: string;
  description: string;
  imagePath = '../../../assets/imgs/children-recipe-pic1-smaller.gif';
  ingredients: RecipeIngredient[] = [];
  recipeSteps: RecipeStep[] = [];
  uuid: string;

  // tslint:disable-next-line: variable-name
  constructor( name: string, ingredients: RecipeIngredient[],  recipeSteps: RecipeStep[], _uuid?: string ) {
    this.name = name;
    this.ingredients = ingredients;
    this.recipeSteps = recipeSteps;

    this.uuid = _uuid || uuid.v4();

  }

  get totalDoneSteps(): number {
    return this.recipeSteps.filter(s => s.done ).length;
  }

  get totalSteps(): number {
    return this.recipeSteps.length;
  }

  get allStepsDone(): boolean {
    return this.totalDoneSteps === this.totalSteps;
  }

  get totalIngredients(): number {
    return this.ingredients.length;
  }

  get totalIngredientsObtained(): number {
    return this.ingredients.filter(i => i.obtained).length;
  }

  get haveAllIngredients(): boolean {
    return this.totalIngredients === this.totalIngredientsObtained;
  }

}


// TODO: have to create a IRecipelistItem
