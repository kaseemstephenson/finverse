import { TestBed } from '@angular/core/testing';

import { DelorService } from './delor.service';

describe('DelorService', () => {
  let service: DelorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
