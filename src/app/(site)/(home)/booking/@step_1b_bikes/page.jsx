//@ts-nocheck
import {
   getAppBikesConfig,
   getAvailableBikes,
   getAvailableSizesInRange,
} from '@/lib/pg-promise/crud/bikes'

import React from 'react'
import getConfig from 'next/config'
import BikeFilters from '@/components/stepper/step_1/BikeFilters'
import AvaiableBikesList from '@/components/stepper/step_1/AvailableBikeList'
import { Button } from '@/components/ui/button'

export default async function StepOneBookingPage({ searchParams }) {
   console.log(
      '############################################################################### '
         .getConfig
   )
   const { step, date: dateRange, size, type, range } = searchParams
   console.log('dateRange ->', dateRange)
   console.log('size ->', size)
   console.log('type ->', type)
   console.log('range ->', range)
   if (step !== '1b') return null

   console.log('## CALL getAvailableSizesInRange FROM STEP 1 ##')
   const res = await getAvailableBikes({ dateRange, size, type, range })

   const availableBikes = await res.json()
   console.log('availableBikes ->', availableBikes)
   //console.log('dateRange ->', availableSizes)
   return (
      <div>
         <Button>Atrás</Button>
         <AvaiableBikesList
            availableBikes={availableBikes}
            dateRange={dateRange}
         />
      </div>
   )
}
