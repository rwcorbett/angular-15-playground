import { TestBed } from '@angular/core/testing';

import { DummyFetchService } from './dummy-fetch.service';

describe('DummyFetchService', () => {
  let service: DummyFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
