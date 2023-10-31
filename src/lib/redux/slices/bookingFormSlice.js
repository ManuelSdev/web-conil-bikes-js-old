import { createSlice } from '@reduxjs/toolkit'

const initialState = { a: 2 }

const bookingFormSlice = createSlice({
   name: 'bookingForm',
   initialState,
   reducers: {},
})

export default bookingFormSlice.reducer
