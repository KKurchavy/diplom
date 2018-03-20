import { TestBed, inject } from '@angular/core/testing';

import { AppAdminService } from './app-admin.service';

describe('AppAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppAdminService]
    });
  });

  it('should be created', inject([AppAdminService], (service: AppAdminService) => {
    expect(service).toBeTruthy();
  }));
});
