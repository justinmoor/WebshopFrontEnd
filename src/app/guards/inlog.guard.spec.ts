import { TestBed, async, inject } from '@angular/core/testing';

import { InlogGuard } from './inlog.guard';

describe('InlogGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InlogGuard]
    });
  });

  it('should ...', inject([InlogGuard], (guard: InlogGuard) => {
    expect(guard).toBeTruthy();
  }));
});
