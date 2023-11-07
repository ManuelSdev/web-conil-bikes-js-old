import MobileBottomAppBar from '@/components/layouts/site/MobileBottomAppBar'
import { ManagementForm } from '@/components/stepper/step_4/ManagementForm'
import React from 'react'

export default function StepTwoBookingPage({ searchParams }) {
   return null
   const { date: dateRange, step } = searchParams
   if (step !== '2') return null
   return (
      <div>
         <ManagementForm step={step} dateRange={dateRange} />
      </div>
   )
}
