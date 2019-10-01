import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/bo/models/recipe.model';
import ListItem, { IListITem } from 'src/app/shared/components/list-item/list-item.compenent.model';
import { RecipeDetailService } from '../recipe-detail/recipe-detail.service';

@Component({
  selector: 'mcb-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Blueberry Pie', [], []),
    new Recipe('Peach Pie', [], []),
    new Recipe('Meat loaf', [], []),
  ];
  selected: Recipe = null;

  constructor(private recipeDetailService: RecipeDetailService) {
    recipeDetailService.recipeIsSelected$.subscribe(
      (recipe) => {
        this.selected = recipe;
      }
    );
  }

  ngOnInit() {
  }

  isSelected( uuid: string ): boolean {
    return this.selected ? this.selected.uuid === uuid : false ;
  }

  get listItems(): IListITem[] {
    return this.recipes.map((r) => {
      const obj = new ListItem(r.name, r.description, { type: 'IMG', value: r.imagePath }, r.uuid);
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
