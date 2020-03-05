import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Book } from '../models/lists-books.model'

export const ADD_BOOKS       = '[BOOKS] Add'
export const REMOVE_BOOKS    = '[BOOKS] Remove'

export class AddBooks implements Action {
    readonly type = ADD_BOOKS

    constructor(public payload: Book) {}
}

export class RemoveBooks implements Action {
    readonly type = REMOVE_BOOKS

    constructor(public payload: number) {}
}

export type Actions = AddBooks | RemoveBooks
