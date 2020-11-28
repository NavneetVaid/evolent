import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FiltersComponent } from './filters.component';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule 
       ],
      declarations: [ FiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate string as per input', () => {
    component.selectedYear = '2014';
    component.selectedLaunch = 'true';
    component.selectedLanding = 'true'
    let result = component.generateQueryUrl();
    expect(result).toBe('&launch_year=2014&launch_success=true&land_success=true');
    component.selectedYear = null;
    component.selectedLaunch = null;
    component.selectedLanding = null;
    let secondResult = component.generateQueryUrl();
    expect(secondResult).toBe('');
  });

  it('should call on click of filter buttons', ()=>{
    let spy = spyOn(component, 'emitQueryString');
    component.onYearClick('2014', 0);
    component.onSuccessLandClick('true', 0);
    component.onSuccessLaunchClick('true', 0);
    expect(spy).toHaveBeenCalledTimes(3);
  });
});
