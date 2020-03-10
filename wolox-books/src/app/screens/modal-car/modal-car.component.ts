import { Component, OnInit, Inject } from '@angular/core';
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

  constructor(@Inject(MAT_DIALOG_DATA) public data, private store: Store<AppState>) {
    store.subscribe(e => { this.books = e.listBooksCar.books });
  }

  ngOnInit(): void {
  }

  deleteBooks(index) {
    this.store.dispatch(new ListBooksCarActions.RemoveBooks(index) )
  }

}
