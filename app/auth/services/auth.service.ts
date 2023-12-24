import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RegisterInterface, RegisterResponseInterface } from '../interfaces/register';
import { LoginInterface, LoginResponseInterface } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = 'http://localhost:5000/api/auth';

  constructor(
    private httpClient: HttpClient
  ) { }

  register(data: RegisterInterface): Observable<RegisterResponseInterface> {
    return this.httpClient.post<RegisterResponseInterface>(`${this.baseURL}/register`, data);
  }

  login(data: LoginInterface): Observable<LoginResponseInterface> {
    return this.httpClient.post<LoginResponseInterface>(`${this.baseURL}/login`, data);
  }
}
