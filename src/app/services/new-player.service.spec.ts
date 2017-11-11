import { TestBed, inject } from '@angular/core/testing';

import { NewPlayerService } from './new-player.service';

describe('NewPlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewPlayerService]
    });
  });

  it('should be created', inject([NewPlayerService], (service: NewPlayerService) => {
    expect(service).toBeTruthy();
  }));
});
