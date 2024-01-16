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
import DateStep from './DateStep'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Step from '../Step'

const FROM = 'from'
const TO = 'to'
const urlParams = (obj) => new URLSearchParams(obj)

export default function DateStepPublicHandler({ dateRange: urlStrDateRange }) {
   const router = useRouter()

   const initialDetaRangeObj = urlStrDateRange
      ? stringDateRangeToDateRangeObj(urlStrDateRange)
      : { from: '', to: '' }
   const [dateRange, setDateRange] = useState(initialDetaRangeObj)
   const { from, to } = dateRange
   // const isoStringRangeObj = dateRangeObjToISOStringObj(dateRange)
   const strDateRange = dateRangeToISOString(dateRange)

   const handleSelect = (picker) => (selectedDate) => {
      setDateRange({ ...dateRange, [picker]: selectedDate })
   }
   const renderNextButton = () => (
      <Link href={`/booking?step=1&date=${strDateRange}`}>
         <Button disabled={!from || !to} className="text-greenCorp">
            continuar
         </Button>
      </Link>
   )
   const renderPrevButton = () => (
      <Link href={`/`}>
         <Button className="text-greenCorp">atrás</Button>
      </Link>
   )
   return (
      <Step
         renderNextButton={renderNextButton}
         renderPrevButton={renderPrevButton}
      >
         <DateStep
            from={from}
            to={to}
            handleSelect={handleSelect}
            renderNextButton={renderNextButton}
            renderPrevButton={renderPrevButton}
         />
      </Step>
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
