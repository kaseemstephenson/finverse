import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Delor } from './delor/delor.model';

@Injectable({
  providedIn: 'root'
})
export class DelorService {

  constructor(private httpClient:HttpClient) { }
  getResults(ticker:string,startDate:string,endDate:string,investmentAmount:string): Observable<any> {
    const params = ticker + "/"+startDate+"/"+endDate+"/"+investmentAmount
    const url = "https://mysterious-dawn-78553.herokuapp.com/https://delorean-investing.herokuapp.com/" + params

    return this.httpClient.get(url);

  }
  getNews(){
    return this.httpClient.get("https://stocknewsapi.com/api/v1/category?section=general&items=12&token=u5dsbsshi5vjxwphlv8bmtx7inniaunlkhb9fgmb")
  }
  getEZTrader(ticker:string){
    return this.httpClient.get("https://ez-trader-analysis.herokuapp.com/"+ticker)
  }
}
