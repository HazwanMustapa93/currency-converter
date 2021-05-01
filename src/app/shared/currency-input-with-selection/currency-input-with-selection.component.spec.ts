import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { CurrencyInputWithSelectionComponent } from './currency-input-with-selection.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { OnlyNumberDirective } from './../../infras/only-number.directive';
import { SelectOnFocusDirective } from './../../infras/select-on-focus.directive';

describe('CurrencyInputWithSelectionComponent', () => {
  let component: CurrencyInputWithSelectionComponent;
  let fixture: ComponentFixture<CurrencyInputWithSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyInputWithSelectionComponent, OnlyNumberDirective, SelectOnFocusDirective ],
      imports: [FontAwesomeModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyInputWithSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
