import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Book from '../../../interface/Book'

interface BookState {
    books: Book[]
}

const checkId = (changeId?: number, currentID?: number,) => {
    return changeId === currentID
}

const initialState: BookState = {
    books: []
}

export const bookSlice = createSlice({
    name: 'book',
    initialState: initialState,
    reducers: {
        pushBook: (state, action: PayloadAction<Book>) => {
            state.books = [...state.books, action.payload]
        },
        setBooks: (state, action: PayloadAction<Book[]>) => {
            state.books = action.payload
        },
        filterBook: (state, action: PayloadAction<Book>) => {
            state.books = state.books.filter((book => book.id !== action.payload.id))
        },
        updateBook: (state, action: PayloadAction<Book>) => {
            const copyBooks = [...state.books]
            const index = copyBooks.findIndex((value) => checkId(action.payload.id, value.id))
            copyBooks[index].bookshelf = action.payload.bookshelf
            copyBooks[index].price = action.payload.price
            copyBooks[index].tags = action.payload.tags
        },
    }
})

export const { pushBook, setBooks, filterBook, updateBook } = bookSlice.actions

export default bookSlice.reducer