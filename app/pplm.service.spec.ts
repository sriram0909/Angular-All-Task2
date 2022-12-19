import { TestBed } from '@angular/core/testing';

import { PplmService } from './pplm.service';

describe('PplmService', () => {
  let service: PplmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PplmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
