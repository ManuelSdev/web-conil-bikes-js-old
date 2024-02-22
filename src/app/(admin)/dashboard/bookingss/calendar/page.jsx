import React from 'react'
import CalendarHandlerUrl from '@/components/calendar/CalendarHandlerUrl'
import Card from '@/components/layouts/Card'
import { createDateRangeString } from '@/utils/datesFns/createDateRangeString'
import BookingTabs from '@/components/tabs/BookingTabs'
import BookingList from '@/components/table/BookingList'

import { todayString } from '@/utils/datesFns/today'
import { redirect } from 'next/navigation'
//import { getBookingDatesInRange } from '@/lib/pg-promise/crud/bookings'
import ReduxProviderWrapper from '@/lib/redux/ReduxProviderWrapper'
import { getBookingDatesInRange } from '@/lib/pg/crud/bookings'
import { getBookingOnDate } from '@/lib/pg/crud/bookings'

import { getBookingWithBikesById } from '@/lib/pg/crud/bookings'
import BookingTabs_test from '@/components/tabs/BookingTabs_test'

const urlParams = (obj) => new URLSearchParams(obj)

export default async function CalendarPage({ params, searchParams }) {
   const { date: encodedDate, bookingId } = searchParams
   const date = encodedDate ? decodeURIComponent(encodedDate) : null

   /**
    * Si entras al layout de reservas, no hay ningún urlParams inicial. Entonces,
    * la bookingList estará vacía aunque el calendario muestre reservas para el día actual
    * Esta función comprueba que el día actual se encuentra en las bookingDates. Si es así,
    * redirige a la misma url pero añadiendo la fecha del día actual para que
    * la page bookingList muestre las reservas de hoy
    */
   if (!encodedDate && isBookingToday) {
      const params = urlParams({ date: todayString })
      redirect(`/dashboard/bookings/calendar?${params}`)
   }

   const dateRange = createDateRangeString({ outsideDates: true })
   const { bookingDates, isBookingToday } = await getCalendarData(dateRange)

   const bookings = await getBookingListData(date)

   const { bookingData, bikes } = bookingId
      ? await getBookingsWithBikes(bookingId)
      : { bookingData: null, bikes: null }

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
         <div className="flex-initial ">
            {' '}
            {bookings && (
               <BookingList bookings={bookings} urlDate={encodedDate} />
            )}
         </div>
         {/*<div className="flex-initial ">
            {bookingId && !bookingData && <p>Cargando...</p>}
            {bookingData && (
               <BookingTabs bookingData={bookingData} bikes={bikes} />
            )}
            </div>*/}
         <div className="flex-initial ">
            <BookingTabs_test bookingData={bookingData} bikes={bikes} />
         </div>
      </div>
   )
}

async function getCalendarData(dateRange) {
   const res = await getBookingDatesInRange(dateRange)
   const bookingDates = await res.json()
   const isBookingToday = isFindedToday(bookingDates)
   return { bookingDates, isBookingToday }
}

async function getBookingListData(date) {
   const res = date ? await getBookingOnDate(date) : null
   const bookings = date ? await res.json() : { bookings: null }
   return bookings
}

async function getBookingsWithBikes(bookingId) {
   const res = await getBookingWithBikesById(bookingId)
   const { bookingData, bikes } = await res.json()
   return { bookingData, bikes }
}

function isFindedToday(bookingDates) {
   const today = Object.values(bookingDates)
      .flat()
      .find((date) => date === todayString)
   return !!today
}
