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
   selectSegmentList,
} from '@/lib/redux/slices/bookingFormSlice'
import { dateRangeISOStringObjToString } from '@/utils/datesFns/createDateRangeString'
import { Button } from '@/components/ui/button'
import Step from '../Step'
import SpinnerLine from '@/components/common/SpinnerLine'

export default function BikeFiltersStepUserHandler({
   setStep,
   ...props
   //appBikesConfig,
   // availableSizes,
}) {
   console.log('BikeFiltersStepUserHandler @@@->')
   const dispatch = useDispatch()
   const strDateRangeObj = useSelector(selectDateRange)
   const storedBikesByUnits = useSelector(selectBikesByUnits)

   const dateRange = dateRangeISOStringObjToString(strDateRangeObj)
   const segmentList = useSelector(selectSegmentList)
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
   return (
      <Step
         renderShowBikesButton={renderShowBikesButton}
         renderPrevButton={renderPrevButton}
         {...props}
      >
         {/*<SpinnerLine />*/}
         <BikeFiltersStep
            isLoadingSizes={isLoadingSizes}
            availableSizes={availableSizes}
            segmentList={segmentList}
            dateRange={dateRange}
            disabled={true}
            renderShowBikesButton={renderShowBikesButton}
            renderPrevButton={renderPrevButton}
         />
      </Step>
   )
}
