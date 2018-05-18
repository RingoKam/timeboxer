import { TestBed, inject } from '@angular/core/testing';

import { TimeboxListService } from './timebox-list.service';

describe('TimeboxListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeboxListService]
    });
  });

  it('should be created', inject([TimeboxListService], (service: TimeboxListService) => {
    expect(service).toBeTruthy();
  }));
});
