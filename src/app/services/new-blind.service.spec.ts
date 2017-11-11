import { TestBed, inject } from '@angular/core/testing';

import { NewBlindService } from './new-blind.service';

describe('NewBlindService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewBlindService]
    });
  });

  it('should be created', inject([NewBlindService], (service: NewBlindService) => {
    expect(service).toBeTruthy();
  }));
});
