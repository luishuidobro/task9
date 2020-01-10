import { Component, OnInit } from '@angular/core';
import { AuthorizacionService } from "../../shared/services/authorization_service"
import { User } from '../../shared/models/user-model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email = "";
  public password = "";

  constructor(
    private authorizationService: AuthorizacionService) { }

  ngOnInit() {
  }

  Login() {
    const user = {
      email: this.email,
      password: this.password
    } as User;
    this.authorizationService.login(user);
  }
}
