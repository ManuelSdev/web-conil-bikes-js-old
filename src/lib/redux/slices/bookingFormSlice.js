import { createSlice } from '@reduxjs/toolkit'

const initialState = { bikes: [] }

const bookingFormSlice = createSlice({
   name: 'bookingForm',
   initialState,
   reducers: {
      bikeSelected: (state, action) => {
         addBike(state, action)
      },
   },
})

export const { bikeSelected } = bookingFormSlice.actions

export default bookingFormSlice.reducer

export const selectBookingBikes = (state) => state.bookingForm.bikes

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
