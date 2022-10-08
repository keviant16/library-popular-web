import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Book from '../../interface/Book'
import { checkId } from '../../utils/Utils'

interface BookState {
    books: Book[],
}

const initialState: BookState = {
    books: [],
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
            const index = state.books.findIndex((value) => checkId(action.payload.id, value.id))
            state.books[index] = action.payload
        },
    }
})

export const { pushBook, setBooks, filterBook, updateBook } = bookSlice.actions

export default bookSlice.reducer