import { createSelector, createSlice } from '@reduxjs/toolkit'
import { selectAppBikesConfig } from './appConfigSlice'
import { differenceInDays } from 'date-fns'

const initialState = {
   //dateRange: '',
   var: 0,
   segmentList: [],
   dateRange: { from: '', to: '' },
   bikes: [],
   address: '',
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
      varChanged: (state, action) => {
         state.var = action.payload
      },
      segmentListLoaded: (state, action) => {
         //  console.log('segmentListLoaded action.payload _> ', action.payload)
         state.segmentList = action.payload
      },
      dateRangeSelected: (state, action) => {
         // console.log('dateRangeSelected action.payload _> ', action.payload)
         state.dateRange = action.payload
      },
      bookingManagementSelected: (state, action) => {
         //  console.log('bookingManagementSelected action.payload _> ', action)
         const { address, delivery, pickup } = action.payload
         state.address = address
         state.delivery = delivery
         state.pickup = pickup
      },
      bikeSelected: (state, action) => {
         addBike(state, action)
      },

      //El usuario elimina una bicicleta
      bikeRemoved: (state, action) => {
         // console.log(action.payload)
         const bike = action.payload
         const { modelId, bikeSize } = bike
         //Comprueba si solo hay una unidad/quantity===1
         const onlyOne = state.bikes.some(
            (bike) =>
               bike.bikeSize === bikeSize &&
               bike.modelId === modelId &&
               bike.quantity === 1
         )
         //    console.log('only one', onlyOne)
         if (onlyOne) {
            console.log('bikeRemoved in bookingFormSlice: solo hay una')
            state.bikes = state.bikes.filter(
               (bike) =>
                  !(bike.bikeSize === bikeSize && bike.modelId === modelId)
            )
         } else {
            console.log('bikeRemoved in bookingFormSlice: más de una')
            state.bikes = state.bikes.map((bike) => {
               if (bike.bikeSize === bikeSize && bike.modelId === modelId) {
                  return { ...bike, quantity: bike.quantity - 1 }
               } else return bike
            })
         }
      },

      bikeSearchParamsSelected: (state, action) => {
         //console.log('bikeSearchParamsSelected action.payload _> ',action.payload)
         state.bikeSearchParams = action.payload
      },
   },
})

export const {
   varChanged,
   segmentListLoaded,
   dateRangeSelected,
   bookingManagementSelected,
   bikeSelected,
   bikeRemoved,
   bikeSearchParamsSelected,
} = bookingFormSlice.actions

export default bookingFormSlice.reducer

export const selectVar = (state) => state.bookingForm.var
export const selectSegmentList = (state) => state.bookingForm.segmentList
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

export const selectBikesToAddToBooking = createSelector(
   [selectBikes],
   (bikes) => bikes.map((bike) => ({ ...bike, quantity: 1 }))
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
export const selectAvailableBikes = createSelector([selectBikes], (bikes) =>
   bikes.map((bike) => {
      const { quantity, availability } = bike
      //   console.log(bike)
      if (availability >= 0) {
         if (availability > 0) {
            if (quantity <= availability) return bike
            else return { ...bike, quantity: availability }
         }
         //si availability === 0 no retorna ninguna bike
      } else return bike
   })
)
export const selectBookingDayPrice = createSelector(
   [selectAppBikesConfig, selectBikesByUnits],
   (bikesConfig, bikesInUnits) => {
      const dayPrice = bikesInUnits.reduce((acc, bike) => {
         const { modelType, modelRange } = bike
         //  console.log('????????????????????????????????', modelType)
         //  console.log('????????????????????????????????', modelRange)
         const [{ segmentPrice }] = bikesConfig.segmentList.filter(
            (segment) =>
               segment.modelType === modelType &&
               segment.modelRange === modelRange
         )

         return acc + segmentPrice
      }, 0)

      return dayPrice
   }
)

export const selectBookingDuration = createSelector(
   [selectDateRange],
   (dateRange) => {
      const { from, to } = dateRange
      const duration = differenceInDays(to, from)
      return duration
   }
)
export const selectBookingData = createSelector(
   [selectBikes, selectBikesByUnits, selectDateRange, selectBookingManagement],
   (bikesWithQuantity, bikesByUnits, dateRange, bookingManagement) => {
      const { from, to } = dateRange
      const duration = differenceInDays(new Date(to), new Date(from))
      const dayPrice = bikesByUnits.reduce((acc, bike) => {
         return acc + bike.price
      }, 0)
      const totalPrice = dayPrice * duration
      //Es
      const bikesForQuery = bikesWithQuantity.map(
         ({ modelId, bikeSize, quantity }) => ({ modelId, bikeSize, quantity })
      )
      return {
         bikes: bikesForQuery,
         bikesByUnits,
         dayPrice,
         dateRange,
         duration,
         totalPrice,
         ...bookingManagement,
      }
   }
)
function addBike(state, action) {
   //modelId=modelId: modelId del modelo, no modelId de bicicleta
   const newBike = {
      ...action.payload,
   }
   console.log('newBike en addBike -> ', newBike)
   const exist = state.bikes.some(
      (bike) =>
         bike.bikeSize === newBike.bikeSize && bike.modelId === newBike.modelId
   )
   if (exist) {
      /**
       * Sabemos que la bici existe en el array de bikes, pero hay que volver
       * a reccorrer el array para encontrarla y actualizar actualizar su quantity.
       * Las bicis que no son iguales a la que se añade, no se modifican y solo se retornan
       */
      state.bikes = state.bikes.map((bike) => {
         if (
            bike.bikeSize === newBike.bikeSize &&
            bike.modelId === newBike.modelId
         ) {
            return { ...bike, quantity: bike.quantity + 1 }
         } else return bike
      })
   } else {
      const bikePrice = getBikeSegmentPrice(state.segmentList)(newBike)
      state.bikes = [
         ...state.bikes,
         { ...newBike, quantity: 1, price: bikePrice },
      ]
   }
}

function getBikeSegmentPrice(segmentList) {
   return (bike) => {
      const segment = segmentList.filter(
         (segment) =>
            segment.modelType === bike.modelType &&
            segment.modelRange === bike.modelRange
      )
      const [{ segmentPrice }] = segment
      return segmentPrice
   }
}
