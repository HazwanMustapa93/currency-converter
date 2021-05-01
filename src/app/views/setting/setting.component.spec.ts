import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AppConstants } from 'src/app/infras/constants';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { SettingComponent } from './setting.component';
import { ToastrModule } from 'ngx-toastr';
import { setLocalStorage } from 'src/app/infras/browser-storage-functions';

describe('SettingComponent', () => {
  let component: SettingComponent;
  let fixture: ComponentFixture<SettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingComponent ],
      imports: [
        HttpClientModule, 
        ToastrModule.forRoot(), 
        FontAwesomeModule,
        BrowserAnimationsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingComponent);
    component = fixture.componentInstance;
    setLocalStorage(AppConstants.favLsKey, '[]');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    
  it('no selection should display selection is empty warning', () => {
    fixture.componentInstance.selectedList = [];
    fixture.detectChanges();
    let warningContainerElement = fixture.debugElement.query(By.css('.warning-container'));

    expect(warningContainerElement).toBeTruthy();
  });

  it('selection should not more than 10', (done) => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const NO_OF_CURRENCIES_TO_SELECT = 12;

      const parent = fixture.debugElement.query(By.css('.raw-list'));
      const elements = parent.queryAll(By.css('div'));
  
      for (let i = 1; i <= NO_OF_CURRENCIES_TO_SELECT; i++) {
        const currencyElement = elements[i];
        currencyElement.nativeElement.dispatchEvent(new Event('click'));
        fixture.detectChanges();      
      }
      expect(fixture.componentInstance.selectedList.length).toBeLessThan(11);
      done();
    });
  });
});
