import { TestBed, async, inject } from '@angular/core/testing';

import { CurrencyService } from './currency.service';
import { HttpClientModule } from '@angular/common/http';

/* tslint:disable:no-unused-variable */


describe('Service: Currency', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyService],
      imports: [HttpClientModule]
    });
  });

  it('should ...', inject([CurrencyService], (service: CurrencyService) => {
    expect(service).toBeTruthy();
  }));
});
