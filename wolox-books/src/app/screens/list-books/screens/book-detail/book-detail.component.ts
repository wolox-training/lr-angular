import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ListBooksService } from 'src/app/services/list-books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  details: any;
  title: string;
  image_url: string;

  constructor(private listBooksService: ListBooksService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.getDetailsBooks(id);
    });
  }

  getDetailsBooks(id) {
    console.log(id);
    const valueLocalStorage = localStorage.getItem('token').replace(/['"]+/g, '');
    this.listBooksService.getDetailsListBooks(valueLocalStorage, id).subscribe(responsePost => {
      console.log(responsePost);
      this.details = responsePost
    });
  }

}
