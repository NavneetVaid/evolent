import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SapcexService } from './sapcex.service';

describe('SapcexService', () => {
  let service: SapcexService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
       HttpClientTestingModule 
      ],
    });
    service = TestBed.inject(SapcexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
