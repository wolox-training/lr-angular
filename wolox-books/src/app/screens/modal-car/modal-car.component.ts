import { Component, OnInit, Inject, TemplateRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Book } from 'src/app/models/lists-books.model';
import { AppState } from '../../app.state';
import * as ListBooksCarActions from '../../store/books.actions';

@Component({
  selector: 'app-modal-car',
  templateUrl: './modal-car.component.html',
  styleUrls: ['./modal-car.component.scss']
})
export class ModalCarComponent implements OnInit {

  books: Observable<Book[]>;
  booksData: boolean;
  valueDataBooks: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data, private store: Store<AppState>) {
    this.books = store.select('listBooksCar');
    store.subscribe(e => { this.valueDataBooks = e.listBooksCar.length });
  }

  ngOnInit(): void {
    this.viewData();
  }

  viewData() {
    this.booksData = this.valueDataBooks >= 1 ? true : false;
  }

  deleteBooks(index) {
    this.store.dispatch(new ListBooksCarActions.RemoveBooks(index) )
  }
}
