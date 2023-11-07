import React from 'react'
import { redirect } from 'next/navigation'

import SelectedBikesStepPageHandler from '@/components/stepper/step_1/SelectedBikesStepPageHandler'

export default async function PublicStepOneBookingPage({ searchParams }) {
   const { step, date: dateRange, bikes } = searchParams
   if (step !== '1') return null
   if (!bikes) redirect(`/booking?step=2&date=${dateRange}`)

   console.log('step -> ', step)
   return <SelectedBikesStepPageHandler />
}
