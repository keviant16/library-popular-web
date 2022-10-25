import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Book from '../../interface/Book'
import { checkId } from '../../utils/Utils'

interface BookState {
    books: Book[],
    bookForm: any
}

const initialState: BookState = {
    books: [],
    bookForm: {
        price: 0.50,
        bookshelf: "",
        tags: []
    }
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
        setBookForm: (state, action: PayloadAction<any>) => {
            const { name, value } = action.payload
            state.bookForm[`${name}`] = value
        }
    }
})

export const { pushBook, setBooks, filterBook, updateBook, setBookForm } = bookSlice.actions

export default bookSlice.reducer