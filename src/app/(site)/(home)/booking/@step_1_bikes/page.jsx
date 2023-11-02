//@ts-nocheck
import SelectBikesStep from '@/components/stepper/step_1/SelectBikesStep'
import { getAvailableBikeSizesInRange } from '@/lib/pg-promise/crud/bikes'

import {
   createDateRangeString,
   dateRangeISOStringObjToString,
   dateRangeObjToISOStringObj,
} from '@/utils/datesFns/createDateRangeString'
import React from 'react'
import getConfig from 'next/config'

export default async function StepOneBookingPage({ searchParams }) {
   console.log(
      '############################################################################### '
         .getConfig
   )
   const { from: encodedFromDate, to: encodedToDate, step } = searchParams

   if (step !== '1') return null
   //Estas ya vienen en formato ISOString al ser decodificadas

   const fromDate = decodeURIComponent(encodedFromDate)
   const toDate = decodeURIComponent(encodedToDate)
   const dateRange = dateRangeISOStringObjToString({
      from: fromDate,
      to: toDate,
   })
   console.log('## CALL getAvailableBikeSizesInRange FROM STEP 1 ##')
   const res = await getAvailableBikeSizesInRange(dateRange)
   const { availableBikeSizes } = await res.json()
   console.log('availableBikeSizes IN PAGE STEP 1 @-> ', availableBikeSizes)
   //console.log('dateRange ->', availableBikeSizes)
   return (
      <SelectBikesStep
         dateRange={dateRange}
         availableBikeSizes={availableBikeSizes}
      />
   )
}
