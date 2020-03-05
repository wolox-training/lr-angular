import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  count: number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.car.subscribe(books => {
      this.count = books.length;
    });
  }


}
