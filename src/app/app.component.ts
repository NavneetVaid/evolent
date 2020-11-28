import { Component, OnInit } from '@angular/core';
import {SapcexService} from '../app/service/sapcex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'spacex';
  url: string;
  constructor(private service: SapcexService){

  }
  getServiceParams(val){
    this.url = val;
  }
  ngOnInit(){
  
}
}
