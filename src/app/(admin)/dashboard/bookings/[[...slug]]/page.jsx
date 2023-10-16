import BookingList from '@/components/bookings/BookingList'
import Calendar from '@/components/calendar/Calendar'
import CalendarHandler from '@/components/calendar/CalendarHandler'
import CalendarHandlerUrl from '@/components/calendar/CalendarHandlerUrl'
import Card from '@/components/layout/Card'
import {
   getBookingDatesInRange,
   getBookingPageData,
} from '@/utils/crudApiFns/bookings'
import createDateRangeString from '@/utils/datesFns/createDateRangeString'
import { todayString } from '@/utils/datesFns/today'
import { da } from 'date-fns/locale'
import React from 'react'

export default async function page({ params }) {
   console.log('############### PAGE CalendarHandlerUrl params -> ', params)

   params.slug ??= [`${todayString}`]
   const { slug } = params
   const [date, bookingId] = slug
   // @ts-ignore

   console.log('CalendarHandlerUrl day  -> ', date)
   console.log('CalendarHandlerUrl day  -> ', bookingId)
   // @ts-ignore
   const dateRange = createDateRangeString({ outsideDates: true })

   // const res = await getBookingDatesInRange(dateRange)

   const res = await getBookingPageData({ dateRange, date })
   // console.log('############### PAGE CalendarHandlerUrl res -> ', res)
   const { bookingDates, bookings } = await res.json()
   console.log('RES in componente -> ', bookingDates)
   const cardProps = {
      //className: 'max-w-[334px]',
      // className: 'col-span-4',
      cardTitle: 'Calendario de reservas',
      // cardDescription: 'Hin reverse chronological order.',
   }
   console.log('Bookings Page *************************')
   return (
      <div className="flex">
         <div className="flex-none">
            {' '}
            <Card {...cardProps}>
               <CalendarHandlerUrl bookingDates={bookingDates} />
            </Card>
         </div>
         <div className="flex-initial ">
            {' '}
            <BookingList bookings={bookings} />
         </div>
         <div className="flex-initial ">
            {' '}
            <BookingList bookings={bookings} />
         </div>
      </div>
   )
}

/*
 <Card {...cardProps}>
         <CalendarHandler bookingDates={bookingDates} />
      </Card>
      */
