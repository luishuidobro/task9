import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthorizacionService } from "./shared/services/authorization_service"
import { Router, ActivatedRoute } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges{
  title = 'courses';

  isAutenticated: boolean = false;

  constructor(private authorizationService: AuthorizacionService,
    private router: Router, private route: ActivatedRoute
    // , private http: HttpClient
    ) {
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

  // callApi() {
  //   this.http.get('https://reqres.in/api/users?page=2')
  //   .subscribe(data => { console.log(data);})
  // }

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
