import { configureStore } from '@reduxjs/toolkit'
import bookingFormReducer from './slices/bookingFormSlice'
import { baseApi } from './apiSlices/baseApi'

//https://redux-toolkit.js.org/usage/usage-guide#simplifying-store-setup-with-configurestore
export const reduxStore = configureStore({
   reducer: {
      bookingForm: bookingFormReducer,
      [baseApi.reducerPath]: baseApi.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
})
