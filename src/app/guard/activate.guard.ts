import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';


@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  constructor(private userservice: UserService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userservice.isLoggedin()) {
      return true;
    } else {
      alert("Please login with proper Credential!!");
      this.router.navigate(['login'])
    }
  }

}
