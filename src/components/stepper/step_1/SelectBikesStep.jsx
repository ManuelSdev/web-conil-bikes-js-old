//@ts-nocheck
'use client'
import React, { useContext } from 'react'
import SelectBikesStepForm from './BikeFilters'

export default function SelectBikesStep({ dateRange, availableBikeSizes }) {
   return (
      <SelectBikesStepForm
         dateRange={dateRange}
         availableBikeSizes={availableBikeSizes}
      />
   )
}
