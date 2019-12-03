import { Injectable } from '@angular/core';
import { User } from '../shared/models/user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthorizacionService {

  constructor() { }

  login(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  logOut() {
    localStorage.removeItem("user");
  }

  isAuthenticated(): boolean {
    return localStorage.getItem("user") !== null;
  }

  getUserInfo(): string {
    return JSON.parse(localStorage.getItem("user"));
  }
}
