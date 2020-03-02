import { TestBed } from '@angular/core/testing';

import { ListBooksService } from './list-books.service';

describe('ListBooksService', () => {
  let service: ListBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
