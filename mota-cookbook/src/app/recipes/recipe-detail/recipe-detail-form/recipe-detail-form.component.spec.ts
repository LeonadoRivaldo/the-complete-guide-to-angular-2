import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailFormComponent } from './recipe-detail-form.component';
import { RecipesComponent } from '../../recipes.component';
import { RecipesListComponent } from '../../recipes-list/recipes-list.component';
import { RecipeDetailComponent } from '../recipe-detail.component';
import { RecipeDetailViewComponent } from '../recipe-detail-view/recipe-detail-view.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

describe('RecipeDetailFormComponent', () => {
  let component: RecipeDetailFormComponent;
  let fixture: ComponentFixture<RecipeDetailFormComponent>;

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
    fixture = TestBed.createComponent(RecipeDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
