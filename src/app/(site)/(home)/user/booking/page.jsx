import UserStepper from '@/components/stepper/UserStepper'
import { cookies } from 'next/headers'

import React from 'react'

export default function UserBookingStepperPage() {
   const isStepperCookiee = cookies().has('stepperData')
   const stepperDataCookie = cookies().get('stepperData')
   const stepperData = isStepperCookiee
      ? JSON.parse(stepperDataCookie.value)
      : { step: 0, dateRange: null }
   console.log('stepperData -> ', stepperData)

   return (
      <UserStepper
         stepperData={stepperData}
         isStepperCookiee={isStepperCookiee}
      />
   )
}
