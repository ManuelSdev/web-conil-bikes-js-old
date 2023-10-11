'use client'

import React from 'react'
import { es, tr } from 'date-fns/locale'

import Calendar from './Calendar'
import {
   addMonths,
   endOfISOWeek,
   endOfMonth,
   endOfWeek,
   isFirstDayOfMonth,
   lastDayOfMonth,
   lastDayOfWeek,
   set,
   startOfISOWeek,
   startOfMonth,
   startOfWeek,
} from 'date-fns'

import { mergeClasses } from '@/utils/commonFns'
import BookingDays from './BookingDays'
import { useDayRender } from 'react-day-picker'

const customDayRender = (day, month, year) => {
   // Comprobar si el día es sábado o domingo
   const isWeekend = day.getDay() === 0 || day.getDay() === 6
   // Aplicar un estilo diferente si es fin de semana
   const style = isWeekend ? { backgroundColor: '#f0f0f0' } : {}
   // Devolver el elemento JSX del día con el estilo aplicado
   return <div style={style}>{day.getDate()}</div>
}

export default function CalendarHandler({ bookingDates }) {
   const handleMonthChange = (firstDisplayedDay) => {}
   const [date, setDate] = React.useState(new Date())
   //console.log('bookingDates ->', bookingDates)
   //   const [from, setFrom] = React.useState(false)
   const { from, to } = bookingDates
   /*
   const today = new Date()
   const firsMonthDay = startOfMonth(today)
   const lastMonthDay = endOfMonth(today)
   const monthRange = { from: firsMonthDay, to: lastMonthDay }
   //console.log('CalendarHandler -> monthRange', monthRange)
   const disabledDays = [monthRange]
   */
   const a = (e) => console.log('CalendarHandler ->', e)

   return (
      // @ts-ignore
      <Calendar
         locale={es}
         mode="single"
         selected={date}
         onSelect={setDate}
         showOutsideDays={true}
         className="rounded-md border"
         //   onMonthChange={(o) => console.log(o)}
         //disabled={disabledDays}
         // useDayRender={customDayRender}
         components={{ Day: BookingDays }}
         bookingDates={bookingDates}
         //  toDate={(o) => console.log(o}

         //modifiers={{ booked: bookedDays }}
         //modifiersClassNames={{booked: 'bg-red-700', selected: 'bg-green-700',}}
      />
   )
}

const today = set(new Date(), {
   hours: 0,
   minutes: 0,
   seconds: 0,
   milliseconds: 0,
})
const startMonth = startOfMonth(today)
console.log('startMonth ->', startMonth)

const monthStartWeek = startOfWeek(startMonth)
const monthStartWeekEs = startOfWeek(startMonth, { locale: es })
const monthStartISOWeek = startOfISOWeek(startMonth)
console.log('monthStartWeek ->', monthStartWeek)
console.log('monthStartWeek toISOString ->', monthStartWeek.toISOString())
console.log('monthStartWeekEs ->', monthStartWeekEs)
console.log('monthStartISOWeek ->', monthStartISOWeek)

// último dia del mes a la última hora
const endMonth = endOfMonth(today)
//ultimo día del mes a las 00:00 horas
const lastDayMonth = lastDayOfMonth(today)
console.log('endMonth ->', endMonth)
console.log('lastDayMonth ->', lastDayMonth)

//penúltimo día de la ultima semana del mes a la útlima hora
console.log('//////////////////// endMonth ////////////////////')
const monthEndWeek = endOfWeek(endMonth)
const monthEndWeekEs = endOfWeek(endMonth, { locale: es })
const monthEndISOWeek = endOfISOWeek(endMonth)
console.log('monthEndWeek ->', monthEndWeek)
console.log('monthEndWeekEs ->', monthEndWeekEs)
console.log('monthEndISOWeek ->', monthEndISOWeek)
console.log('monthEndWeek toISOString ->', monthEndWeek.toISOString())

console.log('//////////////////// lastDayMonth ////////////////////')
const lastDayInLastWeek = endOfWeek(lastDayMonth)
const lastDayInLastWeekEs = endOfWeek(lastDayMonth, { locale: es })
const lastDayInLastWeekISO = endOfISOWeek(lastDayMonth)
console.log('lastDayInLastWeek ->', lastDayInLastWeek)
console.log('lastDayInLastWeekEs ->', lastDayInLastWeekEs)
console.log('lastDayInLastWeekISO ->', lastDayInLastWeekISO)
console.log('lastDayInLastWeek toISOString ->', lastDayInLastWeek.toISOString())
