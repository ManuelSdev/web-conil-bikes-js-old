import React, { useState } from 'react'
import DateStep from './DateStep'
import { set } from 'date-fns'
import { useSelector } from 'react-redux'
import { selectBookingDateRange } from '@/lib/redux/slices/bookingFormSlice'

export default function DateStepHandler({ setStep, cookieDateRange }) {
   const storedDateRange = useSelector(selectBookingDateRange)

   const initialDetaRangeObj = cookieDateRange
      ? stringDateRangeToDateRangeObj(cookieDateRange)
      : storedDateRange
      ? stringDateRangeToDateRangeObj(storedDateRange)
      : { from: '', to: '' }

   const [dateRange, setDateRange] = useState(initialDetaRangeObj)

   const { from, to } = dateRange
   console.log('dateRange ->', dateRange)
   // const isoStringRangeObj = dateRangeObjToISOStringObj(dateRange)
   // const strDateRange = dateRangeToISOString(dateRange)

   const handleNext = () => {
      setStep(1)
   }
   const handlePrev = () => {
      router.push(`/`)
   }

   const handleSelect = (picker) => (selectedDate) => {
      setDateRange({ ...dateRange, [picker]: selectedDate })
   }
   return (
      <DateStep
         from={from}
         to={to}
         handleNext={handleNext}
         handlePrev={handlePrev}
         handleSelect={handleSelect}
      />
   )
}
