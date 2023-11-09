import MobileBottomAppBar from '@/components/layouts/site/MobileBottomAppBar'
import { BookingManagementForm } from '@/components/stepper/step_4/BookingManagementForm'
import React from 'react'

export default function StepTwoBookingPage({ searchParams }) {
   return null
   const { date: dateRange, step } = searchParams
   if (step !== '2') return null
   return (
      <div>
         <BookingManagementForm step={step} dateRange={dateRange} />
      </div>
   )
}
