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

   const [deleteCookieTrigger] = useLazyDeleteCookieQuery()

   const initialStepperData = createInitialStepperData(stepperDataCookie)

   const { step: initialStep } = initialStepperData

   const [step, setStep] = useState(null)

   //dispatch(dateRangeSelected(dateRange))

   useEffect(() => {
      if (stepperDataCookie) {
         deleteCookieTrigger('stepperData')
         const { dateRange, size, type, range } = initialStepperData
         const dateRangeISOStringObj = stringDateRangeToISOStringObj(dateRange)
         dispatch(dateRangeSelected(dateRangeISOStringObj))
         dispatch(bikeSearchParamsSelected({ size, type, range }))
      }
      //  console.log('useEffect stepperDataCookie ->', stepperDataCookie)
      dispatch(segmentListLoaded(segmentList))
      console.log('useEffect initialStep ->', initialStep)
      setStep(initialStep)
   }, [])
   if (step === null) return <div>loading................................</div>
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
/**
 *
 * @param {object} stepperDataCookie
 * @returns
 * @description Recibe un objeto stepperDataCookie y devuelve un objeto stepperData con el step
 * convertido a number
 */
function createInitialStepperData(stepperDataCookie) {
   if (stepperDataCookie) {
      const stepperData = JSON.parse(stepperDataCookie.value)
      stepperData.step = parseInt(stepperData.step)
      return stepperData
   } else return { step: 0 }
}

function setReduxStore(initialStepperData, dispatch) {
   const { dateRange, size, type, range } = initialStepperData
   const dateRangeISOStringObj = stringDateRangeToISOStringObj(dateRange)
   dispatch(dateRangeSelected(dateRangeISOStringObj))
   dispatch(bikeSearchParamsSelected({ size, type, range }))
}
