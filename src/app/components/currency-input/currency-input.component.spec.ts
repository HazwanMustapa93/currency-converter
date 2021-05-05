/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { CurrencyInputComponent } from './currency-input.component';
import { CurrencyInputWithSelectionComponent } from './../currency-input-with-selection/currency-input-with-selection.component';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('CurrencyInputComponent', () => {
  let component: CurrencyInputComponent;
  let fixture: ComponentFixture<CurrencyInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyInputComponent, CurrencyInputWithSelectionComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
