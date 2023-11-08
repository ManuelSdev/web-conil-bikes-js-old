import MobileBottomAppBar from '@/components/layouts/site/MobileBottomAppBar'
import React from 'react'
import BikeFiltersForm from './BikeFiltersForm'

export default function BikeFiltersStep({
   isLoadingSizes,
   handleNext,
   handlePrev,
   disabled,
   dateRange,
   availableSizes,
   appBikesConfig,
}) {
   return (
      <div>
         <BikeFiltersForm
            isLoadingSizes={isLoadingSizes}
            availableSizes={availableSizes}
            appBikesConfig={appBikesConfig}
            dateRange={dateRange}
         />
         <MobileBottomAppBar
            disabled={disabled}
            handleNext={handleNext}
            handlePrev={handlePrev}
         />
      </div>
   )
}
