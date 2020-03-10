import { Action } from '@ngrx/store'
import { Book, ShoppingCarState } from '../models/lists-books.model'
import * as ListBooksCarActions from './books.actions'

const initialState: ShoppingCarState = { books: [], loading: false}

export function reducer(state = initialState, action: ListBooksCarActions.Actions) {
    switch(action.type) {
        case ListBooksCarActions.ADD_BOOKS:
            return {...state, books: [...state.books, action.payload]}
        
        case ListBooksCarActions.REMOVE_BOOKS:
            return [...state.books, action.payload]
            
        default:
            return state;
    }
}
