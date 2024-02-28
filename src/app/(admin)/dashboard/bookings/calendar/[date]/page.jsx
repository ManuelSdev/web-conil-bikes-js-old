import React from 'react'
import { getBookingOnDate } from '@/lib/pg/crud/bookings'
import BookingList from './BookingList'
import BookingPageShell from '../BookingPageShell'

export default async function BookingListPage({ params }) {
   const { date: encodedDate } = params
   const date = decodeURIComponent(encodedDate)
   //  if (!date) return null
   const bookings = await getBookingListData(date)
   console.log('BookingListHandler')

   return (
      <BookingPageShell params={params}>
         <BookingList bookings={bookings} urlDate={date} />
      </BookingPageShell>
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
