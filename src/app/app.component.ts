import { Component, OnInit } from '@angular/core';
import {SapcexService} from '../app/service/sapcex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'spacex';
  cardData: any =[];
  constructor(private service: SapcexService){

  }
  getServiceData(val){
    console.log('Emmitted Value in app component', val)
    this.cardData = val;
  }
  ngOnInit(){
  
}
}
