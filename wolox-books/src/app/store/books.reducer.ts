import { Action } from '@ngrx/store'
import { Book } from '../models/lists-books.model'
import * as ListBooksCarActions from './books.actions'

const initialState: Books = { Books: []}

export function reducer(state: Book[] = [initialState], action: ListBooksCarActions.Actions) {
    switch(action.type) {
        case ListBooksCarActions.ADD_BOOKS:
            return [...state, action.payload];
        
        case ListBooksCarActions.REMOVE_BOOKS:
            state.splice(action.payload, 1)
            return state;
            
        default:
            return state;
    }
}
