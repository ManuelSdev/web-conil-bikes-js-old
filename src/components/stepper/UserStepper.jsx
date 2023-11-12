'use client'
import React, { useEffect, useState } from 'react'
import { useLazyDeleteCookieQuery } from '@/lib/redux/apiSlices/cookieApi'
import { useDispatch } from 'react-redux'
import {
   bikeSearchParamsSelected,
   dateRangeSelected,
   segmentListLoaded,
} from '@/lib/redux/slices/bookingFormSlice'
import { stringDateRangeToISOStringObj } from '@/utils/datesFns/createDateRangeString'

import DateStepUserHandler from './step_0/DateStepUserHandler'
import SelectedBikesStepUserHandler from './step_1/SelectedBikesStepUserHandler'
import BikeFiltersStepUserHandler from './step_2/BikeFiltersStepUserHandler'
import AvailableBikeListUserHandler from './step_3/AvailableBikeListUserHandler'
import BookingManagementUserHandler from './step_4/BookingManagementUserHandler'
import BookingResumeUserHandler from './step_5/BookingResumeUserHandler'

export default function UserStepper({ user, stepperDataCookie, segmentList }) {
   console.log('UserStepper @@@->')
   const dispatch = useDispatch()

   //console.log('UserStepper segmentList ->', segmentList)

   dispatch(segmentListLoaded(segmentList))

   const [deleteCookieTrigger] = useLazyDeleteCookieQuery()

   const initialStepperData = createInitialStepperData(stepperDataCookie)

   const { step: initialStep, dateRange } = initialStepperData

   const [step, setStep] = useState(0)

   //dispatch(dateRangeSelected(dateRange))

   useEffect(() => {
      if (stepperDataCookie) {
         deleteCookieTrigger('stepperData')
         setReduxStore(initialStepperData, dispatch)
      }
      //  console.log('useEffect stepperDataCookie ->', stepperDataCookie)

      setStep(initialStep)
   }, [])

   return (
      <div>
         {step === 0 && <DateStepUserHandler setStep={setStep} />}
         {step === 1 && <SelectedBikesStepUserHandler setStep={setStep} />}
         {step === 2 && <BikeFiltersStepUserHandler setStep={setStep} />}
         {step === 3 && (
            <AvailableBikeListUserHandler
               initialStepperData={initialStepperData}
               setStep={setStep}
            />
         )}
         {step === 4 && <BookingManagementUserHandler setStep={setStep} />}
         {step === 5 && (
            <BookingResumeUserHandler setStep={setStep} user={user} />
         )}
      </div>
   )
}

function createInitialStepperData(stepperDataCookie) {
   if (stepperDataCookie) {
      const stepperData = JSON.parse(stepperDataCookie.value)
      stepperData.step = parseInt(stepperData.step)
      return stepperData
   } else return { step: 0, dateRange: '' }
}

function setReduxStore(initialStepperData, dispatch) {
   const { dateRange, size, type, range } = initialStepperData
   const dateRangeISOStringObj = stringDateRangeToISOStringObj(dateRange)
   dispatch(dateRangeSelected(dateRange))
   dispatch(bikeSearchParamsSelected({ size, type, range }))
}
