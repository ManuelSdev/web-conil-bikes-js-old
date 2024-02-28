import BookingList from './BookingList'
import { getBookingOnDate } from '@/lib/pg/crud/bookings'
import { createDateRangeString } from '@/utils/datesFns/createDateRangeString'
import { getBookingDatesInRange } from '@/lib/pg/crud/bookings'
import { todayString } from '@/utils/datesFns/today'
import { redirect } from 'next/navigation'

//import { getBookingOnDate } from '@/lib/pg-promise/crud/bookings'
import React from 'react'
const urlParams = (obj) => new URLSearchParams(obj)

export default async function BookingListPage({ params, searchParams }) {
   //console.log('searchParams -> ', searchParams)
   const { date: encodedDate } = searchParams
   // return null
   const dateRange = createDateRangeString({ outsideDates: true })
   //console.log('dateRange -> ', dateRange)
   const res = await getBookingDatesInRange(dateRange)
   const bookingDates = await res.json()
   const isBookingToday = isFindedToday(bookingDates)
   //console.log('bookingDates -> ', bookingDates)
   //console.log('isBookingToday -> ', isBookingToday(bookingDates))

   if (!encodedDate && !isBookingToday) {
      return <div>No hay reservas para hoy</div>
   }
   if (!encodedDate && isBookingToday) {
      const params = urlParams({ date: todayString })
      //  return null
      //  console.log('params -> ', params)
      redirect(`/dashboard/booking?${params}`)
   }
   // const { date: encodedDate } = searchParams
   // console.log('##################   encodedDate -> ', encodedDate)
   const date = decodeURIComponent(encodedDate)
   const resa = await getBookingOnDate(date)
   const bookings = await resa.json()
   //console.log('bookings -> ', bookings)
   /*
   const date = encodedDate ? decodeURIComponent(encodedDate) : null

   if (!date) return null
   const res = date ? await getBookingOnDate(date) : null

   const bookings = date ? await res.json() : { bookings: null }
*/
   return <BookingList bookings={bookings} urlDate={encodedDate} />
}
function isFindedToday(bookingDates) {
   const today = Object.values(bookingDates)
      .flat()
      .find((date) => date === todayString)
   return !!today
}
