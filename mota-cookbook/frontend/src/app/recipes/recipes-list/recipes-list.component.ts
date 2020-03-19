import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe, IRecipe } from 'src/app/bo/models/recipe.model';
import ListItem, { IListITem } from 'src/app/shared/components/list-item/list-item.compenent.model';
import { RecipeDetailService } from '../recipe-detail/recipe-detail.service';
import { Icon } from 'src/app/bo/models/icon.model';
import { RECIPES } from './recipes.mock';
import { PageActionServiceService } from 'src/app/shared/services/page-action-service.service';
import { Subscription } from 'rxjs';
import { IListItemController, ItemType } from 'src/app/bo/models/list.model';

@Component({
  selector: 'mcb-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements IListItemController<Recipe>, OnInit, OnDestroy {
  list: Recipe[] = RECIPES;
  item: Recipe;
  items: IListITem[];
  addItem$: Subscription;
  editItem$: Subscription;
  selectItem$: Subscription;
  removeItem$: Subscription;

  constructor(
    private readonly recipeDetailService: RecipeDetailService,
    private readonly pageActionServiceService: PageActionServiceService
  ) {}


  /**
   *  ANGULAR
   */

  ngOnInit() {
    this.items = this.bluidItems();
    this.createSubscriptions();
  }

  ngOnDestroy(): void {
    this.clearSubscriptions();
  }

  /** CLASS METHODS */
  public readonly isSelected = (uuid: string) => this.item ? this.item.uuid === uuid : false;
  public selectedItem(item: IListITem): void {
    if (!item.uuid) {
      return;
    }
    this.recipeDetailService.selectRecipe(this.list.find((r) => r.uuid === item.uuid));
  }

  public createSubscriptions(): void {
    if (!this.addItem$) {
      this.addItem$ = this.pageActionServiceService.pageAddItem$.subscribe(this.addItem);
    }

    if ( !this.selectItem$ ) {
      this.selectItem$ = this.recipeDetailService.recipeIsSelected$.subscribe(this.selectItem);
    }

  }

  clearSubscriptions(): void {
    try {
      this.selectItem$.unsubscribe();
      this.addItem$.unsubscribe();
      this.editItem$.unsubscribe();
      this.editItem$.unsubscribe();
      this.removeItem$.unsubscribe();
    } catch (error) {
      console.log('clearSubscriptions @ some of this are not implemented');
    }
  }

  addItem(newItem: ItemType): void {
    if (newItem === 'recipes-list') {
      alert('ADD NEW RECIPE!');
    }
  }
  editItem(item: Recipe): void {
    throw new Error('editItem not implemented yet!');
  }
  selectItem(item: Recipe): void {
    console.log({item});
    this.item = item;
  }
  removeItem(item: Recipe): void {
    throw new Error('removeItem not implemented yet!');
  }

  public bluidItems(): IListITem[] {
    return this.list.map((recipe) => {
      const { name, description, uuid, imagePath } = recipe;
      const icon: Icon = { type: 'IMG', value: imagePath };
      const obj = new ListItem(name, description, icon, uuid);
      return obj;
    });
  }

}
