// @ts-nocheck

import React from 'react'

import {
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from '@/components/ui/table'

import { PENDING } from '@/utils/app/appValues'
import { mappedBookingState } from '@/utils/app/functions'
import Link from 'next/link'
import { TableWrapper } from '@/components/ui-tw/table'
import { Button } from '@/components/ui/button'
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent

const urlParams = (obj) => new URLSearchParams(obj)

export default function UsersTable({ users, urlDate }) {
   /*
   const { date: encodedDate } = params
   const date = decodeURIComponent(encodedDate)
   const res = await getBookingOnDate(date)
   const { bookings } = await res.json()
   */

   //console.log('BookingListPage  bookings-> ', bookings)

   //if (!bookings) return null
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
      <TableWrapper>
         {' '}
         <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
               <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Teléfono</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               {users?.map((user, idx) => (
                  <TableRow key={idx}>
                     <TableCell className="font-medium">
                        {user.userId}
                     </TableCell>
                     <TableCell>{user.email}</TableCell>
                     <TableCell>{user.name}</TableCell>
                     <TableCell>{user.phone}</TableCell>
                     <TableCell className="text-right">
                        <Button>aaaa</Button>
                        <Button>aaaa</Button>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableWrapper>
   )
}
