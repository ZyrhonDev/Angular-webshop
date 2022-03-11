import { TestBed } from '@angular/core/testing';

import { RequestCatalogService } from './request-catalog.service';

describe('RequestCatalogService', () => {
  let service: RequestCatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestCatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
