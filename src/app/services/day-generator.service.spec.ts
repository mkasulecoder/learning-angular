import { TestBed } from '@angular/core/testing';

import { DayGeneratorService } from './day-generator.service';

describe('DayGeneratorService', () => {
  let service: DayGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
