import {
   getAppBikeConfigSegments,
   getAvailableBikes,
   getAvailableRanges,
   getAvailableSizesInRange,
   getAvailableTypes,
} from '@/lib/pg/crud/bikes'
import { cookies } from 'next/headers'

import React from 'react'

import Stepper from '@/components/stepper/Stepper'
import { getAppBikeSegments } from '@/utils/serverFns/serverFns'

import StepShell from '@/components/stepper/StepShell'
import AvailableBikeListHandler from '@/components/stepper/bikes/AvailableBikeListHandler'
import BikesStepHandlerTest from '@/components/stepper/bikes/BikesStepHandlerTest'
import NotifyCart from '@/components/stepper/notifyCart/NotifyCart'
import StepHandler from '../../StepHandler'

export default async function DashboardBikesStepPage({ params, searchParams }) {
   console.log(
      'DashboardBikesStepPage searchParams ****************** -> ',
      searchParams
   )
   const { userId } = searchParams

   const { segmentList } = await getAppBikeSegments()

   return (
      <>
         <StepHandler>
            <BikesStepHandlerTest
               segmentList={segmentList}
               //loadedSearchKeys={loadedSearchKeys}
               // loadedData={loadedPreviusStateData}
               isAdmin={true}
               userId={userId}

               // selectedBike={selectedBike}
            />
         </StepHandler>
         <AvailableBikeListHandler
            //loadedAvailableBikes={loadedPreviusStateData?.availableBikes}
            isLogged={true}
         />
         <NotifyCart page={'bikes'} userId={userId} />
      </>
   )
}
