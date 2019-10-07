import { Component, OnInit, Input } from '@angular/core';
import { Recipe, RecipeStep } from 'src/app/bo/models/recipe.model';
import ListItem from 'src/app/shared/components/list-item/list-item.compenent.model';
import RecipeIngredient from 'src/app/bo/models/recipe-ingredient.model';

@Component({
  selector: 'mcb-recipe-detail-view',
  templateUrl: './recipe-detail-view.component.html',
  styleUrls: ['./recipe-detail-view.component.scss']
})
export class RecipeDetailViewComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  get maxHeigth() {
    return this.recipe.haveAllIngredients ? '200px' : '400px';
  }

  parseStepsToListItemList() {
    return this.recipe.recipeSteps.map( (step: RecipeStep) => {
      const { description, uuid, done } = step;
      const listitem: ListItem = new ListItem(description);
      listitem.uuid = uuid;
      listitem.selected = done;
      return listitem;
    });
  }

  stepDone(item: ListItem) {
    this.recipe.recipeSteps.forEach((step) => {
      if ( step.uuid === item.uuid ) {
        step.done = !step.done;
      }
    });
  }


  parseIngredientsToListItemList() {
    return this.recipe.ingredients.map( (ingredient: RecipeIngredient) => {
      const { name, uuid, obtained } = ingredient;
      const listitem: ListItem = new ListItem(name);
      listitem.uuid = uuid;
      listitem.selected = obtained;
      return listitem;
    });
  }

  gotIngredient(item: ListItem) {
    this.recipe.ingredients.forEach((ingredient) => {
      if ( ingredient.uuid === item.uuid ) {
        ingredient.obtained = !ingredient.obtained;
      }
    });
  }

}
