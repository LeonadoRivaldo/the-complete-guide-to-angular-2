import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesListComponent } from './recipes-list.component';
import { RecipesComponent } from '../recipes.component';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';
import { RecipeDetailFormComponent } from '../recipe-detail/recipe-detail-form/recipe-detail-form.component';
import { RecipeDetailViewComponent } from '../recipe-detail/recipe-detail-view/recipe-detail-view.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

describe('RecipesListComponent', () => {
  let component: RecipesListComponent;
  let fixture: ComponentFixture<RecipesListComponent>;

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
    fixture = TestBed.createComponent(RecipesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
