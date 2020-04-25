import { TestBed } from '@angular/core/testing';

import { EuclideanServiceService } from './euclidean-service.service';

describe('EuclideanServiceService', () => {
  let service: EuclideanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EuclideanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
