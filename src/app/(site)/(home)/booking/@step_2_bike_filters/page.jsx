import BikeFiltersStep from '@/components/stepper/step_2/BikeFiltersStep'
import BikeFiltersStepPublicHandler from '@/components/stepper/step_2/BikeFiltersStepPublicHandler'
import {
   getAppBikesConfig,
   getAvailableSizesInRange,
} from '@/lib/pg-promise/crud/bikes'
import React from 'react'

export default async function PublicStepTwoBookingPage({ searchParams }) {
   const { step, date: dateRange } = searchParams
   if (step !== '2') return null
   const { availableSizes, appBikesConfig } = await getPageData(dateRange)

   return (
      <BikeFiltersStepPublicHandler
         availableSizes={availableSizes}
         appBikesConfig={appBikesConfig}
         dateRange={dateRange}
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
