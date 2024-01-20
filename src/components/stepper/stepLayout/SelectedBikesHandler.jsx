'use client'
import React, { useEffect } from 'react'

import MobileBottomAppBar from '@/components/layouts/site/MobileBottomAppBar'
import { useDispatch, useSelector } from 'react-redux'
import {
   bikeRemoved,
   selectBikes,
   selectBikesByUnits,
} from '@/lib/redux/slices/bookingFormSlice'
import { useRouter } from 'next/navigation'
import { set } from 'date-fns'
import { Button } from '@/components/ui/button'
import SelectedBikeList from '../step_1/SelectedBikeList'

export default function SelectedBikesHandler({ setStep, ...props }) {
   const dispatch = useDispatch()

   const storedBikesByUnits = useSelector(selectBikesByUnits)

   useEffect(() => {
      //if (storedBikesByUnits.length === 0) setStep(2)
   }, [storedBikesByUnits])

   const handleDeleteButton = (bike) => (ev) => {
      dispatch(bikeRemoved(bike))
   }
   const handleAddBikeButton = (ev) => {
      //  setStep(2)
   }

   const renderNextButton = () => (
      <Button
         // onClick={() => setStep(4)}
         className="text-greenCorp"
      >
         continuar
      </Button>
   )
   const renderPrevButton = () => (
      <Button
         //  onClick={() => setStep(0)}
         className="text-greenCorp"
      >
         atrás
      </Button>
   )

   return (
      <SelectedBikeList
         bikes={storedBikesByUnits}
         handleDeleteButton={handleDeleteButton}
         handleAddBikeButton={handleAddBikeButton}
         renderNextButton={renderNextButton}
         renderPrevButton={renderPrevButton}
      />
   )
}
