import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesComponent } from './recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeDetailFormComponent } from './recipe-detail/recipe-detail-form/recipe-detail-form.component';
import { RecipeDetailViewComponent } from './recipe-detail/recipe-detail-view/recipe-detail-view.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

describe('RecipesComponentComponent', () => {
  let component: RecipesComponent;
  let fixture: ComponentFixture<RecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RecipesComponent,
        RecipesListComponent,
        RecipeDetailComponent,
        RecipeDetailFormComponent,
        RecipeDetailViewComponent
      ],
      imports: [
        CommonModule,
        SharedModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
