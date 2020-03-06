import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCarComponent } from '../modal-car/modal-car.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Book } from 'src/app/models/lists-books.model';
import { DataService } from 'src/app/services/data.service';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  count: number = 0;
  booksCart: any;
  books: Observable<Book[]>;

  constructor(private dataService: DataService, public dialog: MatDialog, private store: Store<AppState>) { 
    store.subscribe(e => { this.count = e.listBooksCar.length });
   }

  ngOnInit(): void {
    // this.countCar();
    this.DetailsCar();
  }

  // countCar() {
  //   this.dataService.car.subscribe(books => {
  //     this.count = books.length;
  //   });
  // }

  DetailsCar() {
    this.dataService.car.subscribe(books => {
      this.booksCart = books;
    });
  }

  openDialog() {
    this.dialog.open(ModalCarComponent, {
      data: this.booksCart
    });
  }
}
