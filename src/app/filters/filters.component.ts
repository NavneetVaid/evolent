import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {SapcexService} from '../service/sapcex.service';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  yearsArray: string[] = ['2006','2007','2008','2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
  booleanValArray: string[] = ['True', 'False'];
  selectedYear: string = null;
  selectedLaunch: string = null;
  selectedLanding: string = null;
  @Output() serviceUrl = new EventEmitter();
  constructor(private spaceXService: SapcexService) { }

  ngOnInit(): void {
  }

  // Function called on click of year filters.
  onYearClick(year, i){
   this.removeActiveClasses('year');
   document.getElementById(`year-${i}`).classList.add('active');
   this.selectedYear = year;
   this.emitQueryString();
  }

  // Function called on click of successful launch filter
  onSuccessLaunchClick(val:string , i:number){
    this.removeActiveClasses('success-launch');
    document.getElementById(`success-launch-${i}`).classList.add('active');
    this.selectedLaunch = val.toLowerCase();
    this.emitQueryString();
  }

  // Function called on click of successful land filter
  onSuccessLandClick(val:string , i:number){
    this.removeActiveClasses('success-land');
    document.getElementById(`success-land-${i}`).classList.add('active');
    this.selectedLanding = val.toLowerCase();
    this.emitQueryString();
  }

  // Common function to remove active class from pre selected filters
  removeActiveClasses(elClass){
    const elArray: HTMLElement[] = Array.from(document.querySelectorAll(`.${elClass}`));
    elArray.forEach(el => {
      el.classList.remove('active');
    })
  }

  // Function to generate query params with all selected filters
  generateQueryUrl(){
    let queryString = '';
    if(this.selectedYear !=null){
      queryString+=`&launch_year=${this.selectedYear}`;
    }
    if(this.selectedLaunch != null){
      queryString+=`&launch_success=${this.selectedLaunch}`
    }
    if(this.selectedLanding !=null){
      queryString+=`&land_success=${this.selectedLanding}`;
    }

    return queryString;
  }
  
  // Emit generated query testing.
  emitQueryString(){
    this.serviceUrl.emit(this.generateQueryUrl());
  }
}
