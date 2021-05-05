import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { getCookie, getLocalStorage } from '../helpers/browser-storage-functions';

import { AppConstants } from '../constants/constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
      const isLoggedIn = getCookie(AppConstants.loggedInCookieName);

      if (!isLoggedIn) {
        this.router.navigate(['/login']);
        return false;
      }

      return true;
    }
}
