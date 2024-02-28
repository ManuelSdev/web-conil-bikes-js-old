import React, { Suspense } from 'react'
import BookingTabs from '@/components/tabs/BookingTabs'
import { getBookingWithBikesById } from '@/lib/pg/crud/bookings'
import BookingPageShell from '../../BookingPageShell'

export default async function BookingInfoHandler({ params }) {
   const { bookingId, date: encodedDate } = params
   // const bookingId = Number(strBookingId)
   const date = decodeURIComponent(encodedDate)

   // if (!bookingId) return null
   const { bookingData, bikes } = await getBookingsWithBikes(bookingId)
   console.log('params -> ', params)
   //console.log('bikes -> ', bikes)

   return (
      <BookingPageShell params={params}>
         <BookingTabs bookingData={bookingData} bikes={bikes} />
      </BookingPageShell>
   )
}

async function getBookingsWithBikes(bookingId) {
   const res = await getBookingWithBikesById(bookingId)
   const { bookingData, bikes } = await res.json()
   return { bookingData, bikes }
}

// <BookingTabs bookingData={bookingData} bikes={bikes} />
