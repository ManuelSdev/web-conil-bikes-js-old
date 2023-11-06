import Stepper from '@/components/stepper/Stepper'
import { cookies } from 'next/headers'

import React from 'react'

export default function BookingProccessPage() {
   const stepperDataCookie = cookies().get('stepperData')
   const stepperData = JSON.parse(stepperDataCookie.value)
   console.log('stepperData -> ', stepperData)
   return <Stepper />
}
