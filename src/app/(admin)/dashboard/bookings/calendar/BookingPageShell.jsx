import Breadcrumb from '@/components/layouts/admin/Breadcrumb'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function BookingPageShell({ children, params }) {
   console.log('##### CalendarLayout aaaaaaaaaaaaaaaaa', params)
   const date = params?.date
   //onst dates = encodedDate && decodeURIComponent(encodedDate)

   const bookingId = params?.bookingId
   const isCalendarPage = !date && !bookingId

   const allPages = [
      {
         name: 'Calendario',
         href: '/dashboard/bookings/calendar',
         show: true,
         current: isCalendarPage,
      },
      {
         name: 'Lista de reservas',
         href: `/dashboard/bookings/calendar/${date}`,
         show: !!date,
         current: !!date && !bookingId,
      },
      {
         name: 'Detalles de reserva',
         href: `/dashboard/bookings/calendar/${date}${bookingId}`,
         show: !!bookingId,
         current: !!bookingId,
      },
   ]
   const pages = allPages.filter((page) => page.show)
   return (
      <div className="px-4 sm:px-6 lg:px-14">
         <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
               Gestión de reservas
            </h2>
            <div className="flex items-center space-x-2">
               <Button asChild>
                  <Link href="/dashboard/bookings/new/date">Nueva reserva</Link>
               </Button>
               <Button>Prueba</Button>
            </div>
         </div>
         <Breadcrumb pages={pages} />
         {children}
      </div>
   )
}
