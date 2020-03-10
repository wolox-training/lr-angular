import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { Store } from '@ngrx/store';

import { DataService } from 'src/app/services/data.service';
import { Book } from 'src/app/models/lists-books.model';
import * as ListBooksCarActions from 'src/app/store/books.actions';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  count: number = 0;
  newCount: number;
  @Input() book: Book;

  constructor(private router: Router, private dataService: DataService, private store: Store<AppState>) { }

  getBooksDetail(id) {
    this.router.navigateByUrl(`/books/${id}`);
  }

  togglePlusCart() {
    this.store.dispatch(new ListBooksCarActions.AddBooks({
      id: this.book.id,
      author: this.book.author,
      title: this.book.title,
      genre: this.book.genre,
      publisher: this.book.publisher,
      year: this.book.year,
      image_url: this.book.image_url,
      description: this.book.description
    }) )
  }
}
