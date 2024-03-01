import Step from '@/components/stepper/Step'

import {
   getAppBikeSegments,
   getUserPageAuth,
} from '@/utils/serverFns/serverFns'
import React from 'react'
import BookingResumeHandler from '@/components/stepper/resume/BookingResumeHandler'

export default async function DashboardResumeStepPage({ params }) {
   const { segmentList } = await getAppBikeSegments()
   const userAuth = await getUserPageAuth()

   console.log('#### userAuth ', userAuth)

   const { name, email, phone, userId: appUserId } = userAuth

   return (
      <Step step={4} childClassName="sm:w-full">
         <BookingResumeHandler isAdmin={true} user={userAuth} />
      </Step>
   )
}
