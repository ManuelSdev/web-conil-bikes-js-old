import React from 'react'
import Step from '@/components/stepper/Step'
import BookingAddressHandler from './BookingAddressHandler'
import NotifyCart from '../NotifyCart'

export default async function AddressStepPage({ params }) {
   return (
      <div>
         <Step
            step={3}
            page="address"
            title={'Dirección'}
            info="Indica cual será tu dirección durante la reserva y como quieres gestionar la entrega y devolución las bicicletas"
         >
            <BookingAddressHandler />
         </Step>
         <NotifyCart page="address" />
      </div>
   )
}
