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

export default function DateStepUserHandler({
   setStep,
   cookieDateRange,
   ...props
}) {
   //console.log('DateStepUserHandler @@@->')
   const dispatch = useDispatch()
   const storedDateRange = useSelector(selectDateRange)
   const dateRangeObj = dateRangeISOStrObjToDateRangeObjs(storedDateRange)
   const { from, to } = dateRangeObj
   /*
   const dateRange = storedDateRange
      ? stringDateRangeToDateRangeObj(storedDateRange)
      : { from: '', to: '' }
  //console.log('dateRange ->', dateRange)
   const { from, to } = dateRange
   */
   /*
   const initialDetaRangeObj = cookieDateRange
      ? stringDateRangeToDateRangeObj(cookieDateRange)
      : storedDateRange
      ? stringDateRangeToDateRangeObj(storedDateRange)
      : { from: '', to: '' }
*/
   // const [dateRange, setDateRange] = useState(initialDetaRangeObj)

   // const { from, to } = dateRange
   ////console.log('dateRange ->', dateRange)
   // const strDateRange = dateRangeObjToISOString(dateRange)

   const handleNext = () => {
      setStep(1)
   }
   const handlePrev = () => {
      router.push(`/`)
   }

   const handleSelect = (picker) => (selectedDate) => {
      //   setDateRange({ ...dateRange, [picker]: selectedDate })
      const newDateRangeObj = { ...dateRangeObj, [picker]: selectedDate }
      const isoStringRangeObj = dateRangeObjToISOStringObj(newDateRangeObj)
      const strDateRange = dateRangeObjToISOString(newDateRangeObj)
      dispatch(dateRangeSelected(isoStringRangeObj))
   }
   const renderNextButton = (className) => (
      <Button
         disabled={!from || !to}
         onClick={() => setStep(1)}
         className={className}
      >
         Continuar
      </Button>
   )
   const renderPrevButton = (className) => (
      <Link href={`/`}>
         <Button className={className}>atrás</Button>
      </Link>
   )
   return (
      <Step
         renderNextButton={renderNextButton}
         renderPrevButton={renderPrevButton}
         {...props}
      >
         <DateStep
            from={from}
            to={to}
            handleNext={handleNext}
            handlePrev={handlePrev}
            handleSelect={handleSelect}
            renderNextButton={renderNextButton}
            renderPrevButton={renderPrevButton}
         />
      </Step>
   )
}

function dateRangeObjToISOString(dateRange) {
   //console.log('dateRange @->', dateRange)
   const isoStringRangeObj = dateRangeObjToISOStringObj(dateRange)
   ////console.log('isoStringRangeObj ->', isoStringRangeObj)
   const strDateRange = dateRangeISOStringObjToString(isoStringRangeObj)
   ////console.log('strDateRange ->', strDateRange)
   return strDateRange
}
