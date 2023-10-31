//@ts-nocheck
'use client'
import React, { useContext } from 'react'
import SelectBikesStepForm from './SelectBikesStepForm'
import BookingFormProvider from '@/app/(site)/(home)/booking/BookingFormProvider'

export default function SelectBikesStep({ avaiableBikeSizes }) {
   return (
      <BookingFormProvider>
         <SelectBikesStepForm avaiableBikeSizes={avaiableBikeSizes} />
      </BookingFormProvider>
   )
}
