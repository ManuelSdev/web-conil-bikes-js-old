import StepZeroPage from '@/components/stepper/step_0/StepZeroPage'
import React from 'react'
import DateStepPageHandler from '@/components/stepper/step_0/DateStepPageHandler'

export default function UserStepZeroBookingPage({ searchParams }) {
   const { step, date: dateRange } = searchParams
   if (step !== '0') return null
   console.log('step -> ', step)
   return <DateStepPageHandler step={step} dateRange={dateRange} />
}
