import { configureStore } from '@reduxjs/toolkit'
import bookshelfReducer from './features/bookshelf/bookshelfSlice'

export default configureStore({
    reducer: {
        bookshelf: bookshelfReducer
    }
})

