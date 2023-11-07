import React from 'react'
import PublicDateStepPageHandler from '@/components/stepper/step_0/PublicDateStepPageHandler'

export default function PublicStepZeroBookingPage({ searchParams }) {
   const { step, date: dateRange } = searchParams
   if (step !== '0') return null
   console.log('step -> ', step)
   return <PublicDateStepPageHandler step={step} dateRange={dateRange} />
}
