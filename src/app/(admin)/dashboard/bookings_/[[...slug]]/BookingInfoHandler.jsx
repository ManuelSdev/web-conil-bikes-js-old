import React from 'react'
import BookingTabs from '@/components/tabs/BookingTabs'
import { getBookingWithBikesById } from '@/lib/pg/crud/bookings'

export default async function BookingInfoHandler({ bookingId }) {
   // const { bookingId } = searchParams
   if (!bookingId) return null
   const { bookingData, bikes } = await getBookingsWithBikes(bookingId)
   console.log('bookingData -> ', bookingData)
   console.log('bikes -> ', bikes)
   return <BookingTabs bookingData={bookingData} bikes={bikes} />
}

async function getBookingsWithBikes(bookingId) {
   const res = await getBookingWithBikesById(bookingId)
   const { bookingData, bikes } = await res.json()
   return { bookingData, bikes }
}
