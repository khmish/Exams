import { TestBed } from '@angular/core/testing';

import { NtableService } from './ntable.service';

describe('NtableService', () => {
  let service: NtableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NtableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
