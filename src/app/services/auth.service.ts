import { getCookie, setCookie } from '../infras/browser-storage-functions';

import { AppConstants } from './../infras/constants';
import { ERROR_MESSAGES } from './../infras/error-message';
import { Injectable } from '@angular/core';
import { ResponseResult } from './../models/response-result';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly TEST_USER = 'user';
  readonly TEST_PASSWORD = 'user123';

  constructor() { }

  login(username: string, password: string) {
    const respResult: ResponseResult = {
      success: false
    };

    if (username === this.TEST_USER && password === this.TEST_PASSWORD) {
      respResult.success = true;
      setCookie(AppConstants.loggedInCookieName, 'true', 1, null);
      return respResult;
    }

    respResult.err = ERROR_MESSAGES.INVALID_CREDENTIAL;
    return respResult;
  }

  logout() {
    setCookie(AppConstants.loggedInCookieName, 'false', -1, null);
  }

  getLoginStatus() {
    return getCookie(AppConstants.loggedInCookieName) == 'true';
  }
}
