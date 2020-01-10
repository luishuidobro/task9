import { Injectable } from '@angular/core';
import { User } from '../models/user-model';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizacionService {

  constructor(private router: Router,
    private httpClient: HttpClient) { }

  // login(user: User) {
  //   localStorage.setItem("user", JSON.stringify(user));
  // }

  login(user: User) {
    const loginRequest = {
      "login": user.email,
      "password": user.password
    };
    this.httpClient.post('http://localhost:3004/auth/login/', loginRequest)
    .subscribe(
      (token) => {
        // this.authorizationService.login(token);
        localStorage.setItem("user", JSON.stringify(token));
          this.httpClient.post('http://localhost:3004/auth/userinfo',token)
          .subscribe((user) =>{
            console.log("Authorized");
            if (this.isAuthenticated()) {
              this.router.navigate(['courses']);
            }
          },
          (err) => {console.log(err)});
      },
      (error) => {
        console.log(error);
      });
  }

  logOut() {
    localStorage.removeItem("user");
  }

  isAuthenticated(): boolean {
    return localStorage.getItem("user") !== null;
  }

  getUserInfo(): any {
    const userInfoObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(JSON.parse(localStorage.getItem("user")));
      }, 500);
    });
    return userInfoObservable;
  }
}
