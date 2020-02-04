import { TestBed } from '@angular/core/testing';

import { ShoppingListDetailService } from './shopping-list-detail.service';

describe('ShoppingListDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingListDetailService = TestBed.get(ShoppingListDetailService);
    expect(service).toBeTruthy();
  });
});
