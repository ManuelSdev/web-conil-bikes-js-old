import Calendar from '@/components/calendar/Calendar'
import CalendarHandler from '@/components/calendar/CalendarHandler'
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
   return <CalendarHandler bookingDates={bookingDates} />
}
