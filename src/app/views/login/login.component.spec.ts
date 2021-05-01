/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AppRoutingModule } from './../../app-routing.module';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { PasswordInputComponent } from './../../shared/password-input/password-input.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent, PasswordInputComponent ],
      imports: [FormsModule, ReactiveFormsModule, AppRoutingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('username input should be ok', async(() => {
    let fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let input = fixture.debugElement.query(By.css('input[name="username"]'));
      let el = input.nativeElement;

      // test for normal input
      el.value = 'user';
      el.dispatchEvent(new Event('input'));

      expect(fixture.componentInstance.userForm.controls.username.value).toBe('user');

      // test for required inputs
      el.value = '';
      el.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      const usernameRequiredErrorEl = fixture.debugElement.query(By.css('.error-username-required'));
      expect(usernameRequiredErrorEl).toBeTruthy();
      
      // test for special character inputs
      el.value = 'this^*&^$@';
      el.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      const specialCharacterErrorEl = fixture.debugElement.query(By.css('.error-specialcharacter'));
      expect(specialCharacterErrorEl).toBeTruthy();

      // test for alphanumeric inputs
      el.value = '原味杏仁雪';
      el.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      const alphanumericErrorEl = fixture.debugElement.query(By.css('.error-alphanumeric'));
      expect(specialCharacterErrorEl).toBeTruthy();

      // test for whitespace inputs
      el.value = 'this is white space input';
      el.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      const whitespaceErrorEl = fixture.debugElement.query(By.css('.error-whitespace'));
      expect(whitespaceErrorEl).toBeTruthy();
      
    });
  }));
  
  it('password input should be ok', async(() => {
    let fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      // test for required inputs
      fixture.componentInstance.userForm.controls.password.setValue('');

      fixture.detectChanges();
      const passwordRequiredErrorEl = fixture.debugElement.query(By.css('.error-password-required'));
      expect(passwordRequiredErrorEl).toBeTruthy();        
    });
  }));
});
