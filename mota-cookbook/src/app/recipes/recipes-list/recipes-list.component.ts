import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/bo/models/recipe.model';
import ListItem, { IListITem } from 'src/app/shared/components/list-item/list-item.compenent.model';
import { RecipeDetailService } from '../recipe-detail/recipe-detail.service';
import { Icon } from 'src/app/bo/models/icon.model';
import { RECIPES } from './recipes.mock';
import { PageActionServiceService } from 'src/app/shared/services/page-action-service.service';

@Component({
  selector: 'mcb-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = RECIPES;
  selected: Recipe = null;

  constructor(private recipeDetailService: RecipeDetailService, private pageActionServiceService: PageActionServiceService) {
    recipeDetailService.recipeIsSelected$.subscribe(
      (recipe) => {
        this.selected = recipe;
      }
    );

    pageActionServiceService.pageRecipeAdded$.subscribe((newRecipe: boolean) => {
      if ( newRecipe )  {
        alert('ADD NEW RECIPE!');
      }
    });
  }

  ngOnInit() {
    console.log(RECIPES);
  }

  isSelected( uuid: string ): boolean {
    return this.selected ? this.selected.uuid === uuid : false ;
  }

  get listItems(): IListITem[] {
    return this.recipes.map((recipe) => {
      const { name, description, uuid, imagePath } = recipe;
      const icon: Icon = { type: 'IMG', value: imagePath };
      const obj = new ListItem(name, description, icon, uuid);
      return obj;
    });
  }

  details(listItem: IListITem): void {
    if (!listItem.uuid) {
      return;
    }
    this.recipeDetailService.selectRecipe(this.recipes.find((r) => r.uuid === listItem.uuid ));
  }

}
