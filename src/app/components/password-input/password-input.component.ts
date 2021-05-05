import { AbstractValueAccessor, MakeProvider } from 'src/app/shared/abstracts/abstract-value-accessor';
import { Component, Input, OnInit } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [MakeProvider(PasswordInputComponent)]
})
export class PasswordInputComponent extends AbstractValueAccessor implements OnInit {
  @Input() hasErrors = false;

  faEye = faEye;
  faEyeSlash = faEyeSlash;

  showPassword = false;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
