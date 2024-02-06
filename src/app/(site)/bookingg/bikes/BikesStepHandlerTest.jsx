'use client'
import React, { useEffect } from 'react'
import {
   useGetAppBikesConfigQuery,
   useGetAvailableSizesQuery,
   useLazyGetAvailableBikesQuery,
} from '@/lib/redux/apiSlices/bikeApi'
import { useDispatch, useSelector } from 'react-redux'
import {
   bikeSearchParamsSelected,
   selectBikesByUnits,
   bikeSelected,
   selectDateRange,
   segmentListLoaded,
} from '@/lib/redux/slices/bookingFormSlice'
import { dateRangeISOStringObjToString } from '@/utils/datesFns/createDateRangeString'
import { Button } from '@/components/ui/button'

import { useRouter } from 'next/navigation'
import BikeFiltersForm from '@/components/stepper/step_2/BikeFiltersForm'
import AvailableBikeListStep from '@/components/stepper/step_3/AvailableBikeListStep'
import StepLayout from '@/components/stepper/stepLayout/StepLayout'
import BikeCard from '@/components/stepper/step_3/BikeCard'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/utils/app/functions'
import StepControls from '@/components/stepper/StepControls'
import Link from 'next/link'

export default function BikesStepHandlerTest({
   setStep,
   segmentList,
   ...props
   //appBikesConfig,
   // availableSizes,
}) {
   //console.log('BikeFiltersStepUserHandler @@@->')
   const dispatch = useDispatch()

   const strDateRangeObj = useSelector(selectDateRange)
   const { from, to } = strDateRangeObj
   const isDateRange = !!from && !!to
   const bikesByUnits = useSelector(selectBikesByUnits)
   const bikesQuantity = bikesByUnits.length
   const router = useRouter()
   const dateRange = dateRangeISOStringObjToString(strDateRangeObj)
   //console.log('dateRange @->', isDateRange)
   useEffect(() => {
      dispatch(segmentListLoaded(segmentList))
   }, [])

   //isDateRange || router.push('/bookingg/date')
   //const segmentList = useSelector(selectSegmentList)
   const {
      data: appBikesConfig,
      isLoading: isLoadingConfig,
      isSuccess,
      refetch,
      isFetching,
   } = useGetAppBikesConfigQuery()

   const { data: availableSizes, isLoading: isLoadingSizes } =
      useGetAvailableSizesQuery({ dateRange })

   const [
      triggerBikes,
      {
         data: availableBikes,
         isFetching: isFetchingBikes,
         isSuccess: isSuccessBikes,
         unsubscribe,
      },
      lastPromiseInfoBikes,
   ] = useLazyGetAvailableBikesQuery()

   const renderShowBikesButton = ({ size, type, range, className }) => (
      <Button
         className={cn('text-greenCorp', className)}
         onClick={() => {
            // triggerBikes({ dateRange, size, type, range })
            dispatch(bikeSearchParamsSelected({ size, type, range }))
            //   setStep(3)
         }}
         disabled={!range}
         //type="submit"
      >
         MOSTRAR BICICLETAS
      </Button>
   )

   const renderNextButton = ({ renderClassName }) => {
      const isDisabled = !bikesQuantity

      return isDisabled ? (
         <Button disabled className={renderClassName}>
            Siguiente
         </Button>
      ) : (
         <Link href={`/bookingg/address`}>
            <Button className={renderClassName}>Siguiente</Button>
         </Link>
      )
   }

   const renderPrevButton = ({ renderClassName }) => (
      <Link href={'bookingg/date'}>
         {' '}
         <Button className={renderClassName}>Atrás</Button>
      </Link>
   )

   const handleSelect = (bike) => (ev) => {
      ////console.log('bike ->', bike)
      dispatch(bikeSelected(bike))
      // setStep(1)
   }
   return (
      <div>
         <BikeFiltersForm
            isLoadingSizes={isLoadingSizes}
            availableSizes={availableSizes}
            segmentList={segmentList}
            dateRange={dateRange}
            disabled={true}
            renderShowBikesButton={renderShowBikesButton}
            renderPrevButton={renderPrevButton}
         />
         <StepControls
            renderNextButton={renderNextButton}
            renderPrevButton={renderPrevButton}
         />
         {/*isFetchingBikes ? (
            <div>
               LOADING availableBikes EN @@@ USER AvailableBikeListStep @@@
            </div>
         ) : availableBikes ? (
            <div className="bg-[RGB(243,240,243)]">
               {availableBikes.map((bike, idx) => (
                  <div>
                     <BikeCard bike={bike} />
                     <Separator className="holi my-4" />
                  </div>
               ))}
            </div>
         ) : (
            <div>NADA AUN</div>
         )*/}
      </div>
   )
}

/*
 <AvailableBikeListStep
               isLogged={true}
               availableBikes={availableBikes}
               renderSelectBikeButton={(bike) => (
                  <Button onClick={handleSelect(bike)}>Seleccionar</Button>
               )}
               renderPrevButton={renderPrevButton}
            />
            */
