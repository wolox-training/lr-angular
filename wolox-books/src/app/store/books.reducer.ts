import { Action } from '@ngrx/store'
import { Book } from '../models/lists-books.model'
import * as TutorialActions from './books.actions'

export function reducer(state: Book[] = [], action: TutorialActions.Actions) {
    switch(action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        
        // Add this case:
        case TutorialActions.REMOVE_TUTORIAL:
            state.splice(action.payload, 1)
            return state;
            
        default:
            return state;
    }
}
