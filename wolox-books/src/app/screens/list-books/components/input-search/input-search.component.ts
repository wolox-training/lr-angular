import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {

  @Output() query = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  somethingChanged(event) {
    this.query.emit(event.target.value);
  }
}
