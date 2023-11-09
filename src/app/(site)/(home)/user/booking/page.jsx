import UserStepper from '@/components/stepper/UserStepper'
import { getAppBikesConfig } from '@/lib/pg-promise/crud/bikes'
import { cookies } from 'next/headers'

import React from 'react'

export default async function UserBookingStepperPage() {
   const isStepperCookiee = cookies().has('stepperData')
   const stepperDataCookie = cookies().get('stepperData')
   //const bookingResumeCookie = cookies().get('bookingResume')

   const res = await getAppBikesConfig()
   const appBikesConfig = await res.json()
   return (
      <UserStepper
         stepperDataCookie={stepperDataCookie}
         //   bookingResumeCookie={bookingResumeCookie}
         appBikesConfig={appBikesConfig}
      />
   )
}
