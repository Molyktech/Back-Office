import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
// import { environment } from  '../environments/environment';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private env: EnvService;
  // baseUrl = environment.baseUrl;
  url = 'https://mercatoroathapi.azurewebsites.net/api';
  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(obj) {
    return this.httpClient.post<any>(`${this.url}/User/Authenticate`, obj).pipe(
      map(user => {
        // save user details
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          // console.log('base', this.baseUrl);
          console.log('env', this.env);
        }
        return user;
      })
    );
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  createUser(user) {
    return this.httpClient.post(`${this.url}/User/Save`, user);
  }

  getUsers(institutionID) {
    return this.httpClient.get(
      `${this.url}/User/GetByInstitutionID/${institutionID}`
    );
  }
}
