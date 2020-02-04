import { Component, OnInit } from '@angular/core';
import { RecipeDetailService } from './recipe-detail.service';
import { Recipe } from 'src/app/bo/models/recipe.model';
import { VIEW_DETAIL_STATE } from '../../bo/models/view-detail-state.model';

// TODO: clean recipe selection buttom


@Component({
  selector: 'mcb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  menuOpen: boolean;
  recipe: Recipe;
  detailState: VIEW_DETAIL_STATE;

  get view() {
    return this.detailState === VIEW_DETAIL_STATE.view;
  }
  get edit() {
    return this.detailState === VIEW_DETAIL_STATE.edit;
  }

  set state(  state: VIEW_DETAIL_STATE ) {
    this.detailState =  state;
  }
  get state(): VIEW_DETAIL_STATE {
    return this.detailState;
  }

  constructor(private recipeDetailService: RecipeDetailService) {
    recipeDetailService.recipeIsSelected$.subscribe(
      (recipe) => {
        this.recipe = recipe;
      }
    );

    this.state = VIEW_DETAIL_STATE.view;
  }

  toogleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toShoppingList() {
    alert('Create shopping list!');
  }

  /**
   * RECIPE MANAGER
   */
  editRecipe() {
    this.state = VIEW_DETAIL_STATE.edit;
    // TODO: more actions
  }
  viewRecipe() {
    this.state = VIEW_DETAIL_STATE.view;
    // TODO: more actions
  }
  deleteRecipe() {
    alert('Implement delete!');
    // TODO: more actions
  }
  saveRecipe() {
    // TODO: more actions
    alert('Saving recipe!');
    setTimeout(() => {
      this.viewRecipe();
      alert('Saved!');
    }, 1000);
  }


  ngOnInit() {
  }

}
