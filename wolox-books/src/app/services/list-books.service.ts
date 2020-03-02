import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Book } from 'src/app/models/lists-books.model';

@Injectable({
  providedIn: 'root'
})
export class ListBooksService {

  constructor(private http: HttpClient) { }

  getListBooks(valueLocalStorage) {
    return this.http.get<Book[]>(`${environment.ROOT_URL}/books`, {
      headers:
      {
        'Authorization': valueLocalStorage
      }
    })
  }
}
