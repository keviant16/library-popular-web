import { configureStore } from '@reduxjs/toolkit'
import bookshelfReducer from './features/bookshelf/bookshelfSlice'
import tagReducer from './features/tag/tagSlice'

export default configureStore({
    reducer: {
        bookshelf: bookshelfReducer,
        tag: tagReducer
    }
})

