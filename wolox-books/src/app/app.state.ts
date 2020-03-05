import { Book } from './models/lists-books.model';

export interface AppState {
  readonly tutorial: Book[];
}
