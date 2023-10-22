import { useQuery } from '@tanstack/react-query'
import { da } from 'date-fns/locale'

const tryFetch = (route) => {
   try {
   } catch (error) {}
}
const urlParams = (obj) => new URLSearchParams(obj)

export const useGetBookingDatesInRange = (dateRange) => {
   const { isInitialLoading, isError, data, error, refetch, isFetching } =
      useQuery({
         queryKey: ['test', dateRange],
         queryFn: async () => {
            console.log('dateRange en useQuery -> ', dateRange)
            const res = await fetch(`../api?${urlParams({ dateRange })}`)
            const { bookingDates } = await res.json()
            return bookingDates
         },
         enabled: false,
      })

   return { isInitialLoading, isError, data, error, refetch, isFetching }
}
