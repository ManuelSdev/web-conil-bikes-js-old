'use client'
import React, { useEffect } from 'react'
import SelectedBikeList from './SelectedBikeList'
import MobileBottomAppBar from '@/components/layouts/site/MobileBottomAppBar'
import { useSelector } from 'react-redux'
import {
   selectBikes,
   selectBikesByUnits,
} from '@/lib/redux/slices/bookingFormSlice'
import { useRouter } from 'next/navigation'
import SelectedBikeListStep from './SelectedBikeListStep'

export default function SelectedBikesStepUserHandler({ setStep }) {
   const storedBikesByUnits = useSelector(selectBikesByUnits)
   useEffect(() => {
      if (storedBikesByUnits.length === 0) setStep(2)
   }, [])

   console.log('storedBikesByUnits ->', storedBikesByUnits)
   const router = useRouter()

   return <SelectedBikeListStep bikes={storedBikesByUnits} />
}
