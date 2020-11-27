import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import {SapcexService} from '../service/sapcex.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnChanges {
  cardsData: any = [];
  @Input() serviceData: any =[];
  constructor(private spaceXService: SapcexService) { }

  ngOnChanges(changes : SimpleChanges){
    this.cardsData = changes.serviceData.currentValue;
  }
  ngOnInit(): void {
    this.spaceXService.getCardsData().subscribe(cardData => {
      this.cardsData = cardData;
    })
  }
  }
  


