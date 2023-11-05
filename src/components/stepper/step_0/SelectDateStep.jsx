'use client'
import React, { useState } from 'react'
import RangeDatePicker from '../../layouts/site/RangeDatePicker'
import MobileBottomAppBar from '../../layouts/site/MobileBottomAppBar'
import DatePicker from '../../datepicker/DatePicker'
import {
   dateRangeISOStringObjToString,
   dateRangeObjToISOStringObj,
   stringDateRangeToDateRangeObj,
} from '@/utils/datesFns/createDateRangeString'
import { useRouter } from 'next/navigation'

const FROM = 'from'
const TO = 'to'
const urlParams = (obj) => new URLSearchParams(obj)

export default function SelectDateStep({ dateRange: urlStrDateRange }) {
   const router = useRouter()

   const initialDetaRangeObj = urlStrDateRange
      ? stringDateRangeToDateRangeObj(urlStrDateRange)
      : { from: '', to: '' }
   const [dateRange, setDateRange] = useState(initialDetaRangeObj)
   const { from, to } = dateRange

   const strDateRange = dateRangeToISOString(dateRange)

   const handleNext = () => {
      router.push(`/booking?step=1&date=${strDateRange}`)
   }
   const handlePrev = () => {
      router.push(`/`)
   }

   const handleSelect = (picker) => (selectedDate) => {
      setDateRange({ ...dateRange, [picker]: selectedDate })
   }

   return (
      <div>
         <div>
            <DatePicker date={from} handleSelect={handleSelect(FROM)} />
            <DatePicker date={to} handleSelect={handleSelect(TO)} />
         </div>
         <MobileBottomAppBar
            disabled={!from || !to}
            handleNext={handleNext}
            handlePrev={handlePrev}
         />
      </div>
   )
}

function dateRangeToISOString(dateRange) {
   console.log('dateRange @->', dateRange)
   const isoStringRangeObj = dateRangeObjToISOStringObj(dateRange)
   console.log('isoStringRangeObj ->', isoStringRangeObj)
   const strDateRange = dateRangeISOStringObjToString(isoStringRangeObj)
   console.log('strDateRange ->', strDateRange)
   return strDateRange
}
