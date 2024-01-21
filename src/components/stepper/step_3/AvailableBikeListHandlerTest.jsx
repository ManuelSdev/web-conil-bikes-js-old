'use client'
import React, { useEffect } from 'react'
import AvailableBikesList from './AvailableBikeList'
import {
   useGetAvailableBikesQuery,
   useLazyGetAvailableBikesQuery,
} from '@/lib/redux/apiSlices/bikeApi'
import { useDispatch, useSelector } from 'react-redux'
import {
   bikeSelected,
   selectBikesearchParams,
   selectDateRange,
} from '@/lib/redux/slices/bookingFormSlice'
import { Button } from '@/components/ui/button'
import AvailableBikeListStep from './AvailableBikeListStep'
import { dateRangeISOStringObjToString } from '@/utils/datesFns/createDateRangeString'
import Step from '../Step'
import StepperControlButtons from '../StepperControlButtons'
import BikeCard from './BikeCard'
import { Separator } from '@/components/ui/separator'
import { AlertDialogButton } from '@/components/common/AlertDialogButton'
import { useLazyCreateCookieQuery } from '@/lib/redux/apiSlices/cookieApi'
import { useRouter } from 'next/navigation'

export default function AvailableBikeListHandlerTest({
   setStep,
   isLogged,
   ...props
}) {
   console.log('AvailableBikeListUserHandler @@@->')
   const storedDateRange = useSelector(selectDateRange)
   const dateRange = dateRangeISOStringObjToString(storedDateRange)
   const bikeSearchParams = useSelector(selectBikesearchParams)

   const router = useRouter()
   const [triggerCookie] = useLazyCreateCookieQuery()

   /*
   const {
      data: availableBikes,
      isLoading,
      isSuccess,
      refetch,
      isFetching,
   } = useGetAvailableBikesQuery({ dateRange, ...bikeSearchParams })
   */
   // console.log('availableBikes ->', availableBikes)
   const dispatch = useDispatch()

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

   const handleSelect = (bike) => (ev) => {
      // console.log('bike ->', bike)
      dispatch(bikeSelected(bike))
      // setStep(1)
   }
   const renderPrevButton = () => (
      <Button onClick={() => setStep(2)} className="text-greenCorp">
         atrás
      </Button>
   )

   const handleDialogAction = () => {
      const stepperData = { dateRange, ...bikeSearchParams }
      const cookieValue = JSON.stringify(stepperData)
      triggerCookie({ name: 'stepperData', value: cookieValue })
      triggerCookie({ name: 'resolvedUrl', value: '/bookingg/bikes' })
      router.push(
         //`/user/booking?step=1b&date=${dateRange}&size=${size}&type=${type}&range=${range}`
         '/auth/sign-in'
      )
   }
   const renderSelectBikeButton = (bike) =>
      isLogged ? (
         <Button onClick={handleSelect(bike)}>Seleccionar</Button>
      ) : (
         <AlertDialogButton
            title={'Inicia sesión para reservar'}
            description={
               'Para gestionar una reserva, primero debes iniciar sesión. Pulsa el botón para acceder a la página de inicio de sesión, donde podrás acceder con tu cuenta o crear una nueva si aún no lo has hecho.'
            }
            actionText={'Iniciar sesión'}
            cancelText={'Cancelar'}
            triggerButtonText={'Seleccionarss'}
            handleAction={handleDialogAction}
         />
      )

   useEffect(() => {
      const { size, type, range } = bikeSearchParams
      size && type && range && triggerBikes({ dateRange, ...bikeSearchParams })
   }, [bikeSearchParams])

   return isFetchingBikes ? (
      <div>LOADING availableBikes EN @@@ USER AvailableBikeListStep @@@</div>
   ) : availableBikes ? (
      <div className="bg-[RGB(243,240,243)]">
         {availableBikes.map(
            (bike, idx) =>
               console.log('availableBikes -> ', availableBikes) || (
                  <div key={idx}>
                     <BikeCard
                        bike={bike}
                        renderSelectBikeButton={renderSelectBikeButton}
                     />
                     <Separator className="holi my-4" />
                  </div>
               )
         )}
      </div>
   ) : (
      <div>NADA AUN</div>
   )
}
BikeCard
