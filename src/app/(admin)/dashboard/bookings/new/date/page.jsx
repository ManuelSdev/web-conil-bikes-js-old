import DateStepHandler from '@/components/stepper/date/DateStepHandler'

import { cookies } from 'next/headers'

import React from 'react'

import Stepper from '@/components/stepper/Stepper'
import NotifyCart from '@/components/stepper/notifyCart/NotifyCart'
import StepHandler from '../../StepHandler'
import StepShell from '@/components/stepper/StepShell'

export default async function DashboardDateStepPage({ params, searchParams }) {
   const userSessionCookie = cookies().get('userSession')
   const { userId } = searchParams
   //console.log('userSessionCookie ', userSessionCookie)
   return (
      <StepHandler>
         <DateStepHandler isAdmin={true} userId={userId} />
         <NotifyCart page={'date'} userId={userId} />
      </StepHandler>
   )
}
/*
  <DrawerDemo />
            <ToastDemo />
            <OrderCard />
            */
