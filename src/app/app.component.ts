import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthorizacionService } from "./core/authorization_service"
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges{
  title = 'courses';

  isAutenticated: boolean = false;

  constructor(private authorizationService: AuthorizacionService,
    private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(){
    console.log(this.authorizationService.getUserInfo);
    this.isAutenticated = this.authorizationService.isAuthenticated();
    console.log(window.location.href);
    
    // if (this.isAutenticated) {
    //   this.router.navigate(['courses']);
    // } 
    // else {
    //   this.router.navigate(['login']);
    // }
  }

  ngOnChanges() {
    console.log(this.authorizationService.getUserInfo);
    this.isAutenticated = this.authorizationService.isAuthenticated();
    // if (this.isAutenticated) {
    //   this.router.navigate(['courses']);
    // } 
    // else {
    //   this.router.navigate(['login']);
    // }
  }
}
