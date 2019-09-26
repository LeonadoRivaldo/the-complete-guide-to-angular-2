import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListDetailsViewComponent } from './shopping-list-details-view.component';

describe('ShoppingListDetailsViewComponent', () => {
  let component: ShoppingListDetailsViewComponent;
  let fixture: ComponentFixture<ShoppingListDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
