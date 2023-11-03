'use client'
import React, { useState } from 'react'
import RangeDatePicker from '../layouts/site/RangeDatePicker'
import MobileBottomAppBar from '../layouts/site/MobileBottomAppBar'
import DatePicker from '../datepicker/DatePicker'
import {
   dateRangeISOStringObjToString,
   dateRangeObjToISOStringObj,
} from '@/utils/datesFns/createDateRangeString'

const FROM = 'from'
const TO = 'to'
const urlParams = (obj) => new URLSearchParams(obj)

export default function StepZero({ step }) {
   const [open, setopen] = useState(false)
   const [dateRange, setDateRange] = useState({ from: '', to: '' })
   const { from, to } = dateRange

   const handleSelect = (picker) => (selectedDate) => {
      setDateRange({ ...dateRange, [picker]: selectedDate })
   }
   const isoStringRangeObj = dateRangeObjToISOStringObj(dateRange)

   const strDateRange = dateRangeISOStringObjToString(isoStringRangeObj)
   console.log('StepOne *********** strDateRange -> ', strDateRange)
   return (
      <div>
         <div>
            <DatePicker date={from} handleSelect={handleSelect(FROM)} />
            <DatePicker date={to} handleSelect={handleSelect(TO)} />
         </div>
         <MobileBottomAppBar step={step} dateRange={strDateRange} />
      </div>
   )
}
