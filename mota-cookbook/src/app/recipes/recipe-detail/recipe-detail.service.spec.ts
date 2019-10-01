import { TestBed } from '@angular/core/testing';

import { RecipeDetailService } from './recipe-detail.service';
import { Recipe } from 'src/app/bo/models/recipe.model';

describe('RecipeDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeDetailService = TestBed.get(RecipeDetailService);
    expect(service).toBeTruthy();
  });

});

describe('RecipeDetailService selectRecipe', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should trigger recipeIsSelected$ subribe', () => {
    const service: RecipeDetailService = TestBed.get(RecipeDetailService);
    service.recipeIsSelected$.subscribe(recipe => expect(recipe).toBeTruthy());
    service.selectRecipe(new Recipe('testing service', [], []));
  });
});

