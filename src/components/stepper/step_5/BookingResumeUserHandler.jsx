import React from 'react'
import BookingResumeStep from './BookingResumeStep'
import { Button } from '@/components/ui/button'
import { useSelector } from 'react-redux'
import {
   selectBikesByUnits,
   selectBookingDayPrice,
   selectBookingDuration,
   selectBookingManagement,
   selectDateRange,
} from '@/lib/redux/slices/bookingFormSlice'
import { selectAppBikesConfig } from '@/lib/redux/slices/appConfigSlice'

export default function BookingResumeUserHandler({ setStep }) {
   const bikes = useSelector(selectBikesByUnits)
   const bookingDayPrice = useSelector(selectBookingDayPrice)
   const bookingDuration = useSelector(selectBookingDuration)
   const appBikesConfig = useSelector(selectAppBikesConfig)
   const bookingManagement = useSelector(selectBookingManagement)
   const dateRange = useSelector(selectDateRange)
   const handleBikePrice = getBikeSegmentPrice(appBikesConfig.segmentList)

   const renderPrevButton = () => (
      <Button onClick={() => setStep(4)} className="text-greenCorp">
         atrás
      </Button>
   )
   return (
      <div>
         <BookingResumeStep
            bikes={bikes}
            bookingManagement={bookingManagement}
            dateRange={dateRange}
            bookingDayPrice={bookingDayPrice}
            bookingDuration={bookingDuration}
            handleBikePrice={handleBikePrice}
            renderPrevButton={renderPrevButton}
         />
      </div>
   )
}

function getBikeSegmentPrice(segmentList) {
   return (bike) => {
      const segment = segmentList.filter(
         (segment) =>
            segment.modelType === bike.modelType &&
            segment.modelRange === bike.modelRange
      )
      const [{ segmentPrice }] = segment
      return segmentPrice
   }
}
