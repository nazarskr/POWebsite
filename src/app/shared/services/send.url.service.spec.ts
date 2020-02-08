import { TestBed } from '@angular/core/testing';

import { SendUrlService } from './send.url.service';

describe('SendUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendUrlService = TestBed.get(SendUrlService);
    expect(service).toBeTruthy();
  });
});
