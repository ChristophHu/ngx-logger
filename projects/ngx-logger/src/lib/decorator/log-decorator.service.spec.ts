import { TestBed } from '@angular/core/testing';

import { LogDecoratorService } from './log-decorator.service';

describe('LogDecoratorService', () => {
  let service: LogDecoratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogDecoratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
