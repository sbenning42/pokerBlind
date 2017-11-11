import { TestBed, inject } from '@angular/core/testing';

import { NewTurnService } from './new-turn.service';

describe('NewTurnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewTurnService]
    });
  });

  it('should be created', inject([NewTurnService], (service: NewTurnService) => {
    expect(service).toBeTruthy();
  }));
});
