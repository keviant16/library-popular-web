import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Book from '../../../interface/Book'

interface BookState {
    books: Book[],
    bookForm: any
}

const initialState: BookState = {
    books: [],
    bookForm: {}
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
        initBookForm: (state, action: PayloadAction<any>) => {
            state.bookForm = action.payload
        },
        setBookForm: (state, action: PayloadAction<any>) => {
            const name = action.payload.name
            const value = action.payload.value
            state.bookForm = { ...state.bookForm, [name]: value }
        }
    }
})

export const { pushBook, setBooks, filterBook, setBookForm, initBookForm } = bookSlice.actions

export default bookSlice.reducer