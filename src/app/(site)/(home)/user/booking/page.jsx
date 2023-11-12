import UserStepper from '@/components/stepper/UserStepper'
import { verifySessionCookie } from '@/lib/firebase/admin/verifySessionCookie'
import { getAppBikesConfig } from '@/lib/pg-promise/crud/bikes'
import { getUserByEmail } from '@/lib/pg/crud/users'
import { cookies } from 'next/headers'

import React from 'react'

export default async function UserBookingStepperPage() {
   const isStepperCookiee = cookies().has('stepperData')
   const stepperDataCookie = cookies().get('stepperData')
   const userSessionCookie = cookies().get('userSession')
   //const bookingResumeCookie = cookies().get('bookingResume')
   //TODO: METE app_user_id en decodeClaims para no tener que buscarlo en la base de datos
   const {
      name,
      email,
      phone_number: phone,
   } = await getFireUserBySessionCookie(userSessionCookie.value)

   const resAppUserId = await getUserByEmail({ email })
   const appUserId = await resAppUserId.json()
   console.log('appUserId ->', appUserId)
   const resAppBikesConfig = await getAppBikesConfig()
   const { segmentList } = await resAppBikesConfig.json()

   return (
      <UserStepper
         user={{ name, email, phone, userId: appUserId }}
         stepperDataCookie={stepperDataCookie}
         //   bookingResumeCookie={bookingResumeCookie}
         segmentList={segmentList}
      />
   )
}

async function getFireUserBySessionCookie(cookie) {
   const decodeClaims = await verifySessionCookie(cookie)
   return decodeClaims
}
