import BookingList from '@/components/table/BookingList'
import { getBookingOnDate } from '@/lib/pg-promise/crud/bookings'
import React from 'react'

export default async function BookingListPage({ params, searchParams }) {
   const { date: encodedDate } = searchParams
   const date = encodedDate ? decodeURIComponent(encodedDate) : null
   const res = date ? await getBookingOnDate(date) : null
   const { bookings } = date ? await res.json() : { bookings: null }
   return <BookingList bookings={bookings} urlDate={encodedDate} />
}
