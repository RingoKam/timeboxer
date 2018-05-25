import { TestBed, inject } from '@angular/core/testing';

import { PlayingService } from './playing.service';

describe('PlayingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayingService]
    });
  });

  it('should be created', inject([PlayingService], (service: PlayingService) => {
    expect(service).toBeTruthy();
  }));
});
