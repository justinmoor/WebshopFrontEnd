import { TestBed, async, inject } from '@angular/core/testing';

import { GuardAdminGuard } from './guard-admin.guard';

describe('GuardAdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardAdminGuard]
    });
  });

  it('should ...', inject([GuardAdminGuard], (guard: GuardAdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
