import RangeDatePicker from '@/components/layouts/site/RangeDatePicker'
import StepZero from '@/components/stepper/StepZero'
import React from 'react'

export default function StepZerBookingPage({ searchParams }) {
   const { step, date: dateRange } = searchParams
   if (step !== '0') return null
   console.log('step -> ', step)
   return <StepZero step={step} dateRange={dateRange} />
}
