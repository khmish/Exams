import { TestBed } from '@angular/core/testing';

import { PrimeServiceService } from './prime-service.service';

describe('PrimeServiceService', () => {
  let service: PrimeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
