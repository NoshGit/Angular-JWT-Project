import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppUser } from './app-user';
import { AppUserAuth } from './app-user-auth';
//import { LOGIN_MOCKS } from './login-mocks';

const API_URL = "http://localhost:5000/api/security/";

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class SecurityService {
  securityObject: AppUserAuth = new AppUserAuth();

  constructor(private http: HttpClient) { }

  

  login(entity:AppUser): Observable<AppUserAuth>{
    //Initialize Security Object
    this.resetSecurityObject();
    console.log("Entity", entity);
    return this.http.post<AppUserAuth>(API_URL + "login", entity, httpOptions).pipe(
      tap( data => {
        //Use Object Assign to Update the current Object
        //Note: Dont create a New AppUseAuth object
        // because that destroys reference to current object
        console.log("Check Data=", data);
        Object.assign(this.securityObject, data);

        //store token in local storage
        localStorage.setItem('bearerToken', this.securityObject.bearerToken);
      })
    )
  }

  resetSecurityObject(): void {
    this.securityObject.userName = "";
    this.securityObject.bearerToken = "";
    this.securityObject.isAuthenticated = false;
    this.securityObject.canSaveProduct = false;    
    this.securityObject.canAddProduct = false;
    this.securityObject.canAccessProducts = false;
    this.securityObject.canAddCategory = false;
    this.securityObject.canAccessCategories = false;

    localStorage.removeItem('bearerToken');
  }

  logout(): void {
    this.resetSecurityObject();
  }

  /*mockLogin(entity:AppUser): Observable<AppUserAuth>{
    //Initialize Security Object
    this.resetSecurityObject();

    //Use Object Assign to Update the current Object
    //Note: Dont create a New AppUseAuth object
    // because that destroys reference to current object

    Object.assign(this.securityObject,
      LOGIN_MOCKS.find(user=> user.userName.toLowerCase() === entity.userName.toLowerCase())
    );

    if(this.securityObject.userName !== ""){
      //store token in local storage
      localStorage.setItem('bearerToken', this.securityObject.bearerToken);
    }

    return of<AppUserAuth>(this.securityObject);
  }*/

  

}
