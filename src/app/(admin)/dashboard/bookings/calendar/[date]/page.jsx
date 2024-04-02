import React from 'react'
import { getBookingOnDate } from '@/lib/pg/crud/bookings'
import BookingList from './BookingList'
import BookingSubShell from '@/app/(admin)/dashboard/bookings/BookingSubShell'

export default async function BookingListPage({ params }) {
   const { date: encodedDate } = params
   const date = decodeURIComponent(encodedDate)
   //  if (!date) return null
   const bookings = await getBookingListData(date)
   console.log('BookingListHandler')

   return (
      <BookingSubShell params={params}>
         <BookingList bookings={bookings} urlDate={date} />
      </BookingSubShell>
   )
}

async function getBookingListData(date) {
   if (!date) {
      return null
   }
   const res = await getBookingOnDate(date)
   const bookings = await res.json()
   return bookings
}
