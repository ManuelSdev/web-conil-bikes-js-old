import React, { useEffect, useState } from 'react'
import DateStep from './DateStep'
import { useDispatch, useSelector } from 'react-redux'
import {
   dateRangeSelected,
   selectDateRange,
} from '@/lib/redux/slices/bookingFormSlice'
import {
   dateRangeISOStrObjToDateRangeObjs,
   dateRangeISOStringObjToString,
   dateRangeObjToISOStringObj,
   stringDateRangeToDateRangeObj,
} from '@/utils/datesFns/createDateRangeString'

export default function DateStepUserHandler({ setStep, cookieDateRange }) {
   const dispatch = useDispatch()
   const storedDateRange = useSelector(selectDateRange)
   //const dateRangeObj = dateRangeISOStrObjToDateRangeObjs(storedDateRange)
   //  const { from, to } = dateRangeObj

   const dateRange = storedDateRange
      ? stringDateRangeToDateRangeObj(storedDateRange)
      : { from: '', to: '' }
   const { from, to } = dateRange
   /*
   const initialDetaRangeObj = cookieDateRange
      ? stringDateRangeToDateRangeObj(cookieDateRange)
      : storedDateRange
      ? stringDateRangeToDateRangeObj(storedDateRange)
      : { from: '', to: '' }
*/
   // const [dateRange, setDateRange] = useState(initialDetaRangeObj)

   // const { from, to } = dateRange
   // console.log('dateRange ->', dateRange)
   // const strDateRange = dateRangeObjToISOString(dateRange)

   const handleNext = () => {
      setStep(1)
   }
   const handlePrev = () => {
      router.push(`/`)
   }

   const handleSelect = (picker) => (selectedDate) => {
      //   setDateRange({ ...dateRange, [picker]: selectedDate })
      const newDateRangeObj = { ...dateRange, [picker]: selectedDate }
      const isoStringRangeObj = dateRangeObjToISOStringObj(newDateRangeObj)
      const strDateRange = dateRangeObjToISOString(newDateRangeObj)
      dispatch(dateRangeSelected(strDateRange))
   }
   /*
   useEffect(() => {
      return () => {
        
      }
   }, [])
*/
   console.log('DateStepUserHandler @@@@@@@->')
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

function dateRangeObjToISOString(dateRange) {
   console.log('dateRange @->', dateRange)
   const isoStringRangeObj = dateRangeObjToISOStringObj(dateRange)
   console.log('isoStringRangeObj ->', isoStringRangeObj)
   const strDateRange = dateRangeISOStringObjToString(isoStringRangeObj)
   console.log('strDateRange ->', strDateRange)
   return strDateRange
}
