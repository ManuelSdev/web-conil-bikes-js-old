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
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent

export default async function BookingList({ bookings }) {
   /*
   const { date: encodedDate } = params
   const date = decodeURIComponent(encodedDate)
   const res = await getBookingOnDate(date)
   const { bookings } = await res.json()
   */
   //console.log('BookingListPage  bookings-> ', bookings)

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

   return (
      <div className="px-4 sm:px-6 lg:px-8">
         <TablePanel
            title={'Users'}
            description={
               'A list of all the users in your account including their name, title, email and role.'
            }
         />

         <TableWrapper>
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead className={'pl-4 pr-3 sm:pl-6'}>
                        Bicicletas
                     </TableHead>

                     <TableHead>Estado</TableHead>
                     <TableHead>Tipo</TableHead>
                     <TableHead className={'relative py-3.5 pl-3 pr-4 sm:pr-6'}>
                        <span className="sr-only">Edit</span>
                     </TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {bookings.map((booking) => (
                     <TableRow key={booking.id}>
                        <TableCell className={'pl-4 pr-3 sm:pl-6'}>
                           {booking.bikes}
                        </TableCell>
                        <TableCell>
                           {mappedBookingState(booking.state)}
                        </TableCell>
                        <TableCell>{setType(booking)}</TableCell>

                        <TableCell
                           className={
                              'relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'
                           }
                        >
                           <Link
                              href={`/dashboard/bookings/manage/${booking.id}`}
                              className="text-indigo-600 hover:text-indigo-900"
                           >
                              Ver
                              <span className="sr-only">, {booking.id}</span>
                           </Link>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableWrapper>
      </div>
   )
}
