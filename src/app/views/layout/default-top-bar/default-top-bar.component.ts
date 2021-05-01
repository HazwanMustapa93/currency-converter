import { Component, Input, OnInit } from '@angular/core';
import { faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-top-bar',
  templateUrl: './default-top-bar.component.html',
  styleUrls: ['./default-top-bar.component.scss']
})
export class DefaultTopBarComponent implements OnInit {
  @Input() showSetting = true;
  @Input() showLogout = true;

  faCog = faCog;
  faSignOut = faSignOutAlt;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signOutOnClick() {
    console.log('signout on click');
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
