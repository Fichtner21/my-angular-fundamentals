import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    const isUserLogged = this.authService.isUserLogged();
    return isUserLogged;
  }
  
}
