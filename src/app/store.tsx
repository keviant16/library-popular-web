import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'
import { api } from './api/api'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
})
