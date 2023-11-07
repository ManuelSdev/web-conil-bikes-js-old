'use client'
import React from 'react'
import BikeFiltersStep from './BikeFiltersStep'

export default function PublicStepTwoPageHandler({
   appBikesConfig,
   availableSizes,
   dateRange,
}) {
   const handleNext = () => {
      // setStep(1)
   }
   const handlePrev = () => {
      // router.push(`/booking?step=1`)
   }
   return (
      <BikeFiltersStep
         availableSizes={availableSizes}
         appBikesConfig={appBikesConfig}
         dateRange={dateRange}
         handleNext={handleNext}
         handlePrev={handlePrev}
         disabled={true}
      />
   )
}
