import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCarComponent } from '../modal-car/modal-car.component';

import { DataService } from 'src/app/services/data.service';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  count: number = 0;
  booksCart: any;

  constructor(private dataService: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.countCar();
    this.DetailsCar()
  }

  // countCar() {
  //   this.dataService.car.subscribe(books => {
  //     this.count = books.length;
  //   });
  // }

  DetailsCar() {
    this.dataService.car.subscribe(books => {
      this.booksCart = books
    });
  }

  openDialog() {
    this.dialog.open(ModalCarComponent, {
      data: this.booksCart
    });
  }

}
