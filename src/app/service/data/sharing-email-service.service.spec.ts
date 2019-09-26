import { TestBed } from '@angular/core/testing';

import { SharingEmailServiceService } from './sharing-email-service.service';

describe('SharingEmailServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharingEmailServiceService = TestBed.get(SharingEmailServiceService);
    expect(service).toBeTruthy();
  });
});
