import React from 'react'
import { getBookingOnDate } from '@/lib/pg/crud/bookings'

import BookingSubShell from '@/app/(admin)/dashboard/bookings/BookingSubShell'
import { BookingsTable } from './bookingsTable/BookingsTable'
import {
   findBookingOnDate,
   findBookingOnDateWithEmail,
} from '@/lib/pg/repos/booking'
import { columns } from './bookingsTable/columns'
import BookingsTableHandler from './bookingsTable/BookingsTableHandler'
import BasicCard from '@/components/BasicCard'
import { mappedBookingState } from '@/utils/app/functions'

const testBookings = [
   {
      bookingId: 30,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 2,
   },
   {
      bookingId: 37,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 34,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 39,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 36,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 31,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 44,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 41,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 40,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 43,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 38,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 2,
   },
   {
      bookingId: 30,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 2,
   },
   {
      bookingId: 37,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 34,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 39,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 36,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 31,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 44,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 41,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 40,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 43,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 38,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 2,
   },
   {
      bookingId: 30,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 2,
   },
   {
      bookingId: 37,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 34,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 39,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 36,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 31,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 44,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 41,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 40,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 43,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
   {
      bookingId: 38,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 2,
   },
   {
      bookingId: 30,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 2,
   },
   {
      bookingId: 37,
      state: 'pending',
      delivery: false,
      pickup: false,
      bikes: 1,
   },
]

export default async function BookingListPage({ params }) {
   const { date: encodedDate } = params
   const date = decodeURIComponent(encodedDate)
   //  if (!date) return null
   //const bookings = await findBookingOnDate(date)
   const bookings = await findBookingOnDateWithEmail(date)
   console.log('bookings en BookingListPage -> ', bookings)
   const defaultVisibleColumns = {
      bikes: true,
      email: true,
      state: true,
      pickup: true,
      delivery: true,
      action: true,
   }

   return (
      <BasicCard className={'max-w-none'} tittle="Planificadas el 25/08/9836">
         <BookingsTableHandler
            bookings={bookings}
            columns={columns}
            defaultVisibleColumns={defaultVisibleColumns}
         />
      </BasicCard>
   )
}

async function getBookingListData(date) {
   if (!date) {
      return null
   }
   // const res = await getBookingOnDate(date)
   const bookings = await findBookingOnDate(date)
   // const bookings = await res.json()
   console.log('bookings en getBookingListData -> ', bookings)
   return bookings
}
