import { Component, OnInit  } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { ListBooksService } from 'src/app/services/list-books.service';
import { Book } from 'src/app/models/lists-books.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  details: Book;

  constructor(private listBooksService: ListBooksService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.getDetailsBooks(id);
    });
  }

  getDetailsBooks(id) {
    const userId = JSON.parse(localStorage.getItem('token'));
    this.listBooksService.getDetailsListBooks(userId, id).subscribe((responsePost: Book) => { this.details = responsePost });
  }

}
