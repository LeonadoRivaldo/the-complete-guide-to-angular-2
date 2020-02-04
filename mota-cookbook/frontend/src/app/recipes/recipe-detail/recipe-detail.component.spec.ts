import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailComponent } from './recipe-detail.component';
import { RecipesComponent } from '../recipes.component';
import { RecipesListComponent } from '../recipes-list/recipes-list.component';
import { RecipeDetailFormComponent } from './recipe-detail-form/recipe-detail-form.component';
import { RecipeDetailViewComponent } from './recipe-detail-view/recipe-detail-view.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

describe('RecipeDetailComponent', () => {
  let component: RecipeDetailComponent;
  let fixture: ComponentFixture<RecipeDetailComponent>;

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
    fixture = TestBed.createComponent(RecipeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
