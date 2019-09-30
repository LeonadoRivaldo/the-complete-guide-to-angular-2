import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/bo/models/recipe.model';

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

  constructor() { }

  ngOnInit() {
  }

}
