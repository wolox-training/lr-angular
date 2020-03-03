import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Book } from 'src/app/models/lists-books.model';
import { ListBooksService } from 'src/app/services/list-books.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit {

  books: Observable<Book[]>;
  query: any;

  constructor(private listBooksService: ListBooksService, private router: Router) { }

  ngOnInit() {
    this.getLocalStorage();
  }

  getLocalStorage() {
    const userId = JSON.parse(localStorage.getItem('token'));
    this.listBooks(userId)
  }

  listBooks(userId) {
    this.books = this.listBooksService.getListBooks(userId);
  }
}
