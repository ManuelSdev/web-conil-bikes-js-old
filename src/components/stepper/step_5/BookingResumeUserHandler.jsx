import React, { use, useEffect } from 'react'
import BookingResumeStep from './BookingResumeStep'
import { Button } from '@/components/ui/button'
import { useSelector } from 'react-redux'
import {
   selectBikes,
   selectBikesByUnits,
   selectBookingData,
   selectBookingDuration,
   selectBookingManagement,
   selectDateRange,
} from '@/lib/redux/slices/bookingFormSlice'
import { selectAppBikesConfig } from '@/lib/redux/slices/appConfigSlice'
import { useLazyCreateCookieQuery } from '@/lib/redux/apiSlices/cookieApi'
import { useCreateBookingMutation } from '@/lib/redux/apiSlices/bookingApi'
import { dateRangeISOStringObjToString } from '@/utils/datesFns/createDateRangeString'

export default function BookingResumeUserHandler({ setStep, user }) {
   const [triggerCookie] = useLazyCreateCookieQuery()

   const storedBookingData = useSelector(selectBookingData)

   const bookingResumeData = {
      ...user,
      ...storedBookingData,
      isAdmin: true,
   }
   const {
      bikes,
      userId,
      isAdmin,
      dateRange,
      address,
      totalPrice: price,
      email,
      delivery,
      pickup,
      duration,
   } = bookingResumeData

   const strDateRange = dateRangeISOStringObjToString(dateRange)

   const queryData = {
      bikes,
      userId,
      isAdmin,
      dateRange: strDateRange,
      address,
      price,
      email,
      delivery,
      pickup,
      duration,
   }

   const [
      createBooking,
      {
         // status,
         //  isUninitialized,
         isLoading,
         isSuccess,
         data,
         isError,
         reset,
      },
   ] = useCreateBookingMutation({ fixedCacheKey: 'createBooking-key' })

   const handleSubmit = async (event) => {
      event.preventDefault()
      const res = await createBooking(queryData).unwrap()
      console.log('res ->', res)
   }
   const renderPrevButton = () => (
      <Button onClick={() => setStep(4)} className="text-greenCorp">
         atrás
      </Button>
   )
   const renderSubmitButton = () => (
      <Button type="submit" onClick={handleSubmit}>
         Confirmar reserva
      </Button>
   )
   return (
      <div>
         <BookingResumeStep
            renderPrevButton={renderPrevButton}
            renderSubmitButton={renderSubmitButton}
            {...bookingResumeData}
         />
      </div>
   )
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
