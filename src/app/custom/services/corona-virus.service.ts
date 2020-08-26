import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoronaVirus } from '../../custom/models/corona-virus.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaVirusService {

  private covid19ApiUrl = "https://api.covid19api.com/summary";
  constructor(private httpClient: HttpClient) { }

  fetchCovid19Data():Observable<CoronaVirus>{
    return this.httpClient.get<CoronaVirus>(this.covid19ApiUrl);
  };

}
