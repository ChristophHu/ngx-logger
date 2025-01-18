import { TestBed } from '@angular/core/testing';

import { NgxLoggerService } from './ngx-logger.service';

describe('NgxLoggerService', () => {
  let service: NgxLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
