import { Component, Input, OnInit } from '@angular/core';

import { Book } from 'src/app/models/lists-books.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() book: Book;

  constructor() { }

  ngOnInit() {
    console.log(this.book);
  }

}
