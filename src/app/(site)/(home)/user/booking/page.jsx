import UserStepper from '@/components/stepper/UserStepper'
import { verifySessionCookie } from '@/lib/firebase/admin/verifySessionCookie'
import { getAppBikeConfigSegments } from '@/lib/pg/crud/bikes'
import { getUserIdByEmail } from '@/lib/pg/crud/users'
import { cookies } from 'next/headers'

import React from 'react'

export default async function UserBookingStepperPage() {
   const isStepperCookiee = cookies().has('stepperData')
   const stepperDataCookie = cookies().get('stepperData')
   const userSessionCookie = cookies().get('userSession')
   //const bookingResumeCookie = cookies().get('bookingResume')

   const { name, email, phone, appUserId, segmentList } =
      await getPageData(userSessionCookie)

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
async function getPageData(userSessionCookie) {
   //TODO: METE app_user_id en decodeClaims para no tener que buscarlo en la base de datos
   const decodeClaims = await verifySessionCookie(userSessionCookie.value)
   const { name, email, phone_number: phone } = decodeClaims

   const resAppUserId = await getUserIdByEmail({ email })
   const appUserId = await resAppUserId.json()

   const resAppBikesConfigSegments = await getAppBikeConfigSegments()
   const segmentList = await resAppBikesConfigSegments.json()

   return { name, email, phone, appUserId, segmentList }
}
