import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from './views/converter/converter.component';
import { CurrencyInputComponent } from './components/currency-input/currency-input.component';
import { CurrencyInputWithSelectionComponent } from './components/currency-input-with-selection/currency-input-with-selection.component';
import { DefaultFooterComponent } from './layouts/default-footer/default-footer.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { DefaultTopBarComponent } from './layouts/default-top-bar/default-top-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './views/login/login.component';
import { OnlyNumberDirective } from './shared/directive/only-number.directive';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { SelectOnFocusDirective } from './shared/directive/select-on-focus.directive';
import { SettingComponent } from './views/setting/setting.component';
import { ToastrModule } from 'ngx-toastr';

const APP_CONTAINER = [
  AppComponent,
  DefaultTopBarComponent,
  DefaultLayoutComponent,
  DefaultFooterComponent,
  CurrencyInputComponent,
  CurrencyInputWithSelectionComponent,
  ConverterComponent,
  LoginComponent,
  SettingComponent,
  PasswordInputComponent,

  OnlyNumberDirective,
  SelectOnFocusDirective
]

@NgModule({
  declarations: [
    ...APP_CONTAINER
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports: [    
    ...APP_CONTAINER
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
