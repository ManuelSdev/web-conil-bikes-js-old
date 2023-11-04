//@ts-nocheck
import {
   getAppBikesConfig,
   getAvailableSizesInRange,
} from '@/lib/pg-promise/crud/bikes'

import React from 'react'
import getConfig from 'next/config'
import BikeFilters from '@/components/stepper/step_1/BikeFilters'
import BikesStep from '@/components/stepper/step_1/BikesStep'
import MobileBottomAppBar from '@/components/layouts/site/MobileBottomAppBar'

export default async function StepOneBookingPage({ searchParams }) {
   console.log(
      '############################################################################### '
         .getConfig
   )
   const {
      from: encodedFromDate,
      to: encodedToDate,
      step,
      date: dateRange,
   } = searchParams

   if (step !== '1') return null
   //Estas ya vienen en formato ISOString al ser decodificadas
   /*
   const fromDate = decodeURIComponent(encodedFromDate)
   const toDate = decodeURIComponent(encodedToDate)
   const dateRange = dateRangeISOStringObjToString({
      from: fromDate,
      to: toDate,
   })
   */
   console.log('## CALL getAvailableSizesInRange FROM STEP 1 ##')
   const res = await getAvailableSizesInRange(dateRange)
   const availableSizes = await res.json()
   const resAppBikesConfig = await getAppBikesConfig()
   const appBikesConfig = await resAppBikesConfig.json()
   console.log('availableSizes IN PAGE STEP 1 @-> ', availableSizes)
   //console.log('dateRange ->', availableSizes)
   return (
      <BikesStep
         dateRange={dateRange}
         //    setStep={setStep}
         availableSizes={availableSizes}
         appBikesConfig={appBikesConfig}
      />
   )
}
