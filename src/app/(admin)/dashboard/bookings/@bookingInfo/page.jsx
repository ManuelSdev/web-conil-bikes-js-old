import BookingTabs from '@/components/BookingTabs'
import { getBookingWithBikesById } from '@/utils/crudApiFns/bookings'
import React from 'react'

export default async function BookingInfoPage({ params, searchParams }) {
   const { bookingId } = searchParams

   const res = bookingId ? await getBookingWithBikesById(bookingId) : null
   const { bookingData, bikes } = bookingId
      ? await res.json()
      : { bookingData: null, bikes: null }

   return bookingId ? (
      <BookingTabs bookingData={bookingData} bikes={bikes} />
   ) : null
}
