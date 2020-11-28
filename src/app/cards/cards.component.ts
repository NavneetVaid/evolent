import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {SapcexService} from '../service/sapcex.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnChanges {
  cardsData: any = [];
  dataLoaded: boolean = false;
  serviceError: boolean = false;
  
  @Input() query: string;
  constructor(private spaceXService: SapcexService) { }

  ngOnChanges(changes : SimpleChanges){
    this.requestData(changes.query.currentValue);
  }
  
  ngOnInit(): void {
    this.requestData();
  }

  requestData(queryParam?: string){
    this.dataLoaded = false;
    this.serviceError = false;
    this.spaceXService.getCardsData(queryParam).subscribe(cardData => {
      this.cardsData = cardData;
    }, error => {
      this.serviceError = true;
    },()=>{  
      this.dataLoaded = true;
      this.serviceError = false;
    });
  }
}
  


