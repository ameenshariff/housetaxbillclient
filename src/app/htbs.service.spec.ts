import { TestBed } from '@angular/core/testing';

import { HtbsService } from './htbs.service';

describe('HtbsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HtbsService = TestBed.get(HtbsService);
    expect(service).toBeTruthy();
  });
});
