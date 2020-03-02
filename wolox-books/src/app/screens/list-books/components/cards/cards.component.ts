import { Component, OnInit, Input } from '@angular/core';

import { ListsBooks } from 'src/app/models/ListsBooks.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() books: ListsBooks;

  constructor() { }

  ngOnInit(): void {
    console.log(this.books);
  }

}
