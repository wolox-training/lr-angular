import { Injectable, EventEmitter } from '@angular/core';
import {  Book } from 'src/app/models/lists-books.model';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private countInitial = new BehaviorSubject<Book[]>([]);

  constructor() { }

  get carValue() {
    return this.countInitial.value;
  }

  get car() {
    return this.countInitial;
  }

  addBooks(book: Book) {
    const copyBooks: Book[] = this.countInitial.value;
    copyBooks.push(book);
    this.countInitial.next(copyBooks);
  }
}
