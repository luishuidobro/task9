import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthorizacionService } from "./core/authorization_service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges{
  title = 'courses';

  isAutenticated: boolean = false;

  constructor(private authorizationService: AuthorizacionService,
    private router: Router) {
  }

  ngOnInit(){
    console.log(this.authorizationService.getUserInfo);
    this.isAutenticated = this.authorizationService.isAuthenticated();
    this.router.navigate(['courses']);
  }

  ngOnChanges() {
    console.log(this.authorizationService.getUserInfo);
    this.isAutenticated = this.authorizationService.isAuthenticated();
    this.router.navigate(['courses']);
  }
}
