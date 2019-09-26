import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListDetailsFormComponent } from './shopping-list-details-form.component';

describe('ShoppingListDetailsFormComponent', () => {
  let component: ShoppingListDetailsFormComponent;
  let fixture: ComponentFixture<ShoppingListDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
