import StepsLine from '@/components/stepper/StepsLine'
import StepsPanel from '@/components/stepper/StepsPanel'
import UserStepper from '@/components/stepper/UserStepper'
import { verifySessionCookie } from '@/lib/firebase/admin/verifySessionCookie'
import { getAppBikeConfigSegments } from '@/lib/pg/crud/bikes'
import { getUserIdByEmail } from '@/lib/pg/crud/users'
import { cookies } from 'next/headers'

import React from 'react'

export default async function UserBookingStepperPage({ params }) {
   return (
      <div>
         {' '}
         <StepsPanel step={1} />{' '}
      </div>
   )
}
