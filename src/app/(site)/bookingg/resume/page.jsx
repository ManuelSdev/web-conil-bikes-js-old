import Step from '@/components/stepper/Step'
import StepsLine from '@/components/stepper/StepsLine'
import StepsPanel from '@/components/stepper/StepsPanel'
import UserStepper from '@/components/stepper/UserStepper'
import BookingResumeHandler from '@/components/stepper/step_5/BookingResumeHandler'
import { verifySessionCookie } from '@/lib/firebase/admin/verifySessionCookie'
import { getAppBikeConfigSegments } from '@/lib/pg/crud/bikes'
import { getUserIdByEmail } from '@/lib/pg/crud/users'
import { cookies } from 'next/headers'
import Link from 'next/link'

import React from 'react'

export default async function UserBookingStepperPage({ params }) {
   return (
      <Step step={4}>
         <BookingResumeHandler />
      </Step>
   )
}
