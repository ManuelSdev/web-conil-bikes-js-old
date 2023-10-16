// @ts-nocheck
import { getBookingOnDate } from '@/utils/crudApiFns/bookings'
import React from 'react'

import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TablePanel,
   TableRow,
   TableWrapper,
} from '@/components/table/table'
import { PENDING } from '@/utils/app/appValues'
import { mappedBookingState } from '@/utils/app/functions'
import Link from 'next/link'
import DataGrid from '@/components/table/DataGrid'
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent

export default async function BookingListPage({ params }) {
   const { date: encodedDate } = params
   const date = decodeURIComponent(encodedDate)
   const res = await getBookingOnDate(date)
   const { bookings } = await res.json()
   console.log('BookingListPage  bookings-> ', bookings)

   const setType = (booking) => {
      if (booking.state === PENDING) {
         if (booking.delivery) return 'A domicilio'
         else return 'En tienda'
      }
      if (booking.state === ACTIVE) {
         if (booking.pickup) return 'A domicilio'
         else return 'En tienda'
      }
   }

   const tablePanel = { title: ' Hola', description: 'Adios' }
   const headLabels = [
      'Bicicletas',
      'Estado',
      'Tipo',
      <span className="sr-only">Edit</span>,
   ]
   const rows = bookings.map(
      (booking) => [booking.bikes, mappedBookingState(booking.state)],
      setType(booking),
      <Link
         href={`/dashboard/bookings/manage/${booking.id}`}
         className="text-indigo-600 hover:text-indigo-900"
      >
         Ver
         <span className="sr-only">, {booking.id}</span>
      </Link>
   )
   return <DataGrid />
}
