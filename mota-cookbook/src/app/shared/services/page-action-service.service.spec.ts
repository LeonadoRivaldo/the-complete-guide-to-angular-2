import { TestBed } from '@angular/core/testing';

import { PageActionServiceService } from './page-action-service.service';

describe('PageActionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageActionServiceService = TestBed.get(PageActionServiceService);
    expect(service).toBeTruthy();
  });
});
