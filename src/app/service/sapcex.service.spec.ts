import { TestBed } from '@angular/core/testing';

import { SapcexService } from './sapcex.service';

describe('SapcexService', () => {
  let service: SapcexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SapcexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
