import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthorizacionService } from "../../shared/services/authorization_service"
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  isAutenticated: boolean = false;
  userInfo: string = '';
  
  constructor(
    private authorizationService: AuthorizacionService,
    private router: Router) { }

  ngOnInit() {
    this.isAutenticated = this.authorizationService.isAuthenticated();
    this.authorizationService.isLogged$.subscribe((isAutenticated) => this.isAutenticated = isAutenticated);
    this.authorizationService.getUserInfo().subscribe((user) => {this.userInfo = user});
    console.log(this.userInfo);
  }

  ngOnChanges() {
    this.authorizationService.isLogged$.subscribe((isAutenticated) => this.isAutenticated = isAutenticated);
  }

  Logout() {
    this.authorizationService.logOut();
    this.router.navigate(['login']);
    // window.location.reload();
  }

}
