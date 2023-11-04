'use client'

import BikeFilters from './BikeFilters'
import { useSelector } from 'react-redux'
import { selectBookingBikes } from '@/lib/redux/slices/bookingFormSlice'
import SelectedBikeList from './SelectedBikeList'
import { useState } from 'react'
import MobileBottomAppBar from '@/components/layouts/site/MobileBottomAppBar'
import { useRouter } from 'next/navigation'
export default function BikesStep(props) {
   const router = useRouter()
   const { dateRange } = props
   const selectedBikes = useSelector(selectBookingBikes)
   console.log('selectedBikes ->', selectedBikes.length)
   const [subStep, setSubStep] = useState(selectedBikes.length ? 0 : 1)

   const handleNext = () => {
      router.push(`/booking?step=2&date=${dateRange}`)
   }
   const handlePrev = () => {
      router.push(`/booking?step=0&date=${dateRange}`)
   }
   return (
      <div>
         {subStep === 0 ? (
            <SelectedBikeList
               selectedBikes={selectedBikes}
               dateRange={dateRange}
               setSubStep={setSubStep}
            />
         ) : (
            <BikeFilters {...props} />
         )}
         <MobileBottomAppBar
            disabled={!selectedBikes.length}
            handleNext={handleNext}
            handlePrev={handlePrev}
         />
      </div>
   )
}
