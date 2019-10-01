import { Component, OnInit } from '@angular/core';
import { RecipeDetailService } from './recipe-detail.service';
import { Recipe } from 'src/app/bo/models/recipe.model';
import { DETAIL_STATE } from './recipe-detail.model';



@Component({
  selector: 'mcb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  private detailState: DETAIL_STATE;

  get view() {
    return this.detailState === DETAIL_STATE.view;
  }

  get edit() {
    return this.detailState === DETAIL_STATE.edit;
  }

  set state(  state: DETAIL_STATE ) {
    this.detailState =  state;
  }
  get state(): DETAIL_STATE {
    return this.detailState;
  }

  constructor(private recipeDetailService: RecipeDetailService) {
    recipeDetailService.recipeIsSelected$.subscribe(
      (recipe) => {
        this.recipe = recipe;
      }
    );

    this.state = DETAIL_STATE.view;
  }




  ngOnInit() {
  }

}
