import CalendarHandlerUrl from '@/components/calendar/CalendarHandlerUrl'
import Card from '@/components/layout/Card'
import { getBookingDatesInRange } from '@/utils/crudApiFns/bookings'
import createDateRangeString from '@/utils/datesFns/createDateRangeString'
import { todayString } from '@/utils/datesFns/today'
import React from 'react'

export default async function RootLayout({ children, params }) {
   // console.log('Props admin -> ', props)
   //const [encodedDate, bookingId] = slug
   const dateRange = createDateRangeString({ outsideDates: true })

   const res = await getBookingDatesInRange(dateRange)
   const { bookingDates } = await res.json()
   const cardProps = {
      //className: 'max-w-[334px]',
      // className: 'col-span-4',
      cardTitle: 'Calendario de reservas',
      // cardDescription: 'Hin reverse chronological order.',
   }
   return (
      <div className="flex">
         <div className="flex-none">
            <Card {...cardProps}>
               <CalendarHandlerUrl bookingDates={bookingDates} />
            </Card>
         </div>
         {children}
      </div>
   )
}
