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

export default function DateStepUserHandler({ setStep, cookieDateRange }) {
   const dispatch = useDispatch()
   const storedDateRange = useSelector(selectDateRange)
   const dateRangeObj = dateRangeISOStrObjToDateRangeObjs(storedDateRange)
   const { from, to } = dateRangeObj
   /*
   const dateRange = storedDateRange
      ? stringDateRangeToDateRangeObj(storedDateRange)
      : { from: '', to: '' }
   console.log('dateRange ->', dateRange)
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
      const newDateRangeObj = { ...dateRangeObj, [picker]: selectedDate }
      const isoStringRangeObj = dateRangeObjToISOStringObj(newDateRangeObj)
      const strDateRange = dateRangeObjToISOString(newDateRangeObj)
      dispatch(dateRangeSelected(isoStringRangeObj))
   }
   const renderNextButton = () => (
      <Button
         disabled={!from || !to}
         onClick={() => setStep(1)}
         className="text-greenCorp"
      >
         continuar
      </Button>
   )
   const renderPrevButton = () => (
      <Link href={`/`}>
         <Button className="text-greenCorp">atrás</Button>
      </Link>
   )
   return (
      <DateStep
         from={from}
         to={to}
         handleNext={handleNext}
         handlePrev={handlePrev}
         handleSelect={handleSelect}
         renderNextButton={renderNextButton}
         renderPrevButton={renderPrevButton}
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
