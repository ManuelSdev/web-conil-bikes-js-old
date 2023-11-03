'use client'

import BikeFilters from './BikeFilters'
import { useSelector } from 'react-redux'
import { selectBookingBikes } from '@/lib/redux/slices/bookingFormSlice'
import SelectedBikeList from './SelectedBikeList'
import { useState } from 'react'
export default function BikesStep(props) {
   const selectedBikes = useSelector(selectBookingBikes)
   console.log('selectedBikes ->', selectedBikes.length)
   const [subStep, setSubStep] = useState(selectedBikes.length ? 0 : 1)
   return subStep === 0 ? (
      <SelectedBikeList
         selectedBikes={selectedBikes}
         dateRange={props.dateRange}
         setSubStep={setSubStep}
      />
   ) : (
      <BikeFilters {...props} />
   )
}
