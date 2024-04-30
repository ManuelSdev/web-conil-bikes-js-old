import React from 'react'
import { BookingsTable } from './BookingsTable'
import { ACTIVE, PENDING } from '@/utils/app/appValues'
import { mappedBookingState } from '@/utils/app/functions'
import { columns } from './columns'
import emails from '@/lib/sendGrid/sgVerifyEmail'

export default function BookingsTableHandler({ bookings, ...props }) {
   console.log('bookings ->', bookings)
   /**
    * Uso este componente para crear la constante data.
    * Si hago el map directamente en el componente BookingsTable, me da un error
    * y entra en bucle infinito.
    */
   const data = bookings.map((booking) => ({
      ...booking,
      state: mappedBookingState(booking.state),
      pickup: booking.pickup ? 'A domicilio' : 'En tienda',
      delivery: booking.delivery ? 'A domicilio' : 'En tienda',
   }))
   return <BookingsTable data={data} {...props} />
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
