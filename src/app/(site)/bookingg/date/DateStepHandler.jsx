'use client'
import React, { useEffect, useState } from 'react'
import DateStep from './DateStep'
import { useDispatch, useSelector } from 'react-redux'
import {
   bikesReseted,
   dateRangeSelected,
   selectBikes,
   selectDateRange,
} from '@/lib/redux/slices/bookingFormSlice'
import {
   dateRangeISOStrObjToDateRangeObjs,
   dateRangeISOStringObjToString,
   dateRangeObjToISOStringObj,
   stringDateRangeToDateRangeObj,
} from '@/utils/datesFns/createDateRangeString'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

import StepControls from '../../../../components/stepper/StepControls'
import { ArrowRight } from '@phosphor-icons/react'
import { cn } from '@/utils/app/functions'
import { AlertDialogButton } from '@/components/common/AlertDialogButton'
import BikeWheel from '@/components/svg/BikeWheel'
import ModalLoader from '@/components/common/ModalLoader'
import { DialogLoader } from '@/components/common/DialogLoader'

export default function DateStepHandler({
   setStep,
   cookieDateRange,
   className,
   ...props
}) {
   //console.log('DateStepUserHandler @@@->')
   const dispatch = useDispatch()
   const storedDateRange = useSelector(selectDateRange)
   const storedBikes = useSelector(selectBikes)
   const dateRangeObj = dateRangeISOStrObjToDateRangeObjs(storedDateRange)
   const { from, to } = dateRangeObj

   const areBikes = !!storedBikes.length > 0
   // const isDisabled = !bikeIsSelected && !!from && !!to

   console.log('isDisabled ->', areBikes)
   const handleSelect = (picker) => (selectedDate) => {
      //   setDateRange({ ...dateRange, [picker]: selectedDate })
      const newDateRangeObj = { ...dateRangeObj, [picker]: selectedDate }
      const isoStringRangeObj = dateRangeObjToISOStringObj(newDateRangeObj)
      const strDateRange = dateRangeObjToISOString(newDateRangeObj)
      dispatch(dateRangeSelected(isoStringRangeObj))
   }

   const renderNextButton = (className) => {
      const isDisabled = !from || !to

      return isDisabled ? (
         <Button disabled variant="custom" className={className}>
            Siguiente <ArrowRight weight="bold" className="ml-2 h-4 w-4" />
         </Button>
      ) : (
         <Button asChild variant="custom" className={className}>
            <Link href={'/bookingg/bikes'}>
               Siguiente <ArrowRight weight="bold" className="ml-2 h-4 w-4" />
            </Link>
         </Button>
      )
   }

   return (
      <div className={'mx-auto max-w-xs'}>
         {/*<DialogLoader open={true} />*/}

         <DateStep
            isDisabled={areBikes}
            from={from}
            to={to}
            linkDisabled={!from || !to}
            handleSelect={handleSelect}
         />
         <div className="mt-4 flex">
            <AlertDialogButton
               className={cn({ 'hidden': !areBikes }, 'grow')}
               variant={'reverse'}
               title={'Aviso'}
               description={
                  'Al modificar la fecha de reserva, las bicicletas seleccionadas para la fecha actual serán eliminadas para que pueda realizar una nueva búsqueda de bicicletas dentro de la nueva fecha seleccionada.'
               }
               actionText={'Modificar fecha'}
               cancelText={'Cancelar'}
               triggerButtonText={'Modificar fecha'}
               handleAction={(event) => dispatch(bikesReseted())}
            />
         </div>

         <StepControls renderNextButton={renderNextButton} />
      </div>
   )
}

function dateRangeObjToISOString(dateRange) {
   //console.log('dateRange @->', dateRange)
   const isoStringRangeObj = dateRangeObjToISOStringObj(dateRange)
   ////console.log('isoStringRangeObj ->', isoStringRangeObj)
   const strDateRange = dateRangeISOStringObjToString(isoStringRangeObj)
   ////console.log('strDateRange ->', strDateRange)
   return strDateRange
}
