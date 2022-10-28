import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Book from '../../interface/Book'

interface BookState {
    books: Book[],
    bookForm: any,
    searchValue: string,
    bookFilter: any
}

const initialState: BookState = {
    books: [],
    bookForm: {
        price: 0.50,
        bookshelf: "",
        tags: []
    },
    searchValue: "",
    bookFilter: {
        bookshelf: "",
        tags: []
    },
}

export const bookSlice = createSlice({
    name: 'book',
    initialState: initialState,
    reducers: {
        setBookForm: (state, action: PayloadAction<any>) => {
            const { name, value } = action.payload
            state.bookForm[`${name}`] = value
        },
        initBookForm: (state, action: PayloadAction<any>) => {
            state.bookForm = action.payload
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
        initBookFilter: (state, action: PayloadAction<any>) => {
            state.bookFilter = action.payload
        },
        setBookFilter: (state, action: PayloadAction<any>) => {
            const { name, value } = action.payload
            state.bookFilter[`${name}`] = value
        },
    }
})

export const { initBookFilter, initBookForm, setBookForm, setSearchValue, setBookFilter } = bookSlice.actions

export default bookSlice.reducer