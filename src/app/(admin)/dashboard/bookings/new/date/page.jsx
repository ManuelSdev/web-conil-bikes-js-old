import DateStepHandler from '@/app/(site)/bookingg/date/DateStepHandler'

import { cookies } from 'next/headers'

import React from 'react'

import Step from '@/components/stepper/Step'
import NotifyCart from '@/app/(site)/bookingg/NotifyCart'
import StepShell from '@/components/stepper/StepShell'

export default async function DateStepPage({ params }) {
   const userSessionCookie = cookies().get('userSession')
   //console.log('userSessionCookie ', userSessionCookie)
   return (
      <StepShell
         title={'Fecha'}
         description=" Indícanos la fecha de inicio y de finalización de tu reserva"
      >
         <Step step={1}>
            <DateStepHandler />
         </Step>
         <NotifyCart page={'date'} />
      </StepShell>
   )
}
/*
  <DrawerDemo />
            <ToastDemo />
            <OrderCard />
            */
