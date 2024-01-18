import StepsLine from '@/components/stepper/StepsLine'
import StepsPanel from '@/components/stepper/StepsPanel'
import UserStepper from '@/components/stepper/UserStepper'
import BikeFiltersStepHandler from '@/components/stepper/step_2/BikeFiltersStepHandler'
import { verifySessionCookie } from '@/lib/firebase/admin/verifySessionCookie'
import { getAppBikeConfigSegments } from '@/lib/pg/crud/bikes'
import { getUserIdByEmail } from '@/lib/pg/crud/users'
import { cookies } from 'next/headers'
import Link from 'next/link'

import React from 'react'

export default async function UserBookingStepperPage({ params }) {
   const { segmentList } = await getPageData()
   return (
      <div>
         {' '}
         <StepsPanel step={2} />
         <BikeFiltersStepHandler segmentList={segmentList} />
      </div>
   )
}

async function getPageData(userSessionCookie) {
   const resAppBikesConfigSegments = await getAppBikeConfigSegments()
   const segmentList = await resAppBikesConfigSegments.json()

   return { segmentList }
}
