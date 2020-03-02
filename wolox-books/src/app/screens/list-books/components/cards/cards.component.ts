import { Component, Input } from '@angular/core';

import { Book } from 'src/app/models/lists-books.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input() book: Book;

  constructor() { }

}
