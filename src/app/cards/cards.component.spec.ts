import { ComponentFixture, TestBed } from '@angular/core/testing';
import {SapcexService} from '../service/sapcex.service';
import { CardsComponent } from './cards.component';
import { from } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SimpleChange } from '@angular/core';
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
  it('call request data function with changes in input property', () => {
    component.query = '&launch_year=2014';
    let spy = spyOn(component,'requestData');
    component.ngOnChanges({
      query: new SimpleChange(null, component.query, true)
    });
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
  it('should call request data on component initialization', () => {
    let spy = spyOn(component,'requestData');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
});
