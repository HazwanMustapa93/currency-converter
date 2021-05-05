import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, shareReplay } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpClient: HttpClient) { }

  getAllCurrencies() {
    const apiUrl = `${environment.currencyAPI}/currencies?key=${environment.currencyAPIKey}`;

    return this.httpClient.get<any>(apiUrl).pipe(
      map(resp => {
        const currencies = resp?.currencies;
        const currencyKeys = Object.keys(currencies);
        // convert the api returned data structure to array of set currency abbr and description
        return currencyKeys.map(currency => {
          return {
            currencyAbbr: currency,
            currencyDesc: currencies[currency],

            // we set the default value
            // this default value later will be replaced after we retrieved the rates
            sortNo: 0,
            convertedValue: 0,
            rateToBase: 0
          };
        });
      },
      shareReplay({bufferSize: 1, refCount: true}),
    ));
  }

  getCurrencyRates(baseCurrency: string = 'USD') {
    const apiUrl = `${environment.currencyAPI}/rates?key=${environment.currencyAPIKey}&base=${baseCurrency}`;
    return this.httpClient.get<any>(apiUrl);
  }
}
