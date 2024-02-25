import React from 'react'
import CalendarHandlerUrl from '@/components/calendar/CalendarHandlerUrl'
import Card from '@/components/layouts/Card'
import { createDateRangeString } from '@/utils/datesFns/createDateRangeString'
import { todayString } from '@/utils/datesFns/today'

import { redirect } from 'next/navigation'
//import { getBookingDatesInRange } from '@/lib/pg-promise/crud/bookings'
import ReduxProviderWrapper from '@/lib/redux/ReduxProviderWrapper'
import { getBookingDatesInRange } from '@/lib/pg/crud/bookings'
import Link from 'next/link'

const urlParams = (obj) => new URLSearchParams(obj)

export default async function CalendarPage({ params, searchParams }) {
   const { date: encodedDate } = searchParams
   const dateRange = createDateRangeString({ outsideDates: true })

   const res = await getBookingDatesInRange(dateRange)
   const bookingDates = await res.json()
   //console.log('bookingDates -> ', bookingDates)
   //console.log('isBookingToday -> ', isBookingToday(bookingDates))
   const isBookingToday = isFindedToday(bookingDates)
   console.log('cargada la página de calendario ----------> 11111111111')
   /**
    * Si entras al layout de reservas, no hay ningún urlParams inicial. Entonces,
    * la bookingList estará vacía aunque el calendario muestre reservas para el día actual
    * Esta función comprueba que el día actual se encuentra en las bookingDates. Si es así,
    * redirige a la misma url pero añadiendo la fecha del día actual para que
    * la page bookingList muestre las reservas de hoy
    */
   /*
   
*/
   if (!encodedDate && isBookingToday) {
      const params = urlParams({ date: todayString })
      redirect(`/dashboard/booking?${params}`)
   }
   const cardProps = {
      //className: 'max-w-[334px]',
      // className: 'col-span-4',
      cardTitle: 'Calendario de reservas',
      // cardDescription: 'Hin reverse chronological order.',
   }
   const paramss = urlParams({ date: todayString })
   return (
      <div>
         <Link href={`/dashboard/booking?${paramss}`}>ss</Link>
         <Card {...cardProps}>
            <CalendarHandlerUrl bookingDates={bookingDates} />
         </Card>
      </div>
   )
}

function isFindedToday(bookingDates) {
   const today = Object.values(bookingDates)
      .flat()
      .find((date) => date === todayString)
   return !!today
}
