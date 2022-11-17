import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isAuthenticated: boolean = false;
  constructor(private _router: Router, private _auth: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      localStorage.getItem('token') ? this.isAuthenticated = true : this.isAuthenticated = false;
      console.log(localStorage.getItem('token'))
      if (!localStorage.getItem('token'))
        this._router.navigate(['/access-denied']); 
    return true;
  }
  
}
