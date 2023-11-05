import 'server-only'

import React from 'react'
import BikesStep from '@/components/stepper/step_1/BikesStep'
import {
   getAppBikesConfig,
   getAvailableSizesInRange,
} from '@/lib/pg-promise/crud/bikes'
export default async function StepOnePage({ searchParams }) {
   const { step, date: dateRange } = searchParams
   if (step !== '1') return null

   const { availableSizes, appBikesConfig } = await getPageData(dateRange)
   //todo: refactor para meter aquí bikestep usando solo server
   return (
      <BikesStep
         dateRange={dateRange}
         //    setStep={setStep}
         availableSizes={availableSizes}
         appBikesConfig={appBikesConfig}
      />
   )
}

async function getPageData(dateRange) {
   //  console.log('## CALL getAvailableSizesInRange FROM STEP 1 ##')
   const resAvailableSizes = await getAvailableSizesInRange(dateRange)
   const availableSizes = await resAvailableSizes.json()
   // console.log('availableSizes IN PAGE STEP 1 @-> ', availableSizes)

   const resAppBikesConfig = await getAppBikesConfig()
   const appBikesConfig = await resAppBikesConfig.json()

   return { availableSizes, appBikesConfig }
}
