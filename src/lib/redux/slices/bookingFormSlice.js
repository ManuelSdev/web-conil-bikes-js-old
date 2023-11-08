import { createSelector, createSlice } from '@reduxjs/toolkit'

const initialState = {
   dateRange: '',
   // dateRange: { from: '', to: '' },
   bikes: [],
   address: 'aaaa',
   delivery: false,
   pickup: false,
   bikeSearchParams: {
      size: '',
      type: '',
      range: '',
   },
}

const bookingFormSlice = createSlice({
   name: 'bookingForm',
   initialState,
   reducers: {
      dateRangeSelected: (state, action) => {
         console.log('dateRangeSelected action.payload _> ', action.payload)
         state.dateRange = action.payload
      },
      bikeSelected: (state, action) => {
         addBike(state, action)
      },
      bikeSearchParamsSelected: (state, action) => {
         console.log(
            'bikeSearchParamsSelected action.payload _> ',
            action.payload
         )
         state.bikeSearchParams = action.payload
      },
   },
})

export const { dateRangeSelected, bikeSelected, bikeSearchParamsSelected } =
   bookingFormSlice.actions

export default bookingFormSlice.reducer

export const selectDateRange = (state) => state.bookingForm.dateRange

export const selectBikes = (state) => state.bookingForm.bikes

export const selectBikesearchParams = (state) =>
   state.bookingForm.bikeSearchParams

const selectBookingAddress = (state) => state.bookingForm.address
const selectBookingDelivery = (state) => state.bookingForm.delivery
const selectBookingPickup = (state) => state.bookingForm.pickup

export const selectBookingManagement = createSelector(
   [selectBookingAddress, selectBookingDelivery, selectBookingPickup],
   (address, delivery, pickup) => ({ address, delivery, pickup })
)

export const selectBikesByUnits = createSelector([selectBikes], (bikes) => {
   // console.log(bikes)
   const bikesInUnits = bikes.map((bike) => {
      const multipleItem = []
      let n = 1
      const { quantity } = bike
      while (n <= quantity) {
         /**
          * Si estás creando la reserva, bike no tiene la prop avaiable. Esta solo
          * se añade cuando descargas una reserva, para editarla, con la action
          * bikesAvailabilityAdded pero, igualmente, necesitas la prop avaiable
          * en la lista que devuelve este select porque se va a chequear para pintar
          * <AdedBikesLis>
          */
         multipleItem.push({ ...bike, avaiable: bike.avaiable ?? true })
         n++
      }
      //console.log(multipleItem)
      return multipleItem
   })

   return bikesInUnits.flat()
})

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
