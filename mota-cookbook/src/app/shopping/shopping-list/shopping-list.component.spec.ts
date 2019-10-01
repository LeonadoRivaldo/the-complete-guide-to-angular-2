import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingComponent } from '../shopping.component';
import { ShoppingListItemComponent } from './shopping-list-item/shopping-list-item.component';
import { ShoppingListDetailsComponent } from '../shopping-list-details/shopping-list-details.component';
import { ShoppingListDetailsViewComponent } from '../shopping-list-details/shopping-list-details-view/shopping-list-details-view.component';
import { ShoppingListDetailsFormComponent } from '../shopping-list-details/shopping-list-details-form/shopping-list-details-form.component';
import { CommonModule } from '@angular/common';

describe('ShoppingListComponent', () => {
  let component: ShoppingListComponent;
  let fixture: ComponentFixture<ShoppingListComponent>;

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
    fixture = TestBed.createComponent(ShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
