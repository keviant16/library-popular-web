import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'
import { api } from './api/api'
import bookRecuder from './slice/bookSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    book: bookRecuder,
    [api.reducerPath]: api.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
})
