'use client'
import React from 'react'
import AvailableBikesList from './AvailableBikeList'
import {
   useGetAvailableBikesQuery,
   useLazyGetAvailableBikesQuery,
} from '@/lib/redux/apiSlices/bikeApi'
import { useDispatch, useSelector } from 'react-redux'
import {
   bikeSelected,
   selectBikeSearchParams,
   selectDateRange,
} from '@/lib/redux/slices/bookingFormSlice'
import { Button } from '@/components/ui/button'
import AvailableBikeListStep from './AvailableBikeListStep'
import { dateRangeISOStringObjToString } from '@/utils/datesFns/createDateRangeString'
import Step from '../Step'
import StepperControlButtons from '../StepperControlButtons'

export default function AvailableBikeListHandler({ setStep, ...props }) {
   //console.log('AvailableBikeListUserHandler @@@->')
   const storedDateRange = useSelector(selectDateRange)
   const dateRange = dateRangeISOStringObjToString(storedDateRange)
   const bikeSearchParams = useSelector(selectBikeSearchParams)
   /*
   const {
      data: availableBikes,
      isLoading,
      isSuccess,
      refetch,
      isFetching,
   } = useGetAvailableBikesQuery({ dateRange, ...bikeSearchParams })
   */
   const [
      triggerBikes,
      { data: availableBikes, isFetching, isSuccess, unsubscribe },
      lastPromiseInfoBikes,
   ] = useLazyGetAvailableBikesQuery()

   ////console.log('availableBikes ->', availableBikes)
   const dispatch = useDispatch()

   const handleSelect = (bike) => (ev) => {
      ////console.log('bike ->', bike)
      dispatch(bikeSelected(bike))
      // setStep(1)
   }
   const renderPrevButton = () => (
      <Button
      //   onClick={() => setStep(2)} className="text-greenCorp"
      >
         atrás
      </Button>
   )
   //console.log('availableBikes _<<<<<', availableBikes)
   return isFetching ? (
      <div>LOADING availableBikes EN @@@ USER AvailableBikeListStep @@@</div>
   ) : availableBikes ? (
      <AvailableBikeListStep
         isLogged={true}
         availableBikes={availableBikes}
         renderSelectBikeButton={(bike) => (
            <Button onClick={handleSelect(bike)}>Seleccionar</Button>
         )}
         renderPrevButton={renderPrevButton}
      />
   ) : (
      <div>NADA AUN</div>
   )
}
