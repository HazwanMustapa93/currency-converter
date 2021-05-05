import { AbstractValueAccessor, MakeProvider } from 'src/app/shared/abstracts/abstract-value-accessor';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.scss'],
  providers: [MakeProvider(CurrencyInputComponent)]
})
export class CurrencyInputComponent extends AbstractValueAccessor implements OnInit {
  @Input() currency = 'MYR';

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
