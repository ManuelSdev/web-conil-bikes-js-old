'use client'
import React from 'react'
import BikeFiltersStep from './BikeFiltersStep'
import {
   useGetAppBikesConfigQuery,
   useGetAvailableSizesQuery,
} from '@/lib/redux/apiSlices/bikeApi'
import { useDispatch, useSelector } from 'react-redux'
import {
   bikeSearchParamsSelected,
   selectBikesByUnits,
   selectDateRange,
} from '@/lib/redux/slices/bookingFormSlice'
import { dateRangeISOStringObjToString } from '@/utils/datesFns/createDateRangeString'
import { Button } from '@/components/ui/button'

export default function BikeFiltersStepUserHandler({
   setStep,
   //appBikesConfig,
   // availableSizes,
}) {
   const dispatch = useDispatch()
   const strDateRangeObj = useSelector(selectDateRange)
   const storedBikesByUnits = useSelector(selectBikesByUnits)

   const dateRange = dateRangeISOStringObjToString(strDateRangeObj)

   console.log('dateRange BikeFiltersStepUserHandler -> ', dateRange)

   const {
      data: appBikesConfig,
      isLoading: isLoadingConfig,
      isSuccess,
      refetch,
      isFetching,
   } = useGetAppBikesConfigQuery()

   const { data: availableSizes, isLoading: isLoadingSizes } =
      useGetAvailableSizesQuery({ dateRange })

   const renderShowBikesButton = ({ size, type, range }) => (
      <Button
         onClick={() => {
            dispatch(bikeSearchParamsSelected({ size, type, range }))
            setStep(3)
         }}
         disabled={!range}
         //type="submit"
      >
         MOSTRAR BICICLETAS
      </Button>
   )
   const renderPrevButton = () => (
      <Button
         onClick={() => setStep(storedBikesByUnits.length === 0 ? 0 : 1)}
         className="text-greenCorp"
      >
         atrás
      </Button>
   )
   return isLoadingConfig || isLoadingSizes ? (
      <div>LOADINGGG BikeFiltersStep #########</div>
   ) : (
      <BikeFiltersStep
         isLoadingSizes={isLoadingSizes}
         availableSizes={availableSizes}
         appBikesConfig={appBikesConfig}
         dateRange={dateRange}
         disabled={true}
         renderShowBikesButton={renderShowBikesButton}
         renderPrevButton={renderPrevButton}
      />
   )
}
