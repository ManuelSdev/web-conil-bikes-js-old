import { DrawerDemo } from '@/components/drawer/DrawerDemo'
import StepsLine from '@/components/stepper/StepsLine'
import StepsPanel from '@/components/stepper/StepsPanel'
import UserStepper from '@/components/stepper/UserStepper'
import BikeFiltersStepHandler from '@/components/stepper/step_2/BikeFiltersStepHandler'
import AvailableBikeListHandler from '@/components/stepper/step_3/AvailableBikeListHandler'
import { verifySessionCookie } from '@/lib/firebase/admin/verifySessionCookie'
import { getAppBikeConfigSegments } from '@/lib/pg/crud/bikes'
import { getUserIdByEmail } from '@/lib/pg/crud/users'
import { cookies } from 'next/headers'
import Link from 'next/link'

import React from 'react'
import BikesStepHandlerTest from './BikesStepHandlerTest'
import StepsTail from '@/components/stepper/StepsTail'
import BookingManagementHandler from '@/components/stepper/step_4/BookingManagementHandler'
import Step from '@/components/stepper/Step'
import AvailableBikeListHandlerTest from '@/components/stepper/step_3/AvailableBikeListHandlerTest'
import {
   getAppBikeSegments,
   getUserPageAuth,
} from '@/utils/serverFns/serverFns'

export default async function UserBookingStepperPage({ params }) {
   const { segmentList } = await getAppBikeSegments()
   const userAuth = await getUserPageAuth()
   return (
      <div>
         <Step step={2}>
            <BikesStepHandlerTest segmentList={segmentList} />

            <DrawerDemo />
         </Step>
         <AvailableBikeListHandlerTest logged={userAuth.isLogged} />
      </div>
   )
}

async function getPageData(userSessionCookie) {
   const resAppBikesConfigSegments = await getAppBikeConfigSegments()
   const segmentList = await resAppBikesConfigSegments.json()

   return { segmentList }
}
/*
   <StepLayout>
            {' '}
            <BikeFiltersStepHandler segmentList={segmentList} />
         </StepLayout>
         */
