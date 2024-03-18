import { TestBed } from '@angular/core/testing';

import { Logging } from './logger.service';

describe('LoggerService', () => {
  let service: Logging;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Logging);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
