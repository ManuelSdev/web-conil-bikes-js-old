'use client'
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
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import StepperControlButtons from '../StepperControlButtons'
import Step from '../Step'

export default function DateStepHandler({
   setStep,
   cookieDateRange,
   ...props
}) {
   console.log('DateStepUserHandler @@@->')
   const dispatch = useDispatch()
   const storedDateRange = useSelector(selectDateRange)
   const dateRangeObj = dateRangeISOStrObjToDateRangeObjs(storedDateRange)
   const { from, to } = dateRangeObj

   const handleSelect = (picker) => (selectedDate) => {
      //   setDateRange({ ...dateRange, [picker]: selectedDate })
      const newDateRangeObj = { ...dateRangeObj, [picker]: selectedDate }
      const isoStringRangeObj = dateRangeObjToISOStringObj(newDateRangeObj)
      const strDateRange = dateRangeObjToISOString(newDateRangeObj)
      dispatch(dateRangeSelected(isoStringRangeObj))
   }

   return (
      <DateStep
         from={from}
         to={to}
         linkDisabled={!from || !to}
         handleSelect={handleSelect}
      />
   )
}

function dateRangeObjToISOString(dateRange) {
   //console.log('dateRange @->', dateRange)
   const isoStringRangeObj = dateRangeObjToISOStringObj(dateRange)
   // console.log('isoStringRangeObj ->', isoStringRangeObj)
   const strDateRange = dateRangeISOStringObjToString(isoStringRangeObj)
   // console.log('strDateRange ->', strDateRange)
   return strDateRange
}
