'use client'
import React, { useEffect, useState } from 'react'
import DateStepHandler from './step_0/DateStepHandler'
import { useLazyDeleteCookieQuery } from '@/lib/redux/apiSlices/cookieApi'
import { useDispatch } from 'react-redux'
import { dateRangeSelected } from '@/lib/redux/slices/bookingFormSlice'

export default function UserStepper({ isStepperCookiee, stepperData }) {
   const dispatch = useDispatch()
   const [deleteCookieTrigger] = useLazyDeleteCookieQuery()
   const { step: initialStep, dateRange } = stepperData
   //dispatch(dateRangeSelected(dateRange))
   useEffect(() => {
      if (isStepperCookiee) deleteCookieTrigger('stepperData')
   }, [])

   //  console.log('cookieStepperData -> ', cookieStepperData)
   const [step, setStep] = useState(initialStep === '1b' ? 2 : initialStep)
   console.log('step ********************-> ', step)
   return (
      <div>
         {step === 0 && (
            <DateStepHandler setStep={setStep} cookieDateRange={dateRange} />
         )}
         {step === 1 && <div>Step 1 selected bikes</div>}
         {step === 2 && <div>Step 2 bikes filters</div>}
         {step === 3 && <div>Step 3 available bike list</div>}
         {step === 4 && <div>Step 4 management booking form</div>}
         {step === 5 && <div>Step 5 resume</div>}
      </div>
   )
}
