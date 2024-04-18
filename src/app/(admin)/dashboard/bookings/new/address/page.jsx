import React from 'react'
import Stepper from '@/components/stepper/Stepper'
import StepShell from '@/components/stepper/StepShell'
import BookingAddressHandler from '@/components/stepper/address/BookingAddressHandler'
import NotifyCart from '@/components/stepper/notifyCart/NotifyCart'
import StepHandler from '../../StepHandler'

export default async function DashboardAddressStepPage({
   params,
   searchParams,
}) {
   const { userId } = searchParams

   return (
      <StepHandler>
         <BookingAddressHandler isAdmin={true} userId={userId} />

         <NotifyCart page="address" userId={userId} />
      </StepHandler>
   )
}
