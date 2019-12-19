import { Component, OnInit } from '@angular/core';
import { AuthorizacionService } from "../../core/authorization_service"
import { User } from '../../shared/models/user-model';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email = "";
  public password = "";

  constructor(
    private authorizationService: AuthorizacionService, 
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit() {
  }

  Login() {
    const user = {
    // id: 0,
    // firstName: 'Luis',
    // lastName: 'Huidobro',
    email: this.email,
    password: this.password
    } as User;
    // this.authorizationService.login(user);
    // window.location.reload();
    const loginRequest = {
      "login": this.email,
      "password": this.password
    };
    this.httpClient.post('http://localhost:3004/auth/login/', loginRequest)
    .subscribe((token) => {
      this.authorizationService.login(token);
      this.httpClient.post('http://localhost:3004/auth/userinfo',token)
      .subscribe((user) =>{console.log("Authorized")},
      (err) => {console.log(err)});
    },
    (error: HttpErrorResponse) => {
      console.log(error);
      this.email = "";
      this.password = "";
      this.router.navigate(['login']);
    });
    if (this.authorizationService.isAuthenticated) {
      this.router.navigate(['courses']);
    }
  }

}
