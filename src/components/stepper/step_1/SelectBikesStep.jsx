//@ts-nocheck
'use client'
import React, { useContext } from 'react'
import BikeFilters from './BikeFilters'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export default function SelectBikesStep({
   dateRange,
   availableSizes,
   appBikesConfig,
}) {
   if (step === 0)
      return (
         <BikeFilters
            form={form}
            dateRange={dateRange}
            //    setStep={setStep}
            availableSizes={availableSizes}
            appBikesConfig={appBikesConfig}
         />
      )
   else return <div>step 2</div>
}
