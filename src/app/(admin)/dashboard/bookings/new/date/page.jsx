import DateStepHandler from '@/components/stepper/date/DateStepHandler'

import { cookies } from 'next/headers'

import React from 'react'

import Step from '@/components/stepper/Step'
import StepShell from '@/components/stepper/StepShell'
import NotifyCart from '@/components/stepper/notifyCart/NotifyCart'
import StepHandler from '../../StepHandler'

export default async function DashboardDateStepPage({ params }) {
   const userSessionCookie = cookies().get('userSession')
   //console.log('userSessionCookie ', userSessionCookie)
   return (
      <div
         title={'Fecha'}
         description=" Indícanos la fecha de inicio y de finalización de tu reserva"
      >
         <DateStepHandler isAdmin={true} />

         <NotifyCart page={'date'} />
      </div>
   )
}
/*
  <DrawerDemo />
            <ToastDemo />
            <OrderCard />
            */
