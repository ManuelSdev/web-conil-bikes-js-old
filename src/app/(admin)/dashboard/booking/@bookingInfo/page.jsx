import BookingTabs from '@/components/tabs/BookingTabs'
import { getBookingWithBikesById } from '@/lib/pg/crud/bookings'
//import { getBookingWithBikesById } from '@/lib/pg-promise/crud/bookings'
import React from 'react'
export default async function BookingInfoPage({ params, searchParams }) {
   const { bookingId } = searchParams
   if (!bookingId) return null
   const res = bookingId ? await getBookingWithBikesById(bookingId) : null
   const { bookingData, bikes } = bookingId
      ? await res.json()
      : { bookingData: null, bikes: null }
   //console.log('bookingData -> ', bookingData)
   return <BookingTabs bookingData={bookingData} bikes={bikes} />
}
