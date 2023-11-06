import { createSelector, createSlice } from '@reduxjs/toolkit'

const initialState = {
   dateRange: '',
   bikes: [],
   address: 'aaaa',
   delivery: false,
   pickup: false,
}

const bookingFormSlice = createSlice({
   name: 'bookingForm',
   initialState,
   reducers: {
      dateRangeSelected: (state, action) => {
         state.dateRange = action.payload
      },
      bikeSelected: (state, action) => {
         addBike(state, action)
      },
   },
})

export const { dateRangeSelected, bikeSelected } = bookingFormSlice.actions

export default bookingFormSlice.reducer

export const selectBookingDateRange = (state) => state.bookingForm.dateRange

export const selectBookingBikes = (state) => state.bookingForm.bikes

const selectBookingAddress = (state) => state.bookingForm.address
const selectBookingDelivery = (state) => state.bookingForm.delivery
const selectBookingPickup = (state) => state.bookingForm.pickup

export const selectBookingManagement = createSelector(
   [selectBookingAddress, selectBookingDelivery, selectBookingPickup],
   (address, delivery, pickup) => ({ address, delivery, pickup })
)

function addBike(state, action) {
   //No desctructure count propertie and add quantity property
   const {
      modelId,
      bikeSize,
      modelName,
      modelType,
      modelRange,
      modelBrand,
      modelDesc,
      modelImages,
   } = action.payload
   //modelId=modelId: modelId del modelo, no modelId de bicicleta
   const newBike = {
      modelId,
      bikeSize,
      modelName,
      modelType,
      modelRange,
      modelBrand,
      modelDesc,
      modelImages,
      quantity: 1,
   }
   const exist = state.bikes.some(
      (bike) => bike.bikeSize === bikeSize && bike.modelId === modelId
   )
   state.bikes = exist
      ? state.bikes.map((bike) => {
           if (bike.bikeSize === bikeSize && bike.modelId === modelId) {
              return { ...bike, quantity: bike.quantity + 1 }
           } else return bike
        })
      : [...state.bikes, newBike]
}
