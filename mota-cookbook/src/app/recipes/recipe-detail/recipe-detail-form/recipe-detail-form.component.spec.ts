import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailFormComponent } from './recipe-detail-form.component';

describe('RecipeDetailFormComponent', () => {
  let component: RecipeDetailFormComponent;
  let fixture: ComponentFixture<RecipeDetailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDetailFormComponent ]
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
