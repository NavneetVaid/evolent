import { ComponentFixture, TestBed } from '@angular/core/testing';
import {SapcexService} from '../service/sapcex.service';
import { CardsComponent } from './cards.component';
import { from } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule 
       ],
      declarations: [ CardsComponent ],
      providers: [SapcexService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
