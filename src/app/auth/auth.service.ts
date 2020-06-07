import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthUser } from './model/auth-user.interface';
import { AuthResponse } from './model/auth-response.interface';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public static readonly API_URL = 'https://reqres.in/api/'

  public registerUser(user: AuthUser): Promise<unknown> {
    return this.httpClient.post(AuthService.API_URL + 'register', user).toPromise();
  }

  public loginUser(user: AuthUser): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(AuthService.API_URL + 'login', user).pipe(
      catchError((errorResponse) =>{
        console.log(errorResponse);
        return of(errorResponse.error);
      } )
    );
  }

  public isUserLogged(): boolean {
    return !!sessionStorage.getItem('session-token'); //!! podwojna negacja rzutowania boolean na string
  }

  public logOut(){
    sessionStorage.removeItem('session-token');
  }
}
