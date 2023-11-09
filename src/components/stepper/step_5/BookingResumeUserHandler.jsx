import React, { useEffect } from 'react'
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
import { useLazyCreateCookieQuery } from '@/lib/redux/apiSlices/cookieApi'

export default function BookingResumeUserHandler({ setStep }) {
   const [triggerCookie] = useLazyCreateCookieQuery()

   const bikes = useSelector(selectBikesByUnits)
   const bookingDayPrice = useSelector(selectBookingDayPrice)
   const bookingDuration = useSelector(selectBookingDuration)
   const bookingManagement = useSelector(selectBookingManagement)
   const dateRange = useSelector(selectDateRange)

   const appBikesConfig = useSelector(selectAppBikesConfig)

   //const resumeCookieValue=createBookingResumeCookie({bikes, bookingManagement, dateRange, })
   // triggerCookie({ name: 'bookingResume', value: resumeCookieValue })

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

function createBookingResumeCookie({ bikes, bookingManagement, dateRange }) {
   const bikesData = bikes.map((bike) => ({
      modelId: bike.modelId,
      bikeSize: bike.bikeSize,
   }))
   const managementData = { ...bookingManagement }
   const dateRangeData = { ...dateRange }
   const cookieValue = JSON.stringify({
      bikesData,
      managementData,
      dateRangeData,
   })
   return cookieValue
}
