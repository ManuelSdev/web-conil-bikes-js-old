import { baseApi } from './baseApi'
import {
   AVY_RESERVED_BIKES,
   AV_BIKES,
   AV_RANGES,
   AV_SIZES,
   AV_STOCK,
   AV_TYPES,
   BIKES,
} from '../common/constants/routes'

const urlParams = (obj) => new URLSearchParams(obj)

export const bikeApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getBikes: builder.query({
         query: (filters) => BIKES + `?${filters}`,
      }),

      getBikesById: builder.query({
         query: (arrayOfIds) => ({
            url: BIKES,
            method: 'POST',

            body: arrayOfIds,
         }),
      }),

      getAvaiableSizes: builder.query({
         query: ({ from, to }) =>
            console.log('sizeeeeeeeeeee') ||
            AV_SIZES + `?${urlParams({ from, to })}`,
      }),
      getAvaiableStock: builder.query({
         query: ({ from, to }) => AV_STOCK + `?${urlParams({ from, to })}`,
      }),
      getAvaiableTypes: builder.query({
         query: ({ from, to, size }) =>
            AV_TYPES + `?${urlParams({ from, to, size })}`,
      }),
      getAvaiableRanges: builder.query({
         query: ({ from, to, size, type }) =>
            AV_RANGES +
            `?${urlParams({
               from,
               to,
               size,
               type,
            })}`,
      }),
      getAvaiableBikes: builder.query({
         query: ({ from, to, size, type, range }) =>
            console.log('========> RTK query getAvaiableBikes') ||
            AV_BIKES + `?${urlParams({ from, to, size, type, range })}`,
         transformResponse: (response, meta, arg) => {
            const res = response
            const { status } = meta.response
            console.log('@@@@@@@@@@@@@@ transformRes res _> ', res)
            console.log('@@@@@@@@@@@@@@ transformRes status _> ', status)

            return response
         },
      }),

      getReservedBikeAvailabilityOnRange___: builder.query({
         query: ({ from, to, reservedBikes, bookingId }) =>
            AVY_RESERVED_BIKES +
            `?${urlParams({ from, to, reservedBikes, bookingId })}`,
      }),

      getReservedBikeAvailabilityOnRange: builder.query({
         query: ({ from, to, reservedBikes, bookingId }) => ({
            url: AVY_RESERVED_BIKES,
            method: 'POST',

            body: { from, to, reservedBikes, bookingId },
         }),
      }),
   }),
})
//const [trigger, result, lastPromiseInfo] = baseApi.endpoints.getSizes.useLazyQuery()

export const useGetAvaiableBikesQueryState =
   bikeApi.endpoints.getAvaiableBikes.useQueryState

export const {
   useGetBikesQuery,
   useGetBikesByIdQuery,
   useGetAvaiableStockQuery,
   useGetAvaiableSizesQuery,
   useGetAvaiableTypesQuery,
   useLazyGetAvaiableTypesQuery,
   useLazyGetAvaiableRangesQuery,
   useGetAvaiableRangesQuery,
   useGetAvaiableBikesQuery,
   useLazyGetAvaiableBikesQuery,
   useGetReservedBikeAvailabilityOnRangeQuery,
   useLazyGetReservedBikeAvailabilityOnRangeQuery,
} = bikeApi
