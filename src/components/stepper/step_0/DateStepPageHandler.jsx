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
import DateStep from '../../../app/(site)/bookingg/date/DateStep'

const FROM = 'from'
const TO = 'to'
const urlParams = (obj) => new URLSearchParams(obj)

export default function DateStepPageHandler({ dateRange: urlStrDateRange }) {
   const router = useRouter()

   const initialDetaRangeObj = urlStrDateRange
      ? stringDateRangeToDateRangeObj(urlStrDateRange)
      : { from: '', to: '' }
   const [dateRange, setDateRange] = useState(initialDetaRangeObj)
   const { from, to } = dateRange
   // const isoStringRangeObj = dateRangeObjToISOStringObj(dateRange)
   const strDateRange = dateRangeToISOString(dateRange)

   const handleNext = () => {
      router.push(`/booking?step=1&date=${strDateRange}`)
      // router.push(`/booking?${urlParams({ step: 1, ...isoStringRangeObj })}`)
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

function dateRangeToISOString(dateRange) {
   //console.log('dateRange @->', dateRange)
   const isoStringRangeObj = dateRangeObjToISOStringObj(dateRange)
   //console.log('isoStringRangeObj ->', isoStringRangeObj)
   const strDateRange = dateRangeISOStringObjToString(isoStringRangeObj)
   //console.log('strDateRange ->', strDateRange)
   return strDateRange
}
