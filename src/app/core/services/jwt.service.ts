import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  static getToken(): String {
    return window.localStorage['jwtToken'];
  }

  static saveToken(token: String) {
    window.localStorage['jwtToken'] = token;
  }

  static destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

}
