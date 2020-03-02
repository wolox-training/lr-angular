import { Component, OnInit, Input } from '@angular/core';

import { ListsBooks } from 'src/app/models/ListsBooks.model';
import { ListBooksService } from 'src/app/services/list-books.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit {

  @Input() books: ListsBooks;

  constructor(private listBooksService: ListBooksService) { }

  ngOnInit() {
    this.getLocalStorage();
  }

  getLocalStorage() {
    const userId = JSON.parse(localStorage.getItem('token'));
    this.listBooks(userId)
  }

  listBooks(userId) {
    this.listBooksService.getListBooks(userId).subscribe(responsePost => this.books = responsePost );
  }

}
