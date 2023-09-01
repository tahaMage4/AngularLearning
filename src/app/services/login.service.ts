import { Injectable } from '@angular/core';
import { Login } from '../types/data.types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  //? normall
  // constructor() {}
  // userLogin(data: Login) {
  //   console.log('Login user', data);
  // }

  // api post request
  constructor(private http: HttpClient) {}
  userLogin(data: Login) {
    console.warn('Login user');
    return this.http.post('http://localhost:33949/login', data);
  }
}
