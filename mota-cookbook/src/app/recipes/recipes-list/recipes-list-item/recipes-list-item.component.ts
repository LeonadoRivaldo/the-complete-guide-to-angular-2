import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/bo/models/recipe.model';

@Component({
  selector: 'mcb-recipes-list-item',
  templateUrl: './recipes-list-item.component.html',
  styleUrls: ['./recipes-list-item.component.scss']
})
export class RecipesListItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }


  get alt() {
    return  'Image for ' + this.recipe.name;
  }

}
