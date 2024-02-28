import React from 'react'
import BookingList from './BookingList'
import { getBookingOnDate } from '@/lib/pg/crud/bookings'

export default async function BookingListHandler({ date, ...props }) {
   if (!date) return null
   const bookings = await getBookingListData(date)
   console.log('BookingListHandler')
   return <BookingList bookings={bookings} {...props} />
}

async function getBookingListData(date) {
   if (!date) {
      return null
   }
   const res = await getBookingOnDate(date)
   const bookings = await res.json()
   return bookings
}
