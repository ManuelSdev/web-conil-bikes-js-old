'use client'
import React from 'react'
import AvailableBikesList from './AvailableBikeList'
import { useGetAvailableBikesQuery } from '@/lib/redux/apiSlices/bikeApi'
import { useDispatch, useSelector } from 'react-redux'
import {
   bikeSelected,
   selectBikesearchParams,
   selectDateRange,
} from '@/lib/redux/slices/bookingFormSlice'
import { Button } from '@/components/ui/button'
import AvailableBikeListStep from './AvailableBikeListStep'

export default function AvailableBikeListUserHandler({ setStep }) {
   const dateRange = useSelector(selectDateRange)
   const bikeSearchParams = useSelector(selectBikesearchParams)
   const {
      data: availableBikes,
      isLoading,
      isSuccess,
      refetch,
      isFetching,
   } = useGetAvailableBikesQuery({ dateRange, ...bikeSearchParams })

   const dispatch = useDispatch()

   const handleSelect = (bike) => (ev) => {
      console.log('bike ->', bike)
      dispatch(bikeSelected(bike))
      setStep(1)
   }
   const handleNext = () => {
      // setStep(1)
   }
   const handlePrev = () => {
      // router.push(`/booking?step=1`)
   }
   return isLoading ? (
      <div>LOADINGFGGG</div>
   ) : (
      <AvailableBikeListStep
         isLogged={true}
         availableBikes={availableBikes}
         renderSelectBikeButton={(bike) => (
            <Button onClick={handleSelect(bike)}>Seleccionar</Button>
         )}
         handleNext={handleNext}
         handlePrev={handlePrev}
         disabled={true}
      />
   )
}
