import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthorizacionService } from "./login/authorization_service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges{
  title = 'courses';

  isAutenticated: boolean = false;

  constructor(private authorizationService: AuthorizacionService) {
  }

  ngOnInit(){
    console.log(this.authorizationService.getUserInfo);
    this.isAutenticated = this.authorizationService.isAuthenticated();
  }

  ngOnChanges() {
    console.log(this.authorizationService.getUserInfo);
    this.isAutenticated = this.authorizationService.isAuthenticated();
  }
}
