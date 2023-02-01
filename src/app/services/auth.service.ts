import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  setToken(token:string): void{
    localStorage.setItem('token',token);
  }

  getToken():string|null{
    return localStorage.getItem('token');
  }

  isLoggedIn(){
    return this.getToken()!=null;
  }
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  login({email,password}:any):Observable<any>{
    if(email=="admin"&& password=="admin"){
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({name:'admin',email:'admin'});
    }
    console.log(email);
    console.log(password);
  
    return throwError(new Error('Invalid user name or password'));
  }
}
