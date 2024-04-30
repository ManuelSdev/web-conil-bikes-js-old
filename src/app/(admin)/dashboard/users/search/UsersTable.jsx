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
//import Link from 'next/link'
import { Link } from 'react-transition-progress/next'

import { TableWrapper } from '@/components/ui-tw/table'
import { Button } from '@/components/ui/button'
import clsx from 'clsx'
//progress bar
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent

const urlParams = (obj) => new URLSearchParams(obj)

export default function UsersTable({
   users,
   urlDate,
   renderAddBookingButton,
   renderShowButton,
}) {
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
   const userParams = (user) =>
      urlParams({
         userId: user.userId,
         email: user.email,
         name: user.name,
         phone: user.phone,
      })
   return (
      <TableWrapper>
         {' '}
         <Table>
            <TableHeader className="bg-gray-100">
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
                     <TableCell
                        className={clsx({
                           'text-destructive': user.emailAlert,
                        })}
                     >
                        {user.email}
                     </TableCell>
                     <TableCell>{user.name}</TableCell>
                     <TableCell
                        className={clsx({
                           'text-destructive': user.phoneAlert,
                        })}
                     >
                        {user.phone}
                     </TableCell>
                     <TableCell className="flex justify-end gap-2">
                        <Button asChild>
                           <Link
                              //href={`/admin/dashboard/bookings/new/date?${userParams(user     )}`}
                              href={`/dashboard/bookings/new/date?userId=${user.userId}`}
                           >
                              Crear reserva
                           </Link>
                        </Button>
                        <Button asChild>
                           <Link
                              href={`/dashboard/users/${user.userId}/details`}
                           >
                              Ver
                           </Link>
                        </Button>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableWrapper>
   )
}
