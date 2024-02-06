'use client'
import React, { useEffect } from 'react'
import SelectedBikeList from './SelectedBikeList'
import MobileBottomAppBar from '@/components/layouts/site/MobileBottomAppBar'
import { useDispatch, useSelector } from 'react-redux'
import {
   bikeRemoved,
   selectBikes,
   selectBikesByUnits,
} from '@/lib/redux/slices/bookingFormSlice'
import { useRouter } from 'next/navigation'
import SelectedBikeListStep from './SelectedBikeListStep'
import { set } from 'date-fns'
import { Button } from '@/components/ui/button'
import Step from '../Step'
import StepperControlButtons from '../StepperControlButtons'

export default function SelectedBikesListHandler({ setStep, ...props }) {
   const dispatch = useDispatch()

   const storedBikesByUnits = useSelector(selectBikesByUnits)
   /*
   useEffect(() => {
      if (storedBikesByUnits.length === 0) setStep(2)
   }, [storedBikesByUnits])
*/
   const handleDeleteButton = (bike) => (ev) => {
      dispatch(bikeRemoved(bike))
   }
   const handleAddBikeButton = (ev) => {
      // setStep(2)
   }

   const renderNextButton = () => (
      <Button className="text-greenCorp">continuar</Button>
   )
   const renderAddBikeButton = () => (
      <Button className="text-greenCorp">atrás</Button>
   )

   return (
      <SelectedBikeList
         bikes={storedBikesByUnits}
         handleDeleteButton={handleDeleteButton}
         handleAddBikeButton={handleAddBikeButton}
         renderNextButton={renderNextButton}
         renderAddBikeButton={renderAddBikeButton}
      />
   )
}
