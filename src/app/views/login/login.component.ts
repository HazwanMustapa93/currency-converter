import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { alphanumericOnly, noSpecialCharacter, noWhitespace } from 'src/app/infras/input-validators';

import { AuthService } from './../../services/auth.service';
import { LayoutMode } from './../../infras/layout-mode';
import { LayoutService } from './../../services/layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  errorMessages: string[] = [];

  constructor(private layoutService: LayoutService, private formBuilder: FormBuilder, private authService: AuthService, private route: ActivatedRoute, private router: Router) { 
    this.layoutService.setLayoutMode('LOGIN')

    this.userForm = this.formBuilder.group(
      {
        username: ['', [Validators.required, noWhitespace, noSpecialCharacter, alphanumericOnly]],
        password: ['', Validators.required]
      }
    )
  }

  ngOnInit() {
  }

  loginOnClick() {
    // check for all validators
    this.errorMessages = [];
    this.userForm.controls.username.markAsDirty();
    this.userForm.controls.password.markAsDirty();
    if (!this.userForm.valid) {
      return;
    }
    
    
    const username = this.userForm.controls.username.value;
    const password = this.userForm.controls.password.value;
    const authResult = this.authService.login(username, password);
    if (authResult.err) {
      this.errorMessages.push(...[authResult.err]);
      return;
    }

    if (authResult.success) {
      this.router.navigate(['/setting']);
    }

  }

  get uForm() { return this.userForm.controls; }

}
