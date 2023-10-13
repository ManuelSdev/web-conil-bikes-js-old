import Calendar from '@/components/calendar/Calendar'
import CalendarHandler from '@/components/calendar/CalendarHandler'
import Card from '@/components/layout/Card'
import { getBookingDatesInRange } from '@/utils/crudApiFns/dates'
import createDateRangeString from '@/utils/datesFns/createDateRangeString'
import React from 'react'

export default async function page() {
   // @ts-ignore
   console.log('############### PAGE ###############')
   const dateRange = createDateRangeString({ outsideDates: true })
   const res = await getBookingDatesInRange(dateRange)
   const { bookingDates } = await res.json()
   console.log('RES in componente -> ', bookingDates)
   const cardProps = {
      className: 'max-w-[334px]',
      cardTitle: 'Calendario de reservas',
      // cardDescription: 'Hin reverse chronological order.',
   }
   return (
      <Card {...cardProps}>
         <CalendarHandler bookingDates={bookingDates} />
      </Card>
   )
}
