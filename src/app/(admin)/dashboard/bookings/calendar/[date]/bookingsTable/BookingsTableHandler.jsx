import React from 'react'
import { BookingsTable } from './BookingsTable'
import { ACTIVE, PENDING } from '@/utils/app/appValues'
import { mappedBookingState } from '@/utils/app/functions'
import { columns } from './columns'
import BasicCard from '@/components/BasicCard'
import emails from '@/lib/sendGrid/sgVerifyEmail'

export default function BookingsTableHandler({ bookings, date }) {
   const data = bookings.map((booking) => ({
      bookingId: booking.bookingId,
      bikes: booking.bikes,
      state: mappedBookingState(booking.state),
      type: setType(booking),
      date: date,
      user: booking.email,
   }))

   return (
      <BasicCard className={'max-w-none'} tittle="Planificadas el 25/08/9836">
         <BookingsTable data={data} columns={columns} />
      </BasicCard>
   )
}

function setType(booking) {
   if (booking.state === PENDING) {
      if (booking.delivery) return 'A domicilio'
      else return 'En tienda'
   }
   if (booking.state === ACTIVE) {
      if (booking.pickup) return 'A domicilio'
      else return 'En tienda'
   }
}
