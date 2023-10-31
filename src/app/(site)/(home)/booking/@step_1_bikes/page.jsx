//@ts-nocheck
import SelectBikesStep from '@/components/stepper/step_1/SelectBikesStep'
import { getAvaiableBikeSizesOnRange } from '@/utils/crudApiFns/bikes'
import {
   createDateRangeString,
   dateRangeISOStringObjToString,
   dateRangeObjToISOStringObj,
} from '@/utils/datesFns/createDateRangeString'
import React from 'react'

export default async function StepOneBookingPage({ searchParams }) {
   const { from: encodedFromDate, to: encodedToDate, step } = searchParams

   if (step !== '1') return null
   //Estas ya vienen en formato ISOString al ser decodificadas

   const fromDate = decodeURIComponent(encodedFromDate)
   const toDate = decodeURIComponent(encodedToDate)
   const dateRange = dateRangeISOStringObjToString({
      from: fromDate,
      to: toDate,
   })
   const res = await getAvaiableBikeSizesOnRange(dateRange)
   const { avaiableBikeSizes } = await res.json()
   console.log('dateRange ->', avaiableBikeSizes)
   return (
      <SelectBikesStep
         dateRange={dateRange}
         avaiableBikeSizes={avaiableBikeSizes}
      />
   )
}
