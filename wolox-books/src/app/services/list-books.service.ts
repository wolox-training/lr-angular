import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListBooksService {

  constructor(private http: HttpClient) { }

  getListBooks(valueLocalStorage) {
    return this.http.get(`${environment.ROOT_URL}/books`, {
      headers:
      {
        'Authorization': valueLocalStorage
      }
    })
  }
}
