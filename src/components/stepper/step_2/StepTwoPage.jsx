import React from 'react'
import BikeFiltersForm from './BikeFiltersForm'
import MobileBottomAppBar from '@/components/layouts/site/MobileBottomAppBar'
import BikeFiltersStep from './BikeFiltersStep'

export default async function StepTwoPage({ searchParams }) {
   const { step, date: dateRange } = searchParams
   if (step !== '2') return null
   const { availableSizes, appBikesConfig } = await getPageData(dateRange)

   const handleNext = () => {
      // setStep(1)
   }
   const handlePrev = () => {
      // router.push(`/booking?step=1`)
   }
   return (
      <div>
         <BikeFiltersStep
            availableSizes={availableSizes}
            appBikesConfig={appBikesConfig}
            dateRange={dateRange}
            handleNext={handleNext}
            handlePrev={handlePrev}
            disabled={true}
         />
      </div>
   )
}

async function getPageData(dateRange) {
   // //console.log('## CALL getAvailableSizesInRange FROM STEP 1 ##')
   const resAvailableSizes = await getAvailableSizesInRange(dateRange)
   const availableSizes = await resAvailableSizes.json()
   ////console.log('availableSizes IN PAGE STEP 1 @-> ', availableSizes)

   const resAppBikesConfig = await getAppBikesConfig()
   const appBikesConfig = await resAppBikesConfig.json()

   return { availableSizes, appBikesConfig }
}
