import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailViewComponent } from './recipe-detail-view.component';
import { RecipesComponent } from '../../recipes.component';
import { RecipesListComponent } from '../../recipes-list/recipes-list.component';
import { RecipeDetailComponent } from '../recipe-detail.component';
import { RecipeDetailFormComponent } from '../recipe-detail-form/recipe-detail-form.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

describe('RecipeDetailViewComponent', () => {
  let component: RecipeDetailViewComponent;
  let fixture: ComponentFixture<RecipeDetailViewComponent>;

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
    fixture = TestBed.createComponent(RecipeDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
