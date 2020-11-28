import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators'
import {of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SapcexService {
  constructor(private http : HttpClient) { }
  getCardsData(queryParamString?: string){
    let baseUrl = "https://api.spaceXdata.com/v3/launches?limit=100";
    if(queryParamString){
      baseUrl += `${queryParamString}` 
    }
    return this.http.get(`${baseUrl}`).pipe(catchError(error => {
      return of([]);
    })
    );
  }
}
