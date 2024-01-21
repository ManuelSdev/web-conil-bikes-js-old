import React from 'react'
import DateStepPublicHandler from '@/components/stepper/step_0/DateStepPublicHandler'

export default function PublicStepZeroBookingPage({ searchParams }) {
   const { step, date: dateRange } = searchParams
   if (step !== '0') return null
   //console.log('step -> ', step)
   return <DateStepPublicHandler step={step} dateRange={dateRange} />
}
