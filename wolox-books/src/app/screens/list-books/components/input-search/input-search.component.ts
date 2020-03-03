import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})

export class InputSearchComponent implements OnInit {
  searchText = '';
  toggleInputSearch(e) {
    this.searchText = e;
    this.query.emit(this.searchText);
  }

  @Output() query = new EventEmitter<string>();

  constructor() { }
  
  ngOnInit(): void {
  }
}
