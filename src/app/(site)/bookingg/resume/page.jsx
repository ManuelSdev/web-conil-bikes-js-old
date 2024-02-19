import Step from '@/components/stepper/Step'
import StepsLine from '@/components/stepper/StepsLine'
import StepsPanel from '@/components/stepper/StepsPanel'
import UserStepper from '@/components/stepper/UserStepper'

import { verifySessionCookie } from '@/lib/firebase/admin/verifySessionCookie'
import { getAppBikeConfigSegments } from '@/lib/pg/crud/bikes'
import { getUserIdByEmail } from '@/lib/pg/crud/users'
import { cookies } from 'next/headers'
import Link from 'next/link'
import {
   getAppBikeSegments,
   getUserPageAuth,
} from '@/utils/serverFns/serverFns'
import React from 'react'
import BookingResumeHandler from './BookingResumeHandler'

export default async function UserBookingStepperPage({ params }) {
   const { segmentList } = await getAppBikeSegments()
   const userAuth = await getUserPageAuth()
   console.log('userAuth ', userAuth)
   const { name, email, phone, userId: appUserId } = userAuth
   return (
      <Step step={4} childClassName="sm:w-full">
         <BookingResumeHandler user={userAuth} />
      </Step>
   )
}
