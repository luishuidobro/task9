import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizacionService } from '../shared/services/authorization_service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authorizationService: AuthorizacionService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const homePageUrl = this.router.parseUrl("/login");
      const observable = new Observable<boolean | UrlTree>(observer => {
        observer.next(this.authorizationService.isAuthenticated ? true : homePageUrl);
      });
      return observable;
  }
  
}
