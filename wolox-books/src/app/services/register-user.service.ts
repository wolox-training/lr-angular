import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http: HttpClient) { }

  userRegister(user) {
    const data = { user };
    return this.http.post(`${environment.ROOT_URL}/users`, data);
  }
}
