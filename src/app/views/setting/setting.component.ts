import { Component, OnInit } from '@angular/core';
import { Currency, CurrencyFav } from 'src/app/models/currency';
import { getLocalStorage, setLocalStorage } from 'src/app/infras/browser-storage-functions';
import { getSelectedList, massageSelectedList } from 'src/app/infras/app-helper';

import { AppConstants } from 'src/app/infras/constants';
import { CurrencyService } from './../../services/currency.service';
import { ERROR_MESSAGES } from './../../infras/error-message';
import { LayoutService } from './../../services/layout.service';
import { ToastrService } from 'ngx-toastr';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  readonly MAX_FAV_ITEMS = 10;

  faTimes = faTimes;

  alLCurrencyList: Currency[] = [];
  selectedList: Currency[] = [];
  unSelectedList: Currency[] = [];

  constructor(private currencyService: CurrencyService, private layoutService: LayoutService, private toast: ToastrService) { 
    this.layoutService.setLayoutMode('NORMAL');
    this.getAllCurrencies();
  }

  ngOnInit() {
  }

  getAllCurrencies() {
    this.currencyService.getAllCurrencies().subscribe({
      next: (resp => {
        this.alLCurrencyList = resp;

        // get from local storage
        const selected = getSelectedList(AppConstants.favLsKey);
        this.selectedList = selected ?? [];
        const temp = massageSelectedList(this.alLCurrencyList, this.selectedList);
        this.selectedList = temp.selectedList;
        this.unSelectedList = temp.unSelectedList;
      })
    });
  }

  /** Save selected currencies as string in local storage */
  saveSelectedList() {
    this.unSelectedList = this.alLCurrencyList.filter(a => !this.selectedList.find(b => b.currencyAbbr === a.currencyAbbr));

    const selected = JSON.stringify(this.selectedList.map(a => {
      return {
        currencyAbbr: a.currencyAbbr,
        sortNo: a.sortNo
      };
    }));
    setLocalStorage(AppConstants.favLsKey, selected);
  }

  addSelectedItem(currencyAbbrToAdd: string) {
    // check for validity
    if (this.selectedList.length > this.MAX_FAV_ITEMS - 1) {
      console.log('can\'t add. exceed limit' );
      this.toast.error(ERROR_MESSAGES.CURRENCIES_EXCEED_LIMIT);

      return;
    }

    const itemToAdd = this.alLCurrencyList.find(a => a.currencyAbbr === currencyAbbrToAdd);
    if (!itemToAdd) {
      return;
    }

    itemToAdd.sortNo = this.selectedList.length;
    this.selectedList.push(itemToAdd);
    this.saveSelectedList();
  }

  removeSelectedItem(currencyAbbrToRemove: string) {
    this.selectedList = this.selectedList.filter(a => a.currencyAbbr !== currencyAbbrToRemove);
    this.saveSelectedList();
  }

  currencyOnSelect(selectedAbbr: string) {
    this.addSelectedItem(selectedAbbr);
  }

  removeOnClick(currencyAbbrToRemove: string) {
    this.removeSelectedItem(currencyAbbrToRemove);
  }
}