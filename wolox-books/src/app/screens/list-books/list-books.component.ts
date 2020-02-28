import { Component, OnInit } from '@angular/core';

import { ListBooksService } from 'src/app/services/list-books.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit {

  public search:any = '';
  locked: any[] = [];
  books: any;

  constructor(private listBooksService: ListBooksService) { }

  ngOnInit() {
    this.getLocalStorage();
  }

  getLocalStorage() {
    const valueLocalStorage = localStorage.getItem('token').replace(/['"]+/g, '');
    this.listBooks(valueLocalStorage)
  }

  listBooks(valueLocalStorage) {
    this.listBooksService.getListBooks(valueLocalStorage).subscribe(responsePost => this.books = responsePost );
  }

}
