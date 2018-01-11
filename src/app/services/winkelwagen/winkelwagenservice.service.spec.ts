import { TestBed, inject } from '@angular/core/testing';

import { WinkelwagenserviceService } from './winkelwagenservice.service';

describe('WinkelwagenserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WinkelwagenserviceService]
    });
  });

  it('should be created', inject([WinkelwagenserviceService], (service: WinkelwagenserviceService) => {
    expect(service).toBeTruthy();
  }));
});
