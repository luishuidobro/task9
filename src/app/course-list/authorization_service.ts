import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizacionService {

  constructor() { }

  login() {
  }

  logOut(): string {
    return 'Should wipe your login data';
  }

  isAuthenticated(user) {
    return (user.login ? true : false);
  }

  getUserInfo() {
    return 'User info';
  }
}
