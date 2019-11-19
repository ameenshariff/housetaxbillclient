import { TestBed, async, inject } from '@angular/core/testing';

import { PreventLoginGuard } from './prevent-login.guard';

describe('PreventLoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreventLoginGuard]
    });
  });

  it('should ...', inject([PreventLoginGuard], (guard: PreventLoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
