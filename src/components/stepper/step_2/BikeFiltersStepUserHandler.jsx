'use client'
import React from 'react'
import BikeFiltersStep from './BikeFiltersStep'
import {
   useGetAppBikesConfigQuery,
   useGetAvailableSizesQuery,
} from '@/lib/redux/apiSlices/bikeApi'
import { useSelector } from 'react-redux'
import { selectDateRange } from '@/lib/redux/slices/bookingFormSlice'

export default function BikeFiltersStepUserHandler({
   setStep,
   //appBikesConfig,
   // availableSizes,
}) {
   const dateRange = useSelector(selectDateRange)

   const {
      data: appBikesConfig,
      isLoading: isLoadingConfig,
      isSuccess,
      refetch,
      isFetching,
   } = useGetAppBikesConfigQuery()

   const { data: availableSizes, isLoading: isLoadingSizes } =
      useGetAvailableSizesQuery({ dateRange })

   const handleNext = () => {
      // setStep(1)
   }
   const handlePrev = () => {
      // router.push(`/booking?step=1`)
   }
   return isLoadingConfig || isLoadingSizes ? (
      <div>LOADINGGG</div>
   ) : (
      <BikeFiltersStep
         isLoadingSizes={isLoadingSizes}
         availableSizes={availableSizes}
         appBikesConfig={appBikesConfig}
         dateRange={dateRange}
         handleNext={handleNext}
         handlePrev={handlePrev}
         disabled={true}
      />
   )
}
