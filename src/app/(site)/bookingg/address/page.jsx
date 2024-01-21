import StepsLine from '@/components/stepper/StepsLine'
import StepsPanel from '@/components/stepper/StepsPanel'
import UserStepper from '@/components/stepper/UserStepper'
import { verifySessionCookie } from '@/lib/firebase/admin/verifySessionCookie'
import { getAppBikeConfigSegments } from '@/lib/pg/crud/bikes'
import { getUserIdByEmail } from '@/lib/pg/crud/users'
import { cookies } from 'next/headers'
import Link from 'next/link'
import BookingManagementHandler from '@/components/stepper/step_4/BookingManagementHandler'

import React from 'react'
import Step from '@/components/stepper/Step'

export default async function UserBookingStepperPage({ params }) {
   return (
      <Step step={3}>
         {' '}
         <BookingManagementHandler />
      </Step>
   )
}
