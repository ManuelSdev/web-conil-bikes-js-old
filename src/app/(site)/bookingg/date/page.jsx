import { DrawerDemo } from '@/components/drawer/DrawerDemo'
import StepsLine from '@/components/stepper/StepsLine'
import StepsPanel from '@/components/stepper/StepsPanel'
import UserStepper from '@/components/stepper/UserStepper'
import DateStepHandler from '@/components/stepper/step_0/DateStepHandler'
import { verifySessionCookie } from '@/lib/firebase/admin/verifySessionCookie'
import { getAppBikeConfigSegments } from '@/lib/pg/crud/bikes'
import { getUserIdByEmail } from '@/lib/pg/crud/users'
import { cookies } from 'next/headers'
import Link from 'next/link'

import React from 'react'
import { ToastDemo } from './ToastDemo'
import OrderCard from '@/components/a/OrderCard'
import Cart from '@/components/a/Cart'
import Step from '@/components/stepper/Step'

export default async function BookingDatePage({ params }) {
   const userSessionCookie = cookies().get('userSession')
   //console.log('userSessionCookie ', userSessionCookie)
   return (
      <div>
         {' '}
         <Step step={1} title={'Hola'}>
            {' '}
            <DateStepHandler />
            <DrawerDemo />
            <ToastDemo />
            <OrderCard />
         </Step>
      </div>
   )
}
