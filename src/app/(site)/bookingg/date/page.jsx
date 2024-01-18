import StepsLine from '@/components/stepper/StepsLine'
import StepsPanel from '@/components/stepper/StepsPanel'
import UserStepper from '@/components/stepper/UserStepper'
import DateStepHandler from '@/components/stepper/step_0/DateStepHandler'
import { verifySessionCookie } from '@/lib/firebase/admin/verifySessionCookie'
import { getAppBikeConfigSegments } from '@/lib/pg/crud/bikes'
import { getUserIdByEmail } from '@/lib/pg/crud/users'
import { cookies } from 'next/headers'
import Link from 'next/link'

import React from 'react'

export default async function BookingDatePage({ params }) {
   return (
      <div>
         {' '}
         <StepsPanel step={1} /> <Link href="/bookingg/bikes">ir a page B</Link>
         <DateStepHandler />
      </div>
   )
}
