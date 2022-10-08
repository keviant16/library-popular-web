import { configureStore } from '@reduxjs/toolkit'
import bookshelfReducer from './slice/bookshelfSlice'
import bookReducer from './slice/bookSlice'
import tagReducer from './slice/tagSlice'
import authReducer from './slice/authSlice'

export default configureStore({
    reducer: {
        bookshelf: bookshelfReducer,
        book: bookReducer,
        tag: tagReducer,
        auth: authReducer
    }
})

