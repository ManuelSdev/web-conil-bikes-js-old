import DateStepHandler from '@/app/(site)/bookingg/date/DateStepHandler'

import { cookies } from 'next/headers'

import React from 'react'

import Step from '@/components/stepper/Step'
import NotifyCart from '../NotifyCart'

export default async function DateStepPage({ params }) {
   const userSessionCookie = cookies().get('userSession')
   //console.log('userSessionCookie ', userSessionCookie)
   return (
      <div>
         <Step
            step={1}
            title={'Fecha'}
            info=" Indícanos la fecha de inicio y de finalización de tu reserva"
         >
            <DateStepHandler />
         </Step>
         <NotifyCart page={'date'} />
      </div>
   )
}
/*
  <DrawerDemo />
            <ToastDemo />
            <OrderCard />
            */
