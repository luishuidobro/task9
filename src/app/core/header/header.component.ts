import { Component, OnInit } from '@angular/core';
import { AuthorizacionService } from "../authorization_service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAutenticated: boolean = false;

  constructor(private authorizationService: AuthorizacionService) { }

  ngOnInit() {
    this.isAutenticated = this.authorizationService.isAuthenticated();
  }

  Logout() {
    this.authorizationService.logOut();
    window.location.reload();
  }

}
