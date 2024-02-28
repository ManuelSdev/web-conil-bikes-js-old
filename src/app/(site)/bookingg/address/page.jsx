import React from 'react'
import Step from '@/components/stepper/Step'
import BookingAddressHandler from './BookingAddressHandler'
import NotifyCart from '../NotifyCart'
import StepShell from '@/components/stepper/StepShell'

export default async function AddressStepPage({ params }) {
   return (
      <StepShell
         title={'Dirección'}
         description="Indica cual será tu dirección durante la reserva y como quieres gestionar la entrega y devolución las bicicletas"
      >
         <Step step={3} page="address">
            <BookingAddressHandler />
         </Step>
         <NotifyCart page="address" />
      </StepShell>
   )
}
