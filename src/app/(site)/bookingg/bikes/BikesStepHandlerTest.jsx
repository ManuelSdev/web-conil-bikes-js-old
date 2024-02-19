'use client'
import React, { useEffect, useState } from 'react'
import {
   useGetAppBikesConfigQuery,
   useGetAvailableBikesQueryState,
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
   searchKeysLoaded,
   selectBikeSearchParams,
   selectSegmentList,
   dateRangeSelected,
   bikeSearchParamsDeleted,
} from '@/lib/redux/slices/bookingFormSlice'
import {
   dateRangeISOStringObjToString,
   stringDateRangeToISOStringObj,
} from '@/utils/datesFns/createDateRangeString'
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
import { Search } from 'lucide-react'
import useLazyGetAvailableBikesQueryHook from '@/lib/redux/apiSlices/bikesApiHooks/useLazyGetAvailableBikesQueryHook'
import { Loader2 } from 'lucide-react'
import { useLazyDeleteCookieQuery } from '@/lib/redux/apiSlices/cookieApi'
import { de } from 'date-fns/locale'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'

export default function BikesStepHandlerTest({
   setStep,
   segmentList,
   loadedSearchKeys: searchKeys,

   loadedData,
   ...props
   //appBikesConfig,
   // availableSizes,
}) {
   const dispatch = useDispatch()

   const [deleteCookie] = useLazyDeleteCookieQuery()

   const strDateRangeObj = useSelector(selectDateRange)
   const dateRange = dateRangeISOStringObjToString(strDateRangeObj)
   const { from, to } = strDateRangeObj
   const isDateRange = !!from && !!to

   const bikeSearchParams = useSelector(selectBikeSearchParams)
   const bikesByUnits = useSelector(selectBikesByUnits)
   const bikesQuantity = bikesByUnits.length

   const loadedSegmentList = useSelector(selectSegmentList)

   const {
      data: availableSizes,
      isLoading: isLoadingSizes,
      isSuccess: isSuccessSizes,
   } = useGetAvailableSizesQuery({ dateRange }, { skip: !!loadedData })

   const {
      availableBikes,
      isFetchingBikes,
      isSuccessBikes,
      originalArgs,
      lastPromiseInfoBikes,
   } = useLazyGetAvailableBikesQueryHook()

   const [isDisabled, setIsDisabled] = useState(true)

   const handleDisabled = (newKeys) => {}

   useEffect(() => {
      dispatch(segmentListLoaded(segmentList))
      searchKeys &&
         dispatch(
            dateRangeSelected(
               stringDateRangeToISOStringObj(searchKeys.dateRange)
            )
         )
      return () => dispatch(bikeSearchParamsDeleted())
   }, [])

   useEffect(() => {
      if (searchKeys && loadedSegmentList) {
         deleteCookie('searchKeys')
         const selectedBikeJson = window.localStorage.getItem('selectedBike')
         console.log('selectedBikeJson ->', selectedBikeJson)
         const selectedBike = JSON.parse(selectedBikeJson)
         window.localStorage.removeItem('selectedBike')
         // deleteCookie('selectedBike')
         console.log('selectedBike ->', selectedBike)
         //  dispatch(searchKeysLoaded(searchKeys))
         //  console.log('selectedBike ->', selectedBike)
         selectedBike && dispatch(bikeSelected(selectedBike))
         if (selectedBikeJson) {
         }
      }

      // return () => window.localStorage.removeItem('selectedBike')
   }, [loadedSegmentList])

   const renderShowBikesButton = ({ size, type, range, className }) =>
      isFetchingBikes ? (
         <Button
            variant="reverse"
            className={cn(className)}

            //  disabled={!range}
            //type="submit"
         >
            <Loader2 className="mr-2 h-4 w-4  animate-spin" /> Cargando...
         </Button>
      ) : (
         <Button
            variant="reverse"
            className={cn(className)}
            //   className={cn('bg-greenCorp text-black', className)}
            onClick={() => {
               dispatch(bikeSearchParamsSelected({ size, type, range }))

               //   setStep(3)
            }}
            disabled={!range}
            //type="submit"
         >
            <Search className="mr-2 h-4 w-4" />
            Mostrar bicicletas
         </Button>
      )

   const renderNextButton = (renderClassName) => {
      const isDisabled = !bikesQuantity

      return isDisabled ? (
         <Button disabled variant="custom" className={renderClassName}>
            Siguiente <ArrowRight weight="bold" className="ml-2 h-4 w-4" />
         </Button>
      ) : (
         <Button asChild variant="custom" className={renderClassName}>
            <Link href={'/bookingg/address'}>
               Siguiente <ArrowRight weight="bold" className="ml-2 h-4 w-4" />
            </Link>
         </Button>
      )
   }

   const renderPrevButton = (renderClassName) => (
      <Button asChild variant="custom" className={renderClassName}>
         <Link href={'/bookingg/date'}>
            {' '}
            <ArrowLeft weight="bold" className="mr-2 h-4 w-4" />
            Atrás{' '}
         </Link>
      </Button>
   )

   const handleSelect = (bike) => (ev) => {
      ////console.log('bike ->', bike)
      dispatch(bikeSelected(bike))
      // setStep(1)
   }
   return (
      <div>
         <BikeFiltersForm
            loadedData={loadedData}
            loadedSearchKeys={searchKeys}
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
