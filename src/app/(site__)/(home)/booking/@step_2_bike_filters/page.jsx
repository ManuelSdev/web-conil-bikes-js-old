import BikeFiltersStep from '@/components/stepper/step_2/BikeFiltersStep'
import BikeFiltersStepPublicHandler from '@/components/stepper/step_2/BikeFiltersStepPublicHandler'
import {
   getAppBikeConfigSegments,
   getAvailableSizesInRange,
} from '@/lib/pg/crud/bikes'
import React from 'react'

export default async function PublicStepTwoBookingPage({ searchParams }) {
   const { step, date: dateRange } = searchParams
   if (step !== '2') return null
   const { availableSizes, segmentList } = await getPageData(dateRange)
   //const { segmentList } = appBikesConfig
   return (
      <BikeFiltersStepPublicHandler
         availableSizes={availableSizes}
         segmentList={segmentList}
         dateRange={dateRange}
      />
   )
}

async function getPageData(dateRange) {
   // //console.log('## CALL getAvailableSizesInRange FROM STEP 1 ##')
   const resAvailableSizes = await getAvailableSizesInRange({ dateRange })
   const availableSizes = await resAvailableSizes.json()
   ////console.log('availableSizes IN PAGE STEP 1 @-> ', availableSizes)

   const resAppBikesConfigSegments = await getAppBikeConfigSegments()
   const segmentList = await resAppBikesConfigSegments.json()

   return { availableSizes, segmentList }
}
