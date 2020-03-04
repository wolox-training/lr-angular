import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

import { DataService } from 'src/app/services/data.service';
import { Book } from 'src/app/models/lists-books.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  count: number = 0;
  newCount: number;
  @Input() book: Book;

  constructor(private router: Router, private dataService: DataService) { }

  getBooksDetail(id) {
    this.router.navigateByUrl(`/books/${id}`);
  }

  togglePlusCart() {
    this.dataService.addBooks(this.book);
  }
}
