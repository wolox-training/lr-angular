import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

import { Book } from 'src/app/models/lists-books.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input() book: Book;

  constructor(private router: Router) { }

  getBooksDetail(id) {
    this.router.navigateByUrl(`/books/${id}`);
  }
}
