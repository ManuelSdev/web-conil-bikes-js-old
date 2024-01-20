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

export default function BikesStepHandler({
   setStep,
   segmentList,
   ...props
   //appBikesConfig,
   // availableSizes,
}) {
   console.log('BikeFiltersStepUserHandler @@@->')
   const dispatch = useDispatch()

   const strDateRangeObj = useSelector(selectDateRange)
   const { from, to } = strDateRangeObj
   const isDateRange = !!from && !!to
   const storedBikesByUnits = useSelector(selectBikesByUnits)
   const router = useRouter()
   const dateRange = dateRangeISOStringObjToString(strDateRangeObj)
   console.log('dateRange @->', isDateRange)
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
         className={className}
         onClick={() => {
            triggerBikes({ dateRange, size, type, range })
            //   setStep(3)
         }}
         disabled={!range}
         //type="submit"
      >
         MOSTRAR BICICLETAS
      </Button>
   )
   const renderPrevButton = () => (
      <Button
         //   onClick={() => setStep(storedBikesByUnits.length === 0 ? 0 : 1)}
         className="text-greenCorp"
      >
         atrás
      </Button>
   )
   const handleSelect = (bike) => (ev) => {
      // console.log('bike ->', bike)
      dispatch(bikeSelected(bike))
      // setStep(1)
   }
   return (
      <StepLayout>
         <BikeFiltersForm
            isLoadingSizes={isLoadingSizes}
            availableSizes={availableSizes}
            segmentList={segmentList}
            dateRange={dateRange}
            disabled={true}
            renderShowBikesButton={renderShowBikesButton}
            renderPrevButton={renderPrevButton}
         />
         {isFetchingBikes ? (
            <div>
               LOADING availableBikes EN @@@ USER AvailableBikeListStep @@@
            </div>
         ) : availableBikes ? (
            <AvailableBikeListStep
               isLogged={true}
               availableBikes={availableBikes}
               renderSelectBikeButton={(bike) => (
                  <Button onClick={handleSelect(bike)}>Seleccionar</Button>
               )}
               renderPrevButton={renderPrevButton}
            />
         ) : (
            <div>NADA AUN</div>
         )}
      </StepLayout>
   )
}
