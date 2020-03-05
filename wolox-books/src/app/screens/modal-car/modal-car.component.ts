import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Book } from 'src/app/models/lists-books.model';
import { AppState } from '../../app.state';
import * as TutorialActions from '../../store/books.actions';

@Component({
  selector: 'app-modal-car',
  templateUrl: './modal-car.component.html',
  styleUrls: ['./modal-car.component.scss']
})
export class ModalCarComponent implements OnInit {

  tutorials: Observable<Book[]>;

  constructor(@Inject(MAT_DIALOG_DATA) public data, private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
  }

  ngOnInit(): void {
  }

  delTutorial(index) {
    console.log(index);
    this.store.dispatch(new TutorialActions.RemoveTutorial(index) )
  }

}
