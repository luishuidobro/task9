import { Component, OnInit } from '@angular/core';
import { AuthorizacionService } from "../authorization_service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAutenticated: boolean = false;

  constructor(
    private authorizationService: AuthorizacionService,
    private router: Router) { }

  ngOnInit() {
    this.isAutenticated = this.authorizationService.isAuthenticated();
  }

  Logout() {
    this.authorizationService.logOut();
    this.router.navigate(['login']);
    // window.location.reload();
  }

}
