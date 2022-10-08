import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Bookshelf from '../../interface/Bookshelf'

interface BookshelfState {
    bookshelves: Bookshelf[]
}

const checkId = (changeId?: number, currentID?: number,) => {
    return changeId === currentID
}

const initialState: BookshelfState = {
    bookshelves: []
}

export const bookshelfSlice = createSlice({
    name: 'bookshelf',
    initialState: initialState,
    reducers: {
        pushBookshelf: (state, action: PayloadAction<Bookshelf>) => {
            state.bookshelves = [...state.bookshelves, action.payload]
        },
        setBookshelves: (state, action: PayloadAction<Bookshelf[]>) => {
            state.bookshelves = action.payload
        },
        filterBookshelf: (state, action: PayloadAction<Bookshelf>) => {
            state.bookshelves = state.bookshelves.filter((bookshelf => bookshelf.name !== action.payload.name))
        },
        updateBookshelf: (state, action: PayloadAction<Bookshelf>) => {
            const copyBookshelves = [...state.bookshelves]
            const index = copyBookshelves.findIndex((value) => checkId(action.payload.id, value.id))
            copyBookshelves[index].name = action.payload.name
        },
    }
})

export const { pushBookshelf, setBookshelves, filterBookshelf, updateBookshelf } = bookshelfSlice.actions

export default bookshelfSlice.reducer