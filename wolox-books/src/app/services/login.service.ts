import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(session) {
    const data = { session };
    return this.http.post(`${environment.ROOT_URL}/users/sessions`, data);
  }

  getLocalStorage() {
    const valueLocalStorage = !!localStorage.getItem('token');
    return valueLocalStorage;
  }
}
