import { Component, OnInit } from '@angular/core';
import { CoronaVirusService } from '../../services/corona-virus.service';
import { CoronaVirus, Country } from '../../models/corona-virus.model';


@Component({
  selector: 'app-corona-virus',
  templateUrl: './corona-virus.component.html',
  styleUrls: ['./corona-virus.component.css']
})
export class CoronaVirusComponent implements OnInit {

  constructor(private coronaVirusData: CoronaVirusService) { }
  coronaCountriesData: Country[];
  coronaGlobalData: Object;
  currentDate: Date;
  apiError: any;
  isResponseReceived = false;
  waitingForResponse = true;
  showButton:boolean = false;
  ngOnInit() {
    this.fetchCoronaVirusData();
  }

  fetchCoronaVirusData() {
    this.waitingForResponse = true;

    this.coronaVirusData.fetchCovid19Data().subscribe((response: CoronaVirus) => {
      this.waitingForResponse = false;
      this.isResponseReceived = true;
      if (response.Countries) this.coronaCountriesData = response.Countries;
      else this.coronaCountriesData = [];

      if (response.Global) this.coronaGlobalData = response.Global;
      else this.coronaGlobalData = {};

      if (response.Date) this.currentDate = new Date(response.Date);

    }, error => {
      this.waitingForResponse = true;
      this.showButton=true;
      if (error.message) {
        this.waitingForResponse = false;
        this.apiError = error.message;
        throw error.message;
      }
    });
  };

}
