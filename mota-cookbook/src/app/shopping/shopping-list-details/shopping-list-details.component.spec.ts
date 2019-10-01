import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListDetailsComponent } from './shopping-list-details.component';
import { ShoppingListDetailsFormComponent } from './shopping-list-details-form/shopping-list-details-form.component';
import { ShoppingComponent } from '../shopping.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from '../shopping-list/shopping-list-item/shopping-list-item.component';
import { ShoppingListDetailsViewComponent } from './shopping-list-details-view/shopping-list-details-view.component';
import { CommonModule } from '@angular/common';

describe('ShoppingListDetailsComponent', () => {
  let component: ShoppingListDetailsComponent;
  let fixture: ComponentFixture<ShoppingListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShoppingComponent,
        ShoppingListComponent,
        ShoppingListItemComponent,
        ShoppingListDetailsComponent,
        ShoppingListDetailsViewComponent,
        ShoppingListDetailsFormComponent,
      ],
      imports: [
        CommonModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
