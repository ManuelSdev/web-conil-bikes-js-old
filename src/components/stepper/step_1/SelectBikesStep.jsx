//@ts-nocheck
'use client'
import React, { useContext } from 'react'
import BikeFilters from './BikeFilters'

export default function SelectBikesStep({
   dateRange,
   availableSizes,
   appBikesConfig,
}) {
   return (
      <BikeFilters
         dateRange={dateRange}
         availableSizes={availableSizes}
         appBikesConfig={appBikesConfig}
      />
   )
}
