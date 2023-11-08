import UserStepper from '@/components/stepper/UserStepper'
import { cookies } from 'next/headers'

import React from 'react'

export default function UserBookingStepperPage() {
   const isStepperCookiee = cookies().has('stepperData')
   const stepperDataCookie = cookies().get('stepperData')

   return <UserStepper stepperDataCookie={stepperDataCookie} />
}
