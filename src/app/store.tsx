import { configureStore } from '@reduxjs/toolkit'
import bookshelfReducer from './features/bookshelf/bookshelfSlice'
import bookReducer from './features/book/bookSlice'
import tagReducer from './features/tag/tagSlice'

export default configureStore({
    reducer: {
        bookshelf: bookshelfReducer,
        book: bookReducer,
        tag: tagReducer
    }
})

