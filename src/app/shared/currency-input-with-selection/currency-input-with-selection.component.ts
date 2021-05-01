import { AbstractValueAccessor, MakeProvider } from 'src/app/infras/abstract-value-accessor';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Currency } from './../../models/currency';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-currency-input-with-selection',
  templateUrl: './currency-input-with-selection.component.html',
  styleUrls: ['./currency-input-with-selection.component.scss'],
  providers: [MakeProvider(CurrencyInputWithSelectionComponent)]
})
export class CurrencyInputWithSelectionComponent extends AbstractValueAccessor implements OnInit {
  @Input() currency = 'MYR';
  @Input() currencyList: Currency[] = [];
  @Output('currencyOnSelect') _currencyOnSelect = new EventEmitter<string>();


  showingPopup = false;
  
  // icons
  faAngleDown = faAngleDown;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  togglePopupListing() {
    this.showingPopup = !this.showingPopup;
  }

  currencyOnSelect(abbr: string) {
    this.showingPopup = false;
    this.currency = abbr;
    this._currencyOnSelect.emit(abbr);
  }
}
