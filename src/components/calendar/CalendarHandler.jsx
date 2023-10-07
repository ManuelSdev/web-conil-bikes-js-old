'use client'

import React, { useState } from 'react'
import { es } from 'date-fns/locale'
import Calendar from './Calendar'
import clsx from 'clsx'
export default function CalendarHandler() {
   const [date, setDate] = useState(new Date())

   return (
      <Calendar
         locale={es}
         mode="single"
         selected={date}
         onSelect={setDate}
         showOutsideDays={true}
         className="rounded-md border"
      />
   )
}

/*
  <Calendar
         locale={es}
         mode="single"
         selected={date}
         onSelect={setDate}
         showOutsideDays={true}
         className="rounded-md border"
      />
   )
   */
