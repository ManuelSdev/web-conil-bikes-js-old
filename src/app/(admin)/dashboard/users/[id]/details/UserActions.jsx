'use client'
import BasicCard from '@/components/BasicCard'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/utils/app/functions'
import React from 'react'

import { PENDING, ACTIVE, FINISHED, CANCELLED } from '@/utils/app/appValues'
import { useUpdateBookingMutation } from '@/lib/redux/apiSlices/bookingApi'
import { DialogLoader } from '@/components/common/DialogLoader'
import { DialogWindow } from '@/components/common/DialogWindow'
import useDialogWindow from '@/components/common/useDialogWindow'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { appIsloadingData } from '@/lib/redux/slices/appConfigSlice'
import ActionCardsGrid from '../../../bookings/[bookingId]/details/ActionCardsGrid'

const descriptions = {
   'start': 'Cambia el estado de la reserva a "activa"',
   'end': 'Cambia el estado de la reserva a finalizada',
   'cancel': 'Cambia el estado de la reserva a cancelada',
   'price': 'Edita el precio final de la reserva',
}
const infos = {
   'start':
      'Se donsidera que una reserva está en estado "activa" cuando el cliente ha recogido las bicicletas.',
   'end': 'Se considera que una reserva está en estado "finalizada" cuando el cliente ha devuelto las bicicletas.',
   'cancel':
      'Se considera que una reserva está en estado "cancelada" cuando el cliente ha cancelado la reserva.',
   'price': 'Permite un ajuste en el precio final de manera manual. ',
}

export default function UserActions({ className, user }) {
   const router = useRouter()

   const [updateBookingTrigger, { isLoading }] = useUpdateBookingMutation()
   const { dialog, handleSetDialog } = useDialogWindow(null)

   const dispatch = useDispatch()
   dispatch(appIsloadingData(isLoading))

   const handleSubmit = (newState) => async (event) => {
      console.log('newState ->', newState)
      /*
      const msg =
         newState === ACTIVE
            ? 'La reserva ha sido activada correctamente'
            : newState === FINISHED
            ? 'La reserva ha sido finalizada correctamente'
            : 'La reserva ha sido cancelada correctamente'
      event.preventDefault()
      // console.log('queryData ->', queryData)
      // const urlAfterBooking = isAdmin ? '/dashboard/bookings/calendar' : '/'
      //const emailHtml = getOrderResumeEmail(bookingData)
      try {
         const res = await updateBookingTrigger({
            bookingId,
            data: { newState },
         }).unwrap()
         console.log('res ->', res)
        
         handleSetDialog({
            open: true,
            title: msg,
            description: 'desc',
            closeText: 'Aceptar',
            onOpenChange: (bool) => {
               router.refresh(), handleSetDialog({ open: bool })
            },
         })
      } catch (error) {
         console.log('error ->', error)
         handleSetDialog({
            open: true,
            title: 'Ha ocurrido un error',
            description:
               'No se ha podido modificar el estado de la reserva. Por favor, inténtalo de nuevo pasados unos minutos.',
            closeText: 'Aceptar',
            //onOpenChange: (bool) => router.push(urlAfterBooking),
         })
      }
      */
   }
   return (
      <div className={cn('mt-8 space-y-4', className)}>
         {/*<DialogLoader open={isLoading} spinner={true} />*/}
         <DialogWindow {...dialog} />
         <ActionCardsGrid>
            <BasicCard
               tittle="Nueva reserva"
               description={descriptions.start}
               info={infos.start}
            >
               <Button onClick={handleSubmit(ACTIVE)}>Nueva </Button>
            </BasicCard>

            <BasicCard
               tittle="Editar usuario"
               description={descriptions.end}
               info={infos.end}
            >
               <Button onClick={handleSubmit(FINISHED)}>Editar</Button>
            </BasicCard>

            <BasicCard
               tittle="Suspender cuenta"
               description={descriptions.cancel}
               info={infos.cancel}
            >
               <Button>Suspender</Button>
            </BasicCard>

            <BasicCard
               tittle="Eliminar cuenta"
               description={descriptions.price}
               info={infos.price}
            >
               <Button>Eliminar</Button>
            </BasicCard>
         </ActionCardsGrid>
      </div>
   )
}
