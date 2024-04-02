import Breadcrumb from '@/components/layouts/admin/Breadcrumb'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import {
   SubShellContainer,
   SubShellHeader,
} from '../../../../components/layouts/admin/adminSubShell'
import StepHandler from './StepHandler'
import { BookingBreadcrumb } from './BookingBreadcrumb'
//import { useSearchParams } from 'next/navigation'

export default function BookingSubShell({ children, params }) {
   console.log('##### CalendarLayout aaaaaaaaaaaaaaaaa', params)
   // useSearchParams()
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
      <SubShellContainer>
         <SubShellHeader title={'Gestión de reservas'}>
            <Button asChild>
               <Link href="/dashboard/bookings/new/user">Nueva reserva</Link>
            </Button>
            <Button>Prueba</Button>
         </SubShellHeader>
         <BookingBreadcrumb />
         <StepHandler>{children}</StepHandler>
      </SubShellContainer>
   )
}
