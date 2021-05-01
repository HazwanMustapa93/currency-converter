import { Component, OnInit } from '@angular/core';
import { Currency, CurrencyFav } from './../../models/currency';
import { getSelectedList, massageSelectedList } from 'src/app/infras/app-helper';

import { AppConstants } from 'src/app/infras/constants';
import { AuthService } from './../../services/auth.service';
import { CurrencyService } from './../../services/currency.service';
import { LayoutService } from './../../services/layout.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  inputValue = 0;
  currencyList: Currency[] = [];
  selectedList: Currency[] = [];
  baseCurrency = 'USD';
  currencyFrom = 'USD';

  constructor(private currencyService: CurrencyService, private layoutService: LayoutService, private authService: AuthService) {
    this.layoutService.setLayoutMode('NORMAL');
  }

  ngOnInit() {
    const loggedIn = this.authService.getLoginStatus();
    const selected = getSelectedList(AppConstants.favLsKey);
    this.selectedList = (selected && selected.length > 0 && loggedIn) ? selected : AppConstants.defaultSelection;
    this.getCurrencies();
  }

  getCurrencies() {
    this.currencyService.getAllCurrencies().subscribe({
      next: (resp: Currency[]) => {
        this.currencyList = resp;
        this.currencyService.getCurrencyRates(this.baseCurrency).subscribe(respRates => {
          const rates = respRates.rates;
          this.currencyList.map(currency => {
            currency.rateToBase = rates[currency.currencyAbbr];
            return currency;
          });
        });

        const temp = massageSelectedList(this.currencyList, this.selectedList);
        this.selectedList = temp.selectedList;
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
      }
    });
  }

  inputChange(value: number) {
    this.inputValue = value;
    this.calculateCurrency(value);
  }

  calculateCurrency(value: number) {
    const currencyFromRate = this.currencyList.find(a => a.currencyAbbr === this.currencyFrom).rateToBase;
    this.selectedList.map(a => {
      a.convertedValue = (a.rateToBase / currencyFromRate) * value;

      return a;
    });
  }

  currencyOnSelected(selectedAbbr: string) {
    this.currencyFrom = selectedAbbr;
    this.calculateCurrency(this.inputValue);
  }
}
